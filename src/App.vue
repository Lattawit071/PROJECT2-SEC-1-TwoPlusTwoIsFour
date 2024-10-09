<script setup>
import { ref, computed, onMounted } from "vue";
import Menu from "./components/Home.vue"
import Shop from "./components/Shop.vue";
import Inventory from "./components/Inventory.vue";

import SardineImg from "/images/fish/Sardine.png";
import ClownfishImg from "/images/fish/Clownfish.png";
import CatfishImg from "/images/fish/Catfish.png";
import SalmonImg from "/images/fish/Salmon.png";
import TunaImg from "/images/fish/Tuna.png";
import MarlinImg from "/images/fish/Marlin.png";
import StingrayImg from "/images/fish/Stingray.png";
import EelImg from "/images/fish/Eel.png";
import White_KoiImg from "/images/fish/White_Koi.png";
import SquidImg from "/images/fish/Squid.png";
import SharkImg from "/images/fish/Shark.png";
import OrcaImg from "/images/fish/Orca.png";
import Blue_WhaleImg from "/images/fish/Blue_Whale.png";
import Giant_Pacific_OctopusImg from "/images/fish/Giant_Pacific_Octopus.png";
import Golden_FishImg from "/images/fish/Golden_Fish.png";
import Rainbow_FishImg from "/images/fish/Rainbow_Fish.png";
import PearlImg from "/images/fish/Pearl.png";
import DiamondImg from "/images/fish/Diamond.png";
import ChestImg from "/images/fish/Chest.png";
import DragonImg from "/images/fish/Dragon.png";

import Basic_RodImg from "/images/rod/Basic_Rod.png";
import Star_RodImg from "/images/rod/Star_Rod.png";
import Galaxy_RodImg from "/images/rod/Galaxy_Rod.png";
import Lover_RodImg from "/images/rod/Lover_Rod.png";
import Thunder_RodImg from "/images/rod/Thunder_Rod.png";

import Luck_PotionImg from "/images/potion/Luck_5m.png";
import Speed_PotionImg from "/images/potion/Speed_5m.png";
import Full_Luck_PotionImg from "/images/potion/Luck_1h.png";
import Full_Speed_PotionImg from "/images/potion/Speed_1h.png";
import Super_Full_PotionImg from "/images/potion/Full_Potion.png";

import pagetwo from "/images/howtoplay/pagetwo.png";
import pagethree from "/images/howtoplay/pagethree.png";
import pagefour from "/images/howtoplay/pagefour.png";
import pagefive from "/images/howtoplay/pagefive.png";
import pagesix from "/images/howtoplay/pagesix.png";

import backgroundImg from "/images/image/Background.png";
import playBackgroundImg from "/images/image/PLAY.png";
import seaImg from "/images/image/sea.png";
import hookImg from "/images/image/Hook.png";



import playerImg from "/images/image/Player.png";
import Inventory from "./components/Inventory.vue";
const playerName = ref("Int203");

