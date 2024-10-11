<script setup>
import { ref, computed, onMounted } from "vue";
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
import BackgroundImg from "/images/image/Background.png";
import pagetwo from "/images/howtoplay/pagetwo.png";
import pagethree from "/images/howtoplay/pagethree.png";
import pagefour from "/images/howtoplay/pagefour.png";
import pagefive from "/images/howtoplay/pagefive.png";
import pagesix from "/images/howtoplay/pagesix.png";
import bubbleSound from "/sound/EffectsBubble.mp3";
import successBuySound from "/sound/cash-register-purchase-87313.mp3";
import failBuySound from "/sound/error-126627.mp3";
import sellFishSound from "/sound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";
import useRodSound from "/sound/Game Menu Select Sound Effect.mp3";
import usePotionSound from "/sound/Mini Shield Use (Fortnite Sound) - Sound Effect for editing.mp3";
import playerImg from "/images/image/Player.png";
//Loading
import LoadingPage from "./components/loading/loadingPage.vue";
//bookmark
import bookmark from "./components/bookmark/bookmark.vue";
import setting from "./components/setting/setting.vue";

//shop
import Shop from "./components/shop/shop.vue";

//play
import PlayPage from "./components/play/playPage.vue";

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

const isSoundOn = ref(true);
const isMusicOn = ref(true);
const isSfxOn = ref(true);

const sounds = {
  hover: new Audio(bubbleSound),
  successBuy: new Audio(successBuySound),
  failBuy: new Audio(failBuySound),
  sellFish: new Audio(sellFishSound),
  useRod: new Audio(useRodSound),
  usePotionSound: new Audio(usePotionSound),
};
sounds.hover.volume = 0.09;
sounds.successBuy.volume = 0.4;
sounds.useRod.volume = 0.4;
sounds.sellFish.volume = 0.4;
sounds.usePotionSound.volume = 0.4;

function toggleSound() {
  isSoundOn.value = !isSoundOn.value;
}

function toggleMusic() {
  isMusicOn.value = !isMusicOn.value;
  if (isMusicOn.value) {
    sounds.backgroundMusic.play();
  } else {
    sounds.backgroundMusic.pause();
  }
}

function addUsingRod(rodId) {
  const rod = getRodById(rodId);
  if (rod) {
    playerStore.usingRods = rod;
  }
}

function toggleSfx() {
  isSfxOn.value = !isSfxOn.value;
}

function playHoverSound() {
  if (isSfxOn.value) {
    sounds.hover.currentTime = 0;
    sounds.hover.play();
  }
}

function playSuccessBuySound() {
  if (isSfxOn.value) {
    sounds.successBuy.currentTime = 0;
    sounds.successBuy.play();
  }
}

function playFailBuySound() {
  if (isSfxOn.value) {
    sounds.failBuy.playbackRate = 1.5;
    sounds.failBuy.play();
  }
}

function playSellSuccessSound() {
  if (isSoundOn.value) {
    sounds.sellFish.currentTime = 0;
    sounds.sellFish.play();
  }
}

function playUseRodSound() {
  if (isSoundOn.value) {
    sounds.useRod.currentTime = 0;
    sounds.useRod.play();
  }
}

function playUsePotionSound() {
  if (isSoundOn.value) {
    sounds.usePotionSound.currentTime = 0;
    sounds.usePotionSound.play();
  }
}

const page = ref(1);

const togglePage = (value) => {
  page.value = value;
};

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


const maxCapacity = 1000;
const selectedCategory = ref("all");
const potionTimers = {};
const showToastInventory = ref(false);
const toastMessage = ref("");
const toastClass = ref("");
const nameInventory = ref("");

function showToastInventoryMessage(message, type) {
  toastMessage.value = message;
  toastClass.value = type === "success" ? "bg-green-500" : "bg-red-500";
  showToastInventory.value = true;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    showToastInventory.value = false;
  }, 4000);
}

const setCategory = (category) => {
  selectedCategory.value = category;
};

function isFish(item) {
  return item.type === "fish";
}

function isRod(item) {
  return item.type === "rod";
}

function isPotion(item) {
  return item.type === "potion";
}

const filteredItems = computed(() => {
  switch (selectedCategory.value) {
    case "fish":
      return (nameInventory.value = "Fish"), playerStore.value.caughtFish;
    case "rods":
      return (nameInventory.value = "Rods"), playerStore.value.ownedRods;
    case "potions":
      return (nameInventory.value = "Potions"), playerStore.value.potions;
    default:
      nameInventory.value = "All";
      return [
        ...playerStore.value.caughtFish,
        ...playerStore.value.ownedRods,
        ...playerStore.value.potions,
      ];
  }
});

const inventoryCapacity = computed(() => {
  return filteredItems.value.reduce((acc, item) => acc + item.quantity, 0);
});

function sellFishAll(fish) {
  playerStore.value.coins += fish.price * fish.quantity;
  playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
    (f) => f.id !== fish.id
  );
  showToastInventoryMessage(`Sold all ${fish.name}`, "success");
  playSellSuccessSound();
}

function sellFish(fish) {
  playerStore.value.coins += fish.price;
  fish.quantity -= 1;

  if (fish.quantity === 0) {
    playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
      (f) => f.id !== fish.id
    );
  }

  showToastInventoryMessage(`Sold 1 ${fish.name}`, "success");
  playSellSuccessSound();
}

function equipRod(rod) {
  playUseRodSound();
  playerStore.value.usingRods = rod;
  showToastInventoryMessage(`Equipped ${rod.name}`, "success");
}

