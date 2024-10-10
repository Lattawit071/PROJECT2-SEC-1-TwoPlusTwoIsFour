<script setup>
import { ref, computed } from "vue";
import playerImg from "/images/image/Player.png";
import playBackgroundImg from "/images/image/PLAY.png";
import getFishSound from "/sound/cute-level-up-2-189851.mp3";
import hookFishSound from "/sound/Fishing Rod Cast (Fortnite Sound) - Sound Effect for editing.mp3";
import TopNavbar from "./TopNavbar.vue";
import HookButton from "./HookButton.vue";
import OutComesModal from "./OutComesModal.vue";
import RepairModal from "./RepairModal.vue";
import failGetFishSound from "/sound/fail-234710.mp3";
import failBuySound from "/sound/error-126627.mp3";
import BottomNavBar from "./BottomNavBar.vue";
import Basic_RodImg from "/images/rod/Basic_Rod.png";
import bubbleSound from "/sound/EffectsBubble.mp3";
import successBuySound from "/sound/cash-register-purchase-87313.mp3";
//data
import potion from "../../../data/potion.json";
import fish from "../../../data/fish.json";

const props = defineProps({
  isSoundOn: {
    type: Boolean,
  },
  isSfxOn: {
    type: Boolean,
  },
});
const sounds = {
  hover: new Audio(bubbleSound),
  successBuy: new Audio(successBuySound),
  failGetFish: new Audio(failGetFishSound),
  hookFish: new Audio(hookFishSound),
  getFish: new Audio(getFishSound),
  failBuy: new Audio(failBuySound),
};
sounds.hover.volume = 0.09;
sounds.successBuy.volume = 0.4;
sounds.getFish.volume = 0.4;
sounds.failGetFish.volume = 0.4;
sounds.hookFish.volume = 0.5;

