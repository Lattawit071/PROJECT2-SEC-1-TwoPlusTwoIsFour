<script setup>
import { ref } from "vue";
import playBackgroundImg from "/images/image/PLAY.png";
import TopNavbar from "./TopNavbar.vue";
import HookButton from "./HookButton.vue";
import OutComesModal from "./OutComesModal.vue";
import RepairModal from "./RepairModal.vue";
import BottomNavBar from "./BottomNavBar.vue";
//data
import potion from "../../../data/potion.json";
import fish from "../../../data/fish.json";
import { usePlayerStore } from "@/stores/player";
import { useSoundStore } from "@/stores/sounds";

const player = usePlayerStore();
const sound = useSoundStore();

const props = defineProps({
  isSoundOn: {
    type: Boolean,
  },
  isSfxOn: {
    type: Boolean,
  },
});

const hooking = ref(false);
const gottenFish = ref(false);
const fishName = ref();
const escapedFish = ref(false);
const waiting = ref(false);
const ranNumber = ref(0);
const caughtFish = ref();
const ranTime = ref();
const reducesHp = ref();
const fishId = ref();
const rodId = ref();
const luck = ref(0);

const hookAnimationClass = ref("hook-animation-down");


function getPotionPlayerById(id) {
  return player.playerStore.usingPotion.find((potion) => potion.id === id);
}

function getPotionById(id) {
  return potion.find((potion) => potion.id === id);
}

function addCaughtFish(fishId) {
  const fish = getFishById(fishId);
  fish.quantity = 1;
  if (fish) {
    const existingFish = player.playerStore.caughtFish.find(
      (f) => f.id === fishId
    );

    if (existingFish) {
      existingFish.quantity += 1;
    } else {
      player.playerStore.caughtFish.push(fish);
    }
  }
}

function getFishById(id) {
  return fish.find((fish) => fish.id === id);
}

const hook = () => {
  if (hooking.value || waiting.value) {
    sound.playFailBuySound();
    return;
  }
  if (player.playerStore.usingRods.hp > 0) {
    reduceHpRods();

    if (player.playerStore.usingRods.hp < reducesHp.value) {
      sound.playFailBuySound();
      
    } else {
      player.playerStore.usingRods.hp -= reducesHp.value;
      rodId.value = player.playerStore.usingRods.id;
      sound.playHookFishSound();
      hookAnimationClass.value = "hook-animation-down";
      hooking.value = true;
      
      waitingForFunction();
    }
  } else {
    sound.playFailBuySound();
  }
};

function waitingForFunction() {
  if (waiting.value) {
    sound.playFailBuySound();
  } else {
    hookFish();
  }
}

function hookFish() {
  const chanceToGet = Math.random() * 100;
  doAfterTimeOut(() => {
    if (chanceToGet > 20) {
      checkRod();
      gottenFish.value = true;
      const lastCaughtFish = player.playerStore.caughtFish
        .slice()
        .reverse()
        .find((f) => f.id === caughtFish.value.id);
      if (lastCaughtFish) {
        fishName.value = lastCaughtFish.name;
      }
    } else {
      sound.playFailGetFishSound();
      escapedFish.value = true;
    }
    hookAnimationClass.value = "hook-animation-up";
    setTimeout(() => {
      hooking.value = false;
    }, 2000);
  });
}

function doAfterTimeOut(callback) {
  fishingTime();
  waiting.value = true;
  setTimeout(() => {
    waiting.value = false;
    callback();
  }, ranTime.value);
}

function fishingTime() {
  const speed = 0;
  if (checkEqualPotion(1, 1)) {
    luck.value + 15;
  }
  if (checkEqualPotion(2, 2)) {
    speed + 10;
  }
  if (checkEqualPotion(3, 3)) {
    luck.value + 15;
  }
  if (checkEqualPotion(4, 4)) {
    speed + 10;
  }
  if (checkEqualPotion(5, 5)) {
    speed + 20;
    luck.value + 20;
  }
  ranTime.value =
    Math.floor(Math.random() * ((18 * (100 - speed)) / 100 - 5) + 5) * 1000;
}

function checkEqualPotion(store, player) {
  if (getPotionById(store)?.id === getPotionPlayerById(player)?.id) {
    return true;
  } else {
    return false;
  }
}

function checkRod() {
  const checkRod = player.playerStore.usingRods.id;
  luck.value = luck.value + checkRod * 10;
  ranFish();
}

function ranFish() {
  const rate = Math.random() * 100;
  if (rate >= 55 + (5 * (100 + luck.value)) / 100) {
    random("common");
    sound.playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (
    rate >= 25 + (5 * (100 + luck.value)) / 100 &&
    rate < 55 + (5 * (100 + luck.value)) / 100
  ) {
    random("rare");
    sound.playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (
    rate >= (1 * (100 + luck.value)) / 100 &&
    rate < 25 + (5 * (100 + luck.value)) / 100
  ) {
    random("legendary");
    sound.playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else {
    random("secret");
    sound.playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  }
}

function random(type) {
  switch (type) {
    case "common":
      ranNumber.value = Math.floor(Math.random() * 10) + 1;
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "rare":
      ranNumber.value = Math.floor(Math.random() * (15 - 11) + 11);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "legendary":
      ranNumber.value = Math.floor(Math.random() * (20 - 15) + 15);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "secret":
      ranNumber.value = Math.floor(Math.random() * (20 - 20) + 20);
      caughtFish.value = getFishById(ranNumber.value);
      break;
  }
}

function reduceHpRods() {
  reducesHp.value = 0;
  if (player.playerStore.usingRods.id === 1) {
    reducesHp.value = 3;
  } else if (player.playerStore.usingRods.id === 2) {
    reducesHp.value = 2;
  } else {
    reducesHp.value = 1;
  }
}

const repairModal = ref(false);

const toggleRepairModal = () => {
  repairModal.value = !repairModal.value;
};

const repairRod = () => {
  const coinsPerHp = 25;
  const rod = player.playerStore.usingRods;
  const hpToRepair = rod.maxHp - rod.hp;
  const repairCost = hpToRepair * coinsPerHp;

  if (player.playerStore.coins >= repairCost) {
    player.playerStore.coins -= repairCost;
    rod.hp = rod.maxHp;
    sound.playSuccessBuySound();
    repairModal.value = false;
  } else {
    sound.playFailBuySound();
  }
};

const closeModal = () => {
  escapedFish.value = false;
  gottenFish.value = false;
};

const emit = defineEmits(['togglePage']);

const changePage = (value) => {
  emit('togglePage', value);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${playBackgroundImg})`,
    }"
  >
    <HookButton :hookAniClass="hookAnimationClass" :hooking="hooking" />
    <OutComesModal
      :gottenFish="gottenFish"
      :fishName="fishName"
      :fishSrc="fishId"
      :escapedFish="escapedFish"
      @closeModal="closeModal"
    />
    <RepairModal
      :repair="repairModal"
      @repairRod="repairRod"
      @repairToggle="toggleRepairModal"
    />
    <TopNavbar
      @repairToggle="toggleRepairModal"
    ></TopNavbar>
    <BottomNavBar
      @togglePage="changePage"
      @hook="hook"
    >
    </BottomNavBar>
  </div>
</template>

<style scoped>

</style>