const fishStore = [
  {
    id: 1,
    name: "Sardine",
    quantity: 1,
    price: 50,
    icon: SardineImg,
    type: "fish",
  },
  {
    id: 2,
    name: "Clownfish",
    quantity: 1,
    price: 150,
    icon: ClownfishImg,
    type: "fish",
  },
  {
    id: 3,
    name: "Catfish",
    quantity: 1,
    price: 200,
    icon: CatfishImg,
    type: "fish",
  },
  {
    id: 4,
    name: "Salmon",
    quantity: 1,
    price: 250,
    icon: SalmonImg,
    type: "fish",
  },
  {
    id: 5,
    name: "Tuna",
    quantity: 1,
    price: 250,
    icon: TunaImg,
    type: "fish",
  },
  {
    id: 6,
    name: "Marlin",
    quantity: 1,
    price: 700,
    icon: MarlinImg,
    type: "fish",
  },
  {
    id: 7,
    name: "Stingray",
    quantity: 1,
    price: 500,
    icon: StingrayImg,
    type: "fish",
  },
  {
    id: 8,
    name: "Eel",
    quantity: 1,
    price: 300,
    icon: EelImg,
    type: "fish",
  },
  {
    id: 9,
    name: "White Koi",
    quantity: 1,
    price: 800,
    icon: White_KoiImg,
    type: "fish",
  },
  {
    id: 10,
    name: "Squid",
    quantity: 1,
    price: 850,
    icon: SquidImg,
    type: "fish",
  },
  {
    id: 11,
    name: "Shark",
    quantity: 1,
    price: 1500,
    icon: SharkImg,
    type: "fish",
  },
  {
    id: 12,
    name: "Orca",
    quantity: 1,
    price: 2000,
    icon: OrcaImg,
    type: "fish",
  },
  {
    id: 13,
    name: "Blue Whale",
    quantity: 1,
    price: 2500,
    icon: Blue_WhaleImg,
    type: "fish",
  },
  {
    id: 14,
    name: "Giant Pacific Octopus",
    quantity: 1,
    price: 2500,
    icon: Giant_Pacific_OctopusImg,
    type: "fish",
  },
  {
    id: 15,
    name: "Golden Fish",
    quantity: 1,
    price: 3000,
    icon: Golden_FishImg,
    type: "fish",
  },
  {
    id: 16,
    name: "Rainbow Fish",
    quantity: 1,
    price: 3500,
    icon: Rainbow_FishImg,
    type: "fish",
  },
  {
    id: 17,
    name: "Pearl",
    quantity: 1,
    price: 4500,
    icon: PearlImg,
    type: "fish",
  },
  {
    id: 18,
    name: "Diamond",
    quantity: 1,
    price: 5000,
    icon: DiamondImg,
    type: "fish",
  },
  {
    id: 19,
    name: "Chest",
    quantity: 1,
    price: 8000,
    icon: ChestImg,
    type: "fish",
  },
  {
    id: 20,
    name: "Dragon",
    quantity: 1,
    price: 100000,
    icon: DragonImg,
    type: "fish",
  },
];

const fishingRods = [
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
  {
    id: 2,
    name: "Star Rod",
    quantity: 1,
    price: 50000,
    icon: Star_RodImg,
    hp: 75,
    maxHp: 75,
    type: "rod",
  },
  {
    id: 3,
    name: "Galaxy Rod",
    quantity: 1,
    price: 50000,
    icon: Galaxy_RodImg,
    hp: 100,
    maxHp: 100,
    type: "rod",
  },
  {
    id: 4,
    name: "Lover Rod",
    quantity: 1,
    price: 50000,
    icon: Lover_RodImg,
    hp: 200,
    maxHp: 200,
    type: "rod",
  },
  {
    id: 5,
    name: "Thunder Rod",
    quantity: 1,
    price: 100000,
    icon: Thunder_RodImg,
    hp: 1000,
    maxHp: 1000,
    type: "rod",
  },
];

const potion = [
  {
    id: 1,
    name: "Luck Potion",
    quantity: 1,
    price: 2500,
    effect: "Luck +10% 5 minute",
    icon: Luck_PotionImg,
    type: "potion",
    duration: 300,
  },
  {
    id: 2,
    name: "Speed Potion",
    quantity: 1,
    price: 2500,
    effect: "Speed +15% 5 minute",
    icon: Speed_PotionImg,
    type: "potion",
    duration: 300,
  },
  {
    id: 3,
    name: "Full Luck Potion",
    quantity: 1,
    price: 10000,
    effect: "Luck +10% 1 hours",
    icon: Full_Luck_PotionImg,
    type: "potion",
    duration: 3600,
  },
  {
    id: 4,
    name: "Full Speed Potion",
    quantity: 1,
    price: 10000,
    effect: "Speed +15% 1 hours",
    icon: Full_Speed_PotionImg,
    type: "potion",
    duration: 3600,
  },
  {
    id: 5,
    name: "Super Full Potion",
    quantity: 1,
    price: 100000,
    effect: "Luck+Speed 20% 1 hours",
    icon: Super_Full_PotionImg,
    type: "potion",
    duration: 3600,
  },
];

