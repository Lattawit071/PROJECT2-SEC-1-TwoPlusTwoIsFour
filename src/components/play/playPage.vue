<script setup>
import { ref } from "vue";
import TopNavbar from "./TopNavbar.vue";
import HookButton from "./HookButton.vue";
import OutComesModal from "./OutComesModal.vue";
import RepairModal from "./RepairModal.vue";
import BottomNavBar from "./BottomNavBar.vue";
import MapSelection from "./MapSelection.vue";
import mapData from "../../../data/map.json";
import potion from "../../../data/potion.json";
import fish from "../../../data/fish.json";
import { usePlayerStore } from "@/stores/player";
import { useSoundStore } from "@/stores/sounds";
import { useMapStore } from '@/stores/mapStore';
import level from "../../../data/level.json";
import LevelUp from "./LevelUp.vue";
const player = usePlayerStore();
const sound = useSoundStore();
const mapStore = useMapStore();
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

const isMapModalOpen = ref(false);
const currentMap = ref(mapData.find((map) => map.name === "world 1") || mapData[0]);

const hookAnimationClass = ref("hook-animation-down");

const toggleMapModal = () => {
  isMapModalOpen.value = !isMapModalOpen.value;
};

const handleSelectMap = (selectedMap) => {
  mapStore.setCurrentMap(selectedMap);
};

const LvlModal = ref(false);

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
      const isExist = player.playerStore.Bookmarks.filter(
        (bookmark) => bookmark === fish.name
      );

      if (isExist.length === 0) {
        player.playerStore.Bookmarks.push(fish.name);
      }
    }

    player.playerStore.exp = player.playerStore.exp + fish.exp;
    let stop = false;
    const requireNextCheck = getNextLevel(player.playerStore.level);
    if (player.playerStore.exp >= requireNextCheck.exp_required) {
      for (let index = 0; index < 100; index++) {
        if (!stop) {
          const requireNext = getNextLevel(player.playerStore.level + index);

          if (player.playerStore.exp >= requireNext.exp_required) {
            player.playerStore.level = player.playerStore.level + 1;
            player.playerStore.exp = player.playerStore.exp - requireNext.exp_required;
          }
          const requireNext2 = getNextLevel(
            player.playerStore.level + 1 + index
          );

          if (player.playerStore.exp <= requireNext2.exp_required) {
            stop = true;
            LvlModal.value = true;
          }
        }
      }
    }
    player.updatePlayerState(`${import.meta.env.VITE_APP_URL}`);
  }
}

function getNextLevel(num) {
  const nextLevel = num + 1;
  return level.find((level) => level.level === nextLevel);
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

const closeLvlModal = () => {
  LvlModal.value = false;
};

const emit = defineEmits(["togglePage"]);

const changePage = (value) => {
  emit("togglePage", value);
};
</script>

<template>
  <div
    class="play-container flex flex-col items-center justify-center min-h-screen relative"
    :style="{
      backgroundImage: `url(${mapStore.currentMap.icon})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <img
      src="/button/Map.png"
      alt="Change Map"
      class="w-16 h-16 fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer"
      @click="toggleMapModal"
    />

    <p class="text-black text-xl font-bold mt-32">
      Map: {{ mapStore.currentMap.name }}
    </p>

    <MapSelection
      v-if="isMapModalOpen"
      @close="toggleMapModal"
      @selectMap="handleSelectMap"
    />

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

    <LevelUp v-if="LvlModal" @closeLvlModal="closeLvlModal" />
    <TopNavbar @repairToggle="toggleRepairModal"></TopNavbar>
    <BottomNavBar @togglePage="changePage" @hook="hook"></BottomNavBar>
  </div>
</template>

<style scoped>
.play-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