const playerName = ref("int203");
const playerStore = ref({
  id: 1,
  name: playerName.value,
  coins: 100000,
  avatar: playerImg,
  ownedRods: [
    {
      id: 1,
      name: "Basic Rod",
      quantity: 1,
      price: 0,
      icon: Basic_RodImg,
      hp: 50,
      maxHp: 50,
      type: "rod",
    },
  ],
  caughtFish: [],
  potions: [],
  usingRods: {
    id: 1,
    name: "Basic Rod",
    quantity: 1,
    price: 0,
    icon: Basic_RodImg,
    hp: 50,
    maxHp: 50,
    type: "rod",
  },
  usingPotion: [],
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
const rodHpPercentage = computed(() => {
  const maxHp = playerStore.value.usingRods.maxHp;
  return (playerStore.value.usingRods.hp / maxHp) * 100;
});

function getPotionPlayerById(id) {
  return playerStore.value.usingPotion.find((potion) => potion.id === id);
}

function getPotionById(id) {
  return potion.find((potion) => potion.id === id);
}

function addCaughtFish(fishId) {
  const fish = getFishById(fishId);
  fish.quantity = 1;
  if (fish) {
    const existingFish = playerStore.value.caughtFish.find(
      (f) => f.id === fishId
    );

    if (existingFish) {
      existingFish.quantity += 1;
    } else {
      playerStore.value.caughtFish.push(fish);
    }
  }
}

function getFishById(id) {
  return fish.find((fish) => fish.id === id);
}

function playFailBuySound() {
  if (props.isSfxOn) {
    sounds.failBuy.playbackRate = 1.5;
    sounds.failBuy.play();
  }
}

function playHookFishSound() {
  if (props.isSoundOn) {
    sounds.hookFish.play();
  }
}

function playSuccessGetFishSound() {
  if (props.isSfxOn) {
    sounds.getFish.play();
  }
}

function playSuccessBuySound() {
  if (props.isSfxOn) {
    sounds.successBuy.currentTime = 0;
    sounds.successBuy.play();
  }
}

function playFailGetFishSound() {
  if (props.isSfxOn) {
    sounds.failGetFish.playbackRate = 1.5;
    sounds.failGetFish.play();
  }
}

const hook = () => {
  if (hooking.value || waiting.value) {
    playFailBuySound();
    return;
  }

  if (playerStore.value.usingRods.hp > 0) {
    reduceHpRods();

    if (playerStore.value.usingRods.hp < reducesHp.value) {
      playFailBuySound();
    } else {
      playerStore.value.usingRods.hp -= reducesHp.value;
      rodId.value = playerStore.value.usingRods.id;
      playHookFishSound();
      hookAnimationClass.value = "hook-animation-down";
      hooking.value = true;
      waitingForFunction();
    }
  } else {
    playFailBuySound();
  }
};

function waitingForFunction(id) {
  if (waiting.value) {
    playFailBuySound();
  } else {
    hookFish(id);
  }
}

function hookFish() {
  const chanceToGet = Math.random() * 100;
  doAfterTimeOut(() => {
    if (chanceToGet > 20) {
      checkRod();
      gottenFish.value = true;
      const lastCaughtFish = playerStore.value.caughtFish
        .slice()
        .reverse()
        .find((f) => f.id === caughtFish.value.id);
      if (lastCaughtFish) {
        fishName.value = lastCaughtFish.name;
      }
    } else {
      playFailGetFishSound();
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
  const checkRod = playerStore.value.usingRods.id;
  luck.value = luck.value + checkRod * 10;
  ranFish();
}

function ranFish() {
  const rate = Math.random() * 100;
  if (rate >= 55 + (5 * (100 + luck.value)) / 100) {
    random("common");
    playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (
    rate >= 25 + (5 * (100 + luck.value)) / 100 &&
    rate < 55 + (5 * (100 + luck.value)) / 100
  ) {
    random("rare");
    playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (
    rate >= (1 * (100 + luck.value)) / 100 &&
    rate < 25 + (5 * (100 + luck.value)) / 100
  ) {
    random("legendary");
    playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else {
    random("secret");
    playSuccessGetFishSound();
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
  if (playerStore.value.usingRods.id === 1) {
    reducesHp.value = 3;
  } else if (playerStore.value.usingRods.id === 2) {
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
  const rod = playerStore.value.usingRods;
  const hpToRepair = rod.maxHp - rod.hp;
  const repairCost = hpToRepair * coinsPerHp;

  if (playerStore.value.coins >= repairCost) {
    playerStore.value.coins -= repairCost;
    rod.hp = rod.maxHp;
    playSuccessBuySound();
    repairModal.value = false;
  } else {
    playFailBuySound();
  }
};

const closeModal = () => {
  escapedFish.value = false;
  gottenFish.value = false;
};

function playHoverSound() {
  if (props.isSfxOn) {
    sounds.hover.currentTime = 0;
    sounds.hover.play();
  }
}

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
      @playHoverSound="playHoverSound"
      @closeModal="closeModal"
    />
    <RepairModal
      :repair="repairModal"
      :maxRodHp="playerStore.usingRods.maxHp"
      :rodHp="playerStore.usingRods.hp"
      @playHoverSound="playHoverSound"
      @repairRod="repairRod"
      @repairToggle="toggleRepairModal"
    />
    <TopNavbar
      :playerAvatar="playerStore.avatar"
      :playerName="playerStore.name"
      :playerCoins="playerStore.coins"
      :playerPotion="playerStore.usingPotion"
      :playerRodIcon="playerStore.usingRods.icon"
      :rodHpPercentage="rodHpPercentage"
      :maxRodHp="playerStore.usingRods.maxHp"
      :rodHp="playerStore.usingRods.hp"
      @playHoverSound="playHoverSound"
      @repairToggle="toggleRepairModal"
    ></TopNavbar>
    <BottomNavBar
      @playHoverSound="playHoverSound"
      @togglePage="changePage"
      @hook="hook"
    >
    </BottomNavBar>
  </div>
</template>

<style scoped>

</style>