const playerStore = ref({
  id: 1,
  name: playerName.value,
  coins: 1000,
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
function getFishById(id) {
  return fishStore.find((fish) => fish.id === id);
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






const page = ref(1);

function togglePage(value) {
  page.value = value;
}

const isSettingsOpen = ref(false);

const openSettings = () => {
  isSettingsOpen.value = true;
};

const saveSettings = () => {
  isSettingsOpen.value = false;
};

const imagesHowToPlay = [pagetwo, pagethree, pagefour, pagefive, pagesix];

const currentImageIndex = ref(0);
const isHowToPlayOpen = ref(false);

const openHowToPlay = () => {
  isHowToPlayOpen.value = !isHowToPlayOpen.value;
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = imagesHowToPlay.length - 1;
  }
};

const nextImage = () => {
  if (currentImageIndex.value < imagesHowToPlay.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const goToImage = (index) => {
  currentImageIndex.value = index;
};

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
      console.log(fishName.value);
      console.log(playerStore.value.caughtFish);
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

const closeModal = () => {
  gottenFish.value = false;
  escapedFish.value = false;
};

const isRepairModalOpen = ref(false);

const openRepairModal = () => {
  isRepairModalOpen.value = true;
};

const closeRepairModal = () => {
  isRepairModalOpen.value = false;
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
    closeRepairModal();
  } else {
    playFailBuySound();
  }
};




const playerCoins = computed(() => playerStore.value.coins);

const selectFish = ref("common");
const highlightedFish = ref(new Set());

function filterFish(a, b) {
  return fishStore.filter((fish) => fish.id >= a && fish.id <= b);
}

function isFishInPlayerStore(fishId) {
  if (playerStore.value.caughtFish.some((fish) => fish.id === fishId)) {
    highlightedFish.value.add(fishId);
    return true;
  }
  return highlightedFish.value.has(fishId);
}
</script>

<template>
  <Loading />
  <Menu />
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${backgroundImg})`,
    }"
    v-if="page === 1"
  >
    <div class="absolute top-4 left-4" style="user-select: none">
      <img
        @click="openSettings"
        src="/images/button/Setting.png"
        alt="Settings"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="playHoverSound"
      />
    </div>

    <div class="absolute top-4 right-4" style="user-select: none">
      <img
        @click="openHowToPlay"
        src="/images/button/Question.png"
        alt="Help"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="playHoverSound"
      />
    </div>

    <div class="text-center" style="user-select: none">
      <div
        class="text-5xl md:text-8xl font-handwritten mb-16 wave-animation text-amber-950"
        style="font-family: 'Pacifico', cursive"
      >
        <span>F</span><span>i</span><span>s</span><span>h</span> <span>F</span
        ><span>o</span><span>r</span> <span>L</span><span>i</span><span>f</span
        ><span>e</span>
      </div>
      <div class="relative inline-block template" style="user-select: none">
        <div
          class="relative w-64 h-24 md:w-96 md:h-40 cursor-pointer transition-transform duration-300 hover:scale-110"
          @click="togglePage(5)"
          @mouseenter="playHoverSound"
        >
          <img
            src="/images/button/Button.png"
            alt="Play"
            class="w-full h-full object-contain"
          />
          <span
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl text-white font-handwritten transition-colors duration-300 hover:text-black"
          >
            PLAY
          </span>
        </div>
      </div>
    </div>
  </div>

  <transition name="fade">
    
  </transition>

  <transition name="fade">
    <div
      v-if="isHowToPlayOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col items-center"
      >
        <img
          src="/images/howtoplay/pageone.png"
          alt="How to Play Title"
          class="w-full max-w-xs md:max-w-sm h-auto mb-4"
        />

        <div class="relative w-full flex justify-center items-center">
          <img
            :src="imagesHowToPlay[currentImageIndex]"
            alt="How to Play Image"
            class="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
          />

          <button
            @click="prevImage"
            @mouseenter="playHoverSound"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition-all duration-300"
          >
            &#8249;
          </button>
          <button
            @click="nextImage"
            @mouseenter="playHoverSound"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition-all duration-300"
          >
            &#8250;
          </button>
        </div>

        <div class="flex space-x-2 mt-4">
          <span
            v-for="(image, index) in imagesHowToPlay"
            :key="index"
            @mouseenter="playHoverSound"
            @click="goToImage(index)"
            class="w-4 h-4 rounded-full cursor-pointer"
            :class="{
              'bg-white': currentImageIndex === index,
              'bg-gray-500': currentImageIndex !== index,
            }"
          ></span>
        </div>

        <div class="flex justify-end mt-4 w-full">
          <button
            @mouseenter="playHoverSound"
            @click="openHowToPlay"
            class="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>

  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${playBackgroundImg})`,
    }"
    v-if="page === 5"
  >
    <div class="relative flex justify-center items-center h-screen w-full">
      <img
        :src="seaImg"
        alt="Animated SVG"
        class="animated-svg relative z-10"
      />
      <div
        :class="hookAnimationClass"
        class="hook-container"
        v-show="hooking"
        :style="{ backgroundImage: `url(${hookImg})` }"
      ></div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      v-show="gottenFish"
    >
      <div
        class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center bg-gray-1000"
        style="
          background-image: url('/images/SeaBackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div
          class="text-xl md:text-2xl bg-gradient-to-b from-gray-900 to-yellow-900 text-yellow-100 font-sans font-bold rounded-lg mx-2 md:mx-4 lg:mx-8 p-3 md:p-4 flex items-center justify-center"
        >
          <span>You got a</span>
          <div
            class="text-xl md:text-2xl text-yellow-100 font-sans font-bold flex items-center"
          >
            &nbsp; "
            <span class="text-xl md:text-2xl text-green-600 font-extrabold">
              {{ fishName }}
            </span>
            "
          </div>
        </div>

        <div
          class="w-full h-auto md:h-1/2 flex items-center justify-center mt-8"
        >
          <div
            class="bg-gray-900 border border-yellow-400 rounded-lg shadow-lg p-4 max-w-xs md:max-w-md w-full h-full flex justify-center items-center"
          >
            <img
              :src="fishId"
              alt="Fish Image"
              class="w-full h-full object-cover rounded-lg"
              style="max-width: 200px; max-height: 200px"
            />
          </div>
        </div>
        <button
          @mouseenter="playHoverSound"
          @click="closeModal"
          class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
        >
          Close
        </button>
      </div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      v-show="escapedFish"
    >
      <div
        class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center bg-gray-1000"
        style="
          background-image: url('/images/SeaBackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div
          class="text-xl md:text-2xl bg-gradient-to-b bg-gray-900 text-yellow-100 text-yellow-100 font-sans font-bold rounded-lg mx-2 md:mx-4 lg:mx-8 p-3 md:p-4 flex items-center justify-center"
        >
          <span>Unfortunately, your fish &nbsp; Escaped!</span>
        </div>

        <button
          @click="closeModal"
          class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
        >
          Close
        </button>
      </div>
    </div>

    <div class="relative w-full mt-auto">
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E]">
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Back.png"
          alt="Bottom Image"
          class="w-full object-contain"
        />
      </div>

      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
        <img
          @mouseenter="playHoverSound"
          src="/images/button/front.png"
          alt="Top Image"
          class="w-full object-contain"
        />
      </div>

      <div
        class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent"
      >
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Home.png"
          alt="Home"
          @click="togglePage(1)"
          class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/BackPack.png"
          alt="Inventory"
          @click="togglePage(2)"
          class="w-20 md:w-24 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Play.png"
          alt="Hook"
          @click="hook"
          class="w-24 md:w-32 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Shop.png"
          alt="Shop"
          @click="togglePage(3)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/BookMark.png"
          alt="Bookmark"
          @click="togglePage(4)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36 cursor-pointer"
        />
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isRepairModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
        >
          <h2 class="text-2xl font-bold mb-4">Repair Rod</h2>
          <p class="mb-6">Would you like to repair your rod?</p>

          <div class="flex justify-center items-center mb-4">
            <span class="text-lg font-bold">
              Repair
              {{ playerStore.usingRods.maxHp - playerStore.usingRods.hp }} HP
              for
              {{
                (playerStore.usingRods.maxHp - playerStore.usingRods.hp) * 25
              }}
              Coins
            </span>
          </div>

          <div class="flex justify-center items-center space-x-4">
            <button
              @mouseenter="playHoverSound"
              @click="repairRod"
              class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            >
              Repair
            </button>
            <button
              @mouseenter="playHoverSound"
              @click="closeRepairModal"
              class="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>

    <div
      class="absolute top-0 left-0 p-4 z-20 w-full bg-gray-900 bg-opacity-80 shadow-lg text-white flex items-center justify-between space-x-8"
    >
      <div class="flex items-center space-x-4">
        <img
          :src="playerStore.avatar"
          alt="Player Avatar"
          class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-500"
        />
        <div>
          <p class="text-lg font-semibold md:text-xl">{{ playerStore.name }}</p>
          <p class="text-sm md:text-base">Coins: {{ playerStore.coins }}</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-sm md:text-base font-semibold">Active Potions</p>
        <div class="flex space-x-2">
          <img
            v-for="potion in playerStore.usingPotion"
            :src="potion.icon"
            alt="Potion"
            class="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-sm md:text-base font-semibold">Using Rod</p>
        <div class="flex items-center space-x-2">
          <img
            :src="playerStore.usingRods.icon"
            alt="Rod"
            class="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
      </div>

      <div class="flex flex-col items-center w-1/3">
        <p class="text-sm md:text-base font-semibold">Rod HP</p>
        <div class="w-full bg-gray-800 rounded-full h-4">
          <div
            class="bg-green-500 h-4 rounded-full"
            :style="{ width: rodHpPercentage + '%' }"
          ></div>
        </div>
        <p class="text-xs text-right mt-1">
          HP: {{ playerStore.usingRods.hp }}
        </p>
      </div>
      <button
        v-if="playerStore.usingRods.hp < playerStore.usingRods.maxHp"
        @mouseenter="playHoverSound"
        @click="openRepairModal"
        class="fixed right-3 top-32 bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-500 transition-transform transform hover:scale-110"
      >
        Repair Rod
      </button>
    </div>
  </div>


  <Inventory v-if="page === 2"/>
  <Shop v-if="page === 3" />
  <div v-if="page === 4">
    <div
      class="bg-gray-1000 w-screen h-screen fixed top-0 left-0 font-nonto overflow-scroll"
    >
      <div class="flex justify-center w-screen mt-8">
        <div
          class="header fade-up bg-gradient-to-b bg-gray-900 to-yellow-900 border-black w-[90%] md:w-[60%] min-w-[300px] rounded-lg shadow-lg p-6"
        >
          <button
            @mouseenter="playHoverSound"
            @click="togglePage(5)"
            class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
          >
            Back
          </button>

          <div class="mb-6">
            <p
              class="text-3xl font-bold text-center text-yellow-100 bg-gray-900 py-4 rounded-t-lg"
            >
              Achievement
            </p>
          </div>

          <div
            class="bg-gray-900 flex gap-5 justify-evenly p-4 rounded-lg mb-6"
          >
            <div class="relative inline-block w-full md:w-1/3">
              <p class="text-center text-lg text-yellow-100 mb-2">
                Fish Category
              </p>
              <select
                v-model="selectFish"
                class="block appearance-none w-full bg-yellow-100 border border-yellow-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-md hover:bg-yellow-100 focus:outline-none transition duration-300 cursor-pointer"
              >
                <option value="common">Common</option>
                <option value="rare">Rare</option>
                <option value="Legendary">Legendary</option>
                <option value="Secret">Secret</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8l-4 4z" />
                </svg>
              </div>
            </div>
          </div>

          <div
            v-show="selectFish === 'common'"
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div
              v-for="fish in filterFish(1, 10)"
              :key="fish.id"
              class="green-gradient-bg border border-green-400 rounded-lg p-4 hover:border-green-300"
            >
              <img
                :class="{ 'brightness-100': isFishInPlayerStore(fish.id) }"
                class="brightness-0 rounded-lg mb-2"
                :src="fish.icon"
                :alt="fish.name"
              />
              <h3 class="text-green-900 text-lg font-semibold">
                {{ fish.name }}
              </h3>
              <p class="text-green-900">${{ fish.price }}</p>
            </div>
          </div>

          <div
            v-show="selectFish === 'rare'"
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div
              v-for="fish in filterFish(11, 14)"
              :key="fish.id"
              class="blue-gradient-bg border border-blue-400 rounded-lg p-4 hover:border-blue-300"
            >
              <img
                :class="{ 'brightness-100': isFishInPlayerStore(fish.id) }"
                class="brightness-0 rounded-lg mb-2"
                :src="fish.icon"
                :alt="fish.name"
              />
              <h3 class="text-blue-100 text-lg font-semibold">
                {{ fish.name }}
              </h3>
              <p class="text-blue-200">${{ fish.price }}</p>
            </div>
          </div>

          <div
            v-show="selectFish === 'Legendary'"
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div
              v-for="fish in filterFish(15, 19)"
              :key="fish.id"
              class="pastel-red-gradient-bg border border-yellow-400 rounded-lg p-4 hover:border-yellow-300"
            >
              <img
                :class="{ 'brightness-100': isFishInPlayerStore(fish.id) }"
                class="brightness-0 rounded-lg mb-2"
                :src="fish.icon"
                :alt="fish.name"
              />
              <h3 class="text-yellow-900 text-lg font-semibold">
                {{ fish.name }}
              </h3>
              <p class="text-yellow-800">${{ fish.price }}</p>
            </div>
          </div>

          <div
            v-show="selectFish === 'Secret'"
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div
              v-for="fish in filterFish(20, 20)"
              :key="fish.id"
              class="hologram-bg border border-yellow-400 rounded-lg p-4 hover:border-yellow-300"
            >
              <img
                :class="{ 'brightness-100': isFishInPlayerStore(fish.id) }"
                class="brightness-0 rounded-lg mb-2 noselect"
                :src="fish.icon"
                :alt="fish.name"
              />
              <h3 class="text-yellow-100 text-lg font-semibold">
                {{ fish.name }}
              </h3>
              <p class="text-yellow-200">${{ fish.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-yellow-800 {
  background-color: #7b5e57;
}
.bg-gray-900 {
  background-color: #2b1b17;
}

.bg-gray-1000 {
  background-color: #160a06;
}
.text-yellow-100 {
  color: #fff9c4;
}
.text-yellow-200 {
  color: #ffecb3;
}
.text-yellow-300 {
  color: #ffe082;
}
.bg-yellow-600 {
  background-color: #ffb74d;
}
.hover:bg-yellow-500:hover {
  background-color: #ffa726;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hook-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 900px;
  background-image: url("/images/image/Hook.png");

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 5;
}

.hook-animation-down {
  animation: hookMoveDown 2s ease forwards;
}

.hook-animation-up {
  animation: hookMoveUp 2s ease forwards;
}

@keyframes hookMoveDown {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 5%);
  }
}

@keyframes hookMoveUp {
  0% {
    transform: translate(-50%, 5%);
  }
  100% {
    transform: translate(-50%, -100%);
  }
}

@keyframes blueGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.blue-gradient-bg {
  background: linear-gradient(
    270deg,
    #89cff0,
    #a0d8f1,
    #c9ebf6,
    #a0d8f1,
    #89cff0
  );
  background-size: 600% 600%;
  animation: blueGradient 10s ease infinite;
}

@keyframes greenGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.green-gradient-bg {
  background: linear-gradient(
    270deg,
    #a8e6cf,
    #dcedc1,
    #f6ffed,
    #dcedc1,
    #a8e6cf
  );
  background-size: 600% 600%;
  animation: greenGradient 10s ease infinite;
}

@keyframes pastelRedGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pastel-red-gradient-bg {
  background: linear-gradient(
    270deg,
    #ffc1c1,
    #ffb6c1,
    #ffd1dc,
    #ffaaaa,
    #ffc1c1
  );
  background-size: 400% 400%;
  animation: pastelRedGradient 10s ease infinite;
  border-radius: 15px;
  border: 4px solid transparent;

  padding: 10px;
  transition: transform 0.3s ease;
}

@keyframes hologramBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hologram-bg {
  background: linear-gradient(
    270deg,
    #ffb3ff,
    #b3ffff,
    #b3ffb3,
    #ffb3b3,
    #b3b3ff
  );
  background-size: 400% 400%;
  animation: hologramBackground 15s ease infinite;
  border-radius: 15px;
  padding: 10px;
  border: 4px solid transparent;
  border-image: linear-gradient(
      45deg,
      #ffb3ff,
      #b3ffff,
      #b3ffb3,
      #ffb3b3,
      #b3b3ff
    )
    1;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 179, 255, 0.5), 0 0 30px rgba(179, 255, 255, 0.5),
    0 0 40px rgba(179, 255, 179, 0.5), 0 0 50px rgba(255, 179, 179, 0.5),
    0 0 60px rgba(179, 179, 255, 0.5);
}

.wave-animation span {
  display: inline-block;
  animation: wave 1.5s infinite ease-in-out;
}

.wave-animation span:nth-child(1) {
  animation-delay: 0s;
}
.wave-animation span:nth-child(2) {
  animation-delay: 0.1s;
}
.wave-animation span:nth-child(3) {
  animation-delay: 0.2s;
}
.wave-animation span:nth-child(4) {
  animation-delay: 0.3s;
}
.wave-animation span:nth-child(5) {
  animation-delay: 0.4s;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animated-svg {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: moveSideways 2s ease-in-out infinite;
}

@keyframes moveSideways {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 20px);
  }
}