function usePotion(potion) {
  playUsePotionSound();
  let existingPotion = playerStore.value.usingPotion.find(
    (p) => p.id === potion.id
  );

  if (!existingPotion) {
    playerStore.value.usingPotion.push({
      ...potion,
      remainingTime: potion.duration,
      startTime: Date.now(),
    });
    existingPotion = playerStore.value.usingPotion.find(
      (p) => p.id === potion.id
    );
  } else {
    const elapsedTimed = (Date.now() - existingPotion.startTime) / 1000;
    existingPotion.remainingTime = Math.max(
      existingPotion.remainingTime - elapsedTimed + potion.duration,
      0
    );
    existingPotion.setTimeout = Date.now();
  }

  if (potionTimers[potion.id]) {
    clearTimeout(potionTimers[potion.id]);
  }

  potionTimers[potion.id] = setTimeout(() => {
    playerStore.value.usingPotion = playerStore.value.usingPotion.filter(
      (p) => p.id !== potion.id
    );
    delete potionTimers[potion.id];
  }, playerStore.value.usingPotion.find((p) => p.id === potion.id).remainingTime * 1000);

  if (potion.quantity > 1) {
    potion.quantity -= 1;
  } else {
    playerStore.value.potions = playerStore.value.potions.filter(
      (p) => p.id !== potion.id
    );
  }
  showToastInventoryMessage(`Used ${potion.name}`, "success");
}
let timeoutId = null;

</script>

<template>
  <bookmark
    v-if="page === 4"
    :playerName="playerStore.name"
    @togglePage="togglePage"
    @PlayHoverSound="playHoverSound"
  />
  
  <LoadingPage :isMusicOn="isMusicOn"/>

  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${BackgroundImg})`,
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

  <setting v-if="isSettingsOpen" @saveSettings="saveSettings" />

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

  <!--oo-->
  <PlayPage v-if="page === 5" :isSoundOn="isSoundOn" :isSfxOn="isSfxOn" @togglePage="togglePage"/>

  <div class="p-6 bg-gray-1000 min-h-screen flex" v-if="page === 2">
    <div
      class="w-20 bg-gradient-to-b bg-gray-900 to-yellow-900 text-white flex flex-col items-center py-4 space-y-4 rounded-lg shadow-lg mr-3 p-3"
    >
      <button
        @mouseenter="playHoverSound"
        @click="togglePage(5)"
        class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Back
      </button>
      <button
        @mouseenter="playHoverSound"
        @click="setCategory('all')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/images/inventory/All.png" alt="All" />
      </button>
      <button
        @mouseenter="playHoverSound"
        @click="setCategory('fish')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/images/inventory/Fish.png" alt="Fish" />
      </button>
      <button
        @mouseenter="playHoverSound"
        @click="setCategory('rods')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/images/inventory/Rods.png" alt="Rods" />
      </button>
      <button
        @mouseenter="playHoverSound"
        @click="setCategory('potions')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/images/inventory/Potion.png" alt="potions" />
      </button>
    </div>

    <div v-if="showToastInventory" class="toast-notification">
      <div class="toast-content">
        <div class="toast-message">
          <p>{{ toastMessage }}</p>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg text-yellow-100">
      <h1 class="text-3xl font-bold mb-6">Inventory {{ nameInventory }}</h1>
      <p class="mb-4">Capacity {{ inventoryCapacity }}/{{ maxCapacity }}</p>

      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="relative p-4 bg-yellow-800 border border-yellow-400 rounded-lg hover:border-yellow-300"
        >
          <img
            :src="item.icon"
            :alt="item.name"
            class="mb-2 h-20 w-20 mx-auto"
          />
          <p class="text-center font-semibold">{{ item.name }}</p>
          <span
            class="absolute top-0 right-0 bg-red-600 text-white text-sm rounded-full px-2"
          >
            x{{ item.quantity }}
          </span>

          <div v-if="isFish(item)" class="flex flex-col space-y-2">
            <button
              @mouseenter="playHoverSound"
              @click="sellFish(item)"
              class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Sell 1 for {{ item.price }} coins
            </button>

            <button
              @mouseenter="playHoverSound"
              @click="sellFishAll(item)"
              class="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Sell All {{ item.price * item.quantity }} coins
            </button>
          </div>
          <div v-else-if="isRod(item)" class="flex flex-col space-y-2">
            <button
              @mouseenter="playHoverSound"
              :disabled="playerStore.usingRods?.id === item.id"
              @click="equipRod(item)"
              class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
              :class="{ 'bg-green-500': playerStore.usingRods?.id === item.id }"
            >
              Equip Rod
            </button>
          </div>

          <div v-else-if="isPotion(item)" class="flex flex-col space-y-2">
            <button
              @mouseenter="playHoverSound"
              @click="usePotion(item)"
              class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full"
            >
              Use Potion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<Shop v-if="page === 3" :isSfxOn="isSfxOn" @togglePage="togglePage" />

</template>

<style scoped>
.bg-yellow-800 {
  background-color: #7b5e57;
}

.text-yellow-200 {
  color: #ffecb3;
}
.text-yellow-300 {
  color: #ffe082;
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

.bg-gray-1000 {
  background-color: #160a06;
}

.text-yellow-100 {
  color: #fff9c4;
}

.bg-gray-900 {
  background-color: #2b1b17;
}

.bg-yellow-600 {
  background-color: #ffb74d;
}
</style>