.toast-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(
    45deg,
    #a8e6cf,
    #dcedc1,
    #f6ffed,
    #dcedc1,
    #a8e6cf
  ); /* สีเขียวพาสเทล */
  background-size: 200%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: pastel-border 3s linear infinite, slideUpFadeIn 0.5s ease;
  z-index: 1000;
  max-width: 250px;
  font-size: 14px;
}

.toast-content {
  display: flex;
  align-items: center;
}

.toast-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.toast-message {
  flex-grow: 1;
  color: #2e7d32;
  font-weight: bold;
}

@keyframes pastel-border {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes slideUpFadeIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDownFadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-t {
  opacity: 0;
  transform: translateY(100%);
}

.toast-notification-error {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(
    45deg,
    #ffcccc,
    #ff9999,
    #ffb3b3,
    #ff9999,
    #ffcccc
  );
  background-size: 200%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  max-width: 250px;
  font-size: 14px;
  text-align: center;
}

.toast-message-error {
  color: #c62828;
  font-weight: bold;
}

.loading-screen {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #25120d;
  color: white;
  z-index: 9999;
  padding-bottom: 12%;
}

.loading-screen img {
  width: 25rem;
  height: auto;
}

.loading-bar {
  width: 80%;
  background-color: #ddd;
  height: 25px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
}

.loading-bar-inner {
  height: 100%;
  background-color: #ff9f05;
  width: 0%;
  transition: width 0.5s linear;
}

.start-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff9f05;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.start-btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.toggle-switch {
  width: 50px;
  height: 24px;
  background-color: #6e6e6e;
  border-radius: 9999px;
  padding: 2px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 9999px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  transition: transform 0.3s ease-in-out;
}

.is-on {
  background-color: #ff9f05;
}

.is-on .toggle-circle {
  transform: translate(26px, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.navigation button {
  width: 40px;
  height: 40px;
}

.navigation span {
  width: 12px;
  height: 12px;
  background-color: #555;
}
</style>
