<script setup>
import { ref, computed, onMounted } from "vue";
//images
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
const playerName = ref("Int203");
// All Data (Fish,Rods,Potion,Player)
// Fish Data
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
// Rods Data
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
// Potion Data
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
// Players Data
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
  if (fish) {
    if (playerStore.value.caughtFish.find((fish) => fish.id === fishId)) {
      playerStore.value.caughtFish.find(
        (fish) => fish.id === fishId
      ).quantity += 1;
    } else {
      playerStore.value.caughtFish.push(fish);
    }
  }
}

//======================================== Sound ========================================
import bubbleSound from "/sound/EffectsBubble.mp3";
import successBuySound from "/sound/cash-register-purchase-87313.mp3";
import failBuySound from "/sound/error-126627.mp3";
import backgroundMusic from "/sound/game-music-loop-7-145285.mp3";
import getFishSound from "/sound/cute-level-up-2-189851.mp3";
import failGetFishSound from "/sound/fail-234710.mp3";
import hookFishSound from "/sound/Fishing Rod Cast (Fortnite Sound) - Sound Effect for editing.mp3";
import sellFishSound from "/sound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";
import useRodSound from "/sound/Game Menu Select Sound Effect.mp3";
import usePotionSound from "/sound/Mini Shield Use (Fortnite Sound) - Sound Effect for editing.mp3";

const isSoundOn = ref(true);
const isMusicOn = ref(true);
const isSfxOn = ref(true);

const sounds = {
  hover: new Audio(bubbleSound),
  backgroundMusic: new Audio(backgroundMusic),
  successBuy: new Audio(successBuySound),
  failBuy: new Audio(failBuySound),
  getFish: new Audio(getFishSound),
  failGetFish: new Audio(failGetFishSound),
  hookFish: new Audio(hookFishSound),
  sellFish: new Audio(sellFishSound),
  useRod: new Audio(useRodSound),
  usePotionSound: new Audio(usePotionSound),
};

sounds.backgroundMusic.loop = true;
sounds.backgroundMusic.volume = 0.1
sounds.hover.volume = 0.09;
sounds.successBuy.volume = 0.4
sounds.getFish.volume = 0.4
sounds.failGetFish.volume = 0.4
sounds.hookFish.volume = 0.5
sounds.useRod.volume = 0.4
sounds.sellFish.volume = 0.4
sounds.usePotionSound.volume = 0.1

sounds.failGetFish.gai

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
  if(rod) {
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

function playBackgroundMusic() {
  if (isMusicOn.value) {
    sounds.backgroundMusic.play();
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

function playSuccessGetFishSound() {
  if (isSfxOn.value) {
    sounds.getFish.play();
  }
}

function playFailGetFishSound() {
  if (isSfxOn.value) {
    sounds.failGetFish.playbackRate = 1.5;
    sounds.failGetFish.play();
  }
}

function playHookFishSound() {
  if (isSoundOn.value) {
    sounds.hookFish.play();
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

// ======================================== Loading ========================================
const loading = ref(true);
const loadingProgress = ref(0);
const isLoaded = ref(false);
const loadingMessage = ref("Loading... Please wait");

const startGame = () => {
  playBackgroundMusic();
  loading.value = false;
};

const updateLoadingBar = () => {
  const interval = setInterval(() => {
    if (loadingProgress.value >= 100) {
      loadingMessage.value = "Success";
      clearInterval(interval);
      isLoaded.value = true;
    } else {
      loadingProgress.value += 10;
    }
  }, 500);
};

onMounted(() => {
  updateLoadingBar();
});

//======================================== Toggle Page ========================================
const page = ref(1);

function togglePage(value) {
  page.value = value;
}

//======================================== Home ========================================
//=========== Setting
const isSettingsOpen = ref(false);

const openSettings = () => {
  isSettingsOpen.value = true;
};

const saveSettings = () => {
  isSettingsOpen.value = false;
};

//=========== Navigation
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
//======================================== Play Page ========================================
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

//getpotionplayer
function getPotionPlayerById(id) {
  return playerStore.value.usingPotion.find((potion) => potion.id === id);
}

//first
const hook = () => {
  if (hooking.value || waiting.value) {
    alert("Please wait until the current fishing process is done.");
    return;
  }

  if (playerStore.value.usingRods.hp > 0) {
    reduceHpRods();

    if (playerStore.value.usingRods.hp < reducesHp.value) {
      alert("Caution! Your Rod is broken, please fix it before hooking.");
    } else {
      playerStore.value.usingRods.hp -= reducesHp.value;
      rodId.value = playerStore.value.usingRods.id;
      playHookFishSound();
      hookAnimationClass.value = "hook-animation-down";
      hooking.value = true;
      waitingForFunction();
    }
  } else {
    alert("Caution! Your Rod is broken, please fix it before hooking.");
  }
};

//second
function waitingForFunction(id) {
  if (waiting.value) {
    alert("Caution! Don't be hurry while still catching fish");
  } else {
    hookFish(id);
  }
}

//third
function hookFish() {
  const chanceToGet = Math.random() * 100;
  doAfterTimeOut(() => {
    if (chanceToGet > 20) {
      checkRod();
      gottenFish.value = true;
      fishName.value =
        playerStore.value.caughtFish[
          playerStore.value.caughtFish.length - 1
        ].name;
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

//fourth
function doAfterTimeOut(callback) {
  fishingTime();
  waiting.value = true;
  setTimeout(() => {
    waiting.value = false;
    callback();
  }, ranTime.value);
}

//fifth
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

//sixth
function checkEqualPotion(store, player) {
  if (getPotionById(store)?.id === getPotionPlayerById(player)?.id) {
    return true;
  } else {
    return false;
  }
}

//seventh
function checkRod() {
  const checkRod = playerStore.value.usingRods.id;
  luck.value = luck.value + checkRod * 10;
  ranFish();
}

//eigth
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
    random("epic");
    playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else {
    random("legendary");
    playSuccessGetFishSound();
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  }
}

//nineth
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
    case "epic":
      ranNumber.value = Math.floor(Math.random() * (20 - 15) + 15);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "legendary":
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

//=========== Rod repair
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
    alert("Not enough coins to repair the rod.");
  }
};

//======================================== Inventory Page ========================================
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
    console.log("clear" + potion.name);
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

//======================================== Shop Page ========================================
const showToast = ref(false);
const selectedItem = ref({});
let timeoutId = null;
const showToastError = ref(false);
let errorTimeoutId = null;

function showToastMessage(item) {
  selectedItem.value = item;
  showToast.value = true;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    showToast.value = false;
  }, 4000);
}

function showToastErrorMessage() {
  showToastError.value = true;

  if (errorTimeoutId) {
    clearTimeout(errorTimeoutId);
  }

  errorTimeoutId = setTimeout(() => {
    showToastError.value = false;
  }, 4000);
}

// - Coins Player
function deductCoins(amount) {
  if (playerStore.value.coins >= amount) {
    playerStore.value.coins -= amount;
  } else {
    console.log("Not enough coins!");
  }
}

// Buy Rods
function addRod(rodId) {
  const rod = fishingRods.find((rod) => rod.id === rodId);

  if (rod) {
    const existingRod = playerStore.value.ownedRods.find(
      (ownedRod) => ownedRod.id === rodId
    );

    if (!existingRod) {
      playerStore.value.ownedRods.push({
        ...rod,
        quantity: 1,
      });
      showToastMessage(rod);
      console.log("ซื้อ Rod สำเร็จ:", rod);
    } else {
      console.log("คุณมี Rod นี้แล้ว ไม่สามารถซื้อเพิ่มได้");
    }
  } else {
    console.log("ไม่พบ Rod ที่ต้องการซื้อ");
  }
}

// Buy Potions
function addPotion(potionId) {
  const selectedPotion = potion.find((p) => p.id === potionId);
  if (selectedPotion) {
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === potionId
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(selectedPotion);
    } else {
      playerStore.value.potions.push({ ...selectedPotion, quantity: 1 });
      quantity = 1;
      showToastMessage(selectedPotion);
    }
  }
}

function purchaseRods(item) {
  if (playerStore.value.coins >= item.price) {
    const existingRod = playerStore.value.ownedRods.find(
      (rod) => rod.id === item.id
    );

    if (!existingRod) {
      deductCoins(item.price);
      addRod(item.id);
      playSuccessBuySound();
      console.log("New Rod added:", playerStore.value.ownedRods);
    } else {
      console.log("คุณมี Rod นี้แล้ว ไม่สามารถซื้อเพิ่มได้");
    }
    console.log(playerStore.value.ownedRods);
  } else {
    playFailBuySound();
    showToastErrorMessage();
    console.log("Not enough coins to purchase this item!");
  }
}

function purchasePotion(item) {
  if (playerStore.value.coins >= item.price) {
    deductCoins(item.price);
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === item.id
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      playSuccessBuySound();
      showToastMessage(item);
    } else {
      addPotion(item.id);
      playSuccessBuySound();
    }
  } else {
    playFailBuySound();
    showToastErrorMessage();
    console.log("Not enough coins to purchase this item!");
  }
}

const playerCoins = computed(() => playerStore.value.coins);
//======================================== BookMark Page ========================================
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
  <!-- ======================================== Loading ========================================-->
  <div class="loading-screen" v-if="loading">
    <img src="/images/gif/loading.gif" />
    <p>{{ loadingMessage }}</p>
    <div class="loading-bar">
      <div
        class="loading-bar-inner"
        :style="{ width: loadingProgress + '%' }"
      ></div>
    </div>
    <button class="start-btn" @click="startGame" :disabled="!isLoaded">
      Continue
    </button>
  </div>
  <!-- ======================================== Home ========================================  -->
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${backgroundImg})`,
    }"
    v-if="page === 1"
  >
    <!-- Setting Button -->
    <div class="absolute top-4 left-4" style="user-select: none">
      <img
        @click="openSettings"
        src="/images/button/Setting.png"
        alt="Settings"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="playHoverSound"
      />
    </div>

    <!-- How to play Button -->
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

  <!-- ==================== Home.Setting -->
  <transition name="fade">
    <div
      v-if="isSettingsOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
      >
        <h2 class="text-2xl font-bold mb-4">Settings</h2>

        <!-- Toggle Sounds -->
        <div class="mb-6">
          <label class="flex items-center mb-2">
            <div
              @click="toggleSound"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isSoundOn,
                'bg-gray-500': !isSoundOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">Sound On/Off</span>
          </label>
          <label class="flex items-center mb-2">
            <div
              @click="toggleMusic"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isMusicOn,
                'bg-gray-500': !isMusicOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">Music On/Off</span>
          </label>
          <label class="flex items-center">
            <div
              @click="toggleSfx"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isSfxOn,
                'bg-gray-500': !isSfxOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">SFX On/Off</span>
          </label>
        </div>

        <!-- Set Player Name -->
        <div class="mb-6">
          <label class="block mb-2 font-bold">Change Player Name:</label>
          <input
            v-model="playerStore.name"
            type="text"
            class="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
            placeholder="Enter new player name"
            maxlength="20"
          />
        </div>

        <!-- Buttons -->
        <div class="flex justify-end space-x-4">
          <button
            @mouseenter="playHoverSound"
            @click="saveSettings"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
  <!-- ==================== Home.Navigation ====================-->
  <transition name="fade">
    <div
      v-if="isHowToPlayOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col items-center"
      >
        <!-- Title Image -->
        <img
          src="/images/howtoplay/pageone.png"
          alt="How to Play Title"
          class="w-full max-w-xs md:max-w-sm h-auto mb-4"
        />

        <!-- Image Slider -->
        <div class="relative w-full flex justify-center items-center">
          <img
            :src="imagesHowToPlay[currentImageIndex]"
            alt="How to Play Image"
            class="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
          />

          <!-- Navigation Arrows -->
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

        <!-- Dots Navigation -->
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

        <!-- Close Button -->
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
  <!--  ======================================== Play  ======================================== -->
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${playBackgroundImg})`,
    }"
    v-if="page === 5"
  >
    <!-- Hook and SVG Image Section -->
    <div class="relative flex justify-center items-center h-screen w-full">
      <!-- SVG Image -->
      <img
        :src="seaImg"
        alt="Animated SVG"
        class="animated-svg relative z-10"
      />

      <!-- Hook -->
      <div
        :class="hookAnimationClass"
        class="hook-container"
        v-show="hooking"
        :style="{ backgroundImage: `url(${hookImg})` }"
      ></div>
    </div>

    <!-- Modal Get Fish -->
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

    <!-- Modal Escaped Fish -->
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

    <!-- Navigation and Bottom Image -->
    <div class="relative w-full mt-auto">
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E]">
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Back.png"
          alt="Bottom Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Foreground Image -->
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
        <img
          @mouseenter="playHoverSound"
          src="/images/button/front.png"
          alt="Top Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Navigation -->
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
    <!-- ==================== Repairing rod ====================-->
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

    <!-- ==================== Player ====================-->
    <div
      class="absolute top-0 left-0 p-4 z-20 w-full bg-gray-900 bg-opacity-80 shadow-lg text-white flex items-center justify-between space-x-8"
    >
      <!-- รูปโปรไฟล์ และ ชื่อ -->
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

      <!-- use Potion -->
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

      <!-- use Rods -->
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

      <!-- HP Rods -->
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
  <!--  ======================================== Inventory ======================================== -->
  <div class="p-6 bg-gray-1000 min-h-screen flex" v-if="page === 2">
    <!-- Sidebar for Categories -->
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

    <!-- Toast Notification -->
    <div v-if="showToastInventory" class="toast-notification">
      <div class="toast-content">
        <div class="toast-message">
          <p>{{ toastMessage }}</p>
        </div>
      </div>
    </div>

    <!-- Main Inventory Section -->
    <div class="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg text-yellow-100">
      <h1 class="text-3xl font-bold mb-6">Inventory {{ nameInventory }}</h1>
      <p class="mb-4">Capacity {{ inventoryCapacity }}/{{ maxCapacity }}</p>

      <!-- Inventory Grid -->
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

          <!-- Sell Button -->
          <div v-if="isFish(item)" class="flex flex-col space-y-2">
            <!-- One -->
            <button
              @mouseenter="playHoverSound"
              @click="sellFish(item)"
              class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Sell 1 for {{ item.price }} coins
            </button>

            <!-- All -->
            <button
              @mouseenter="playHoverSound"
              @click="sellFishAll(item)"
              class="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              Sell All {{ item.price * item.quantity }} coins
            </button>
          </div>
          <!-- use Rod -->
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
          <!-- use Potions -->
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
  <!--  ========================================  Shop ======================================== -->
  <div
    class="p-6 bg-gray-900 min-h-screen flex flex-col items-center"
    v-if="page === 3"
  >
    <button
      @mouseenter="playHoverSound"
      @click="togglePage(5)"
      class="self-start mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
    >
      Back
    </button>
    <h1 class="text-5xl font-bold text-yellow-100 mb-6">SHOP</h1>
    <p class="text-yellow-100 mb-4">My coins : {{ playerCoins }}</p>
    <p class="text-3xl font-bold text-yellow-700 mb-6">Rod</p>
    <div class="grid grid-cols-3 gap-6 mb-6">
      <div
        v-for="rod in fishingRods"
        :key="rod.id"
        class="bg-yellow-800 p-4 rounded-lg shadow-lg text-center"
      >
        <img :src="rod.icon" :alt="rod.name" class="mb-4 h-70 w-80" />
        <p class="text-yellow-100 font-bold">{{ rod.name }}</p>
        <p class="text-yellow-200">Price: {{ rod.price }} coins</p>
        <p>
          {{
            playerStore.ownedRods?.find((ownedRod) => ownedRod.id === rod.id)
              ? "Rod owned"
              : "Rod not owned"
          }}
        </p>
        <button
          @mouseenter="playHoverSound"
          :disabled="
            playerStore.ownedRods?.find((ownedRod) => ownedRod.id === rod.id)
          "
          @click="purchaseRods(rod)"
          class="mt-4 text-yellow-100 py-2 px-4 rounded"
          :class="{
            'bg-gray-500 cursor-not-allowed': playerStore.ownedRods?.find(
              (ownedRod) => ownedRod.id === rod.id
            ),
            'bg-yellow-600 hover:bg-yellow-500': !playerStore.ownedRods?.find(
              (ownedRod) => ownedRod.id === rod.id
            ),
          }"
        >
          Buy
        </button>
      </div>
    </div>
    <p class="text-3xl font-bold text-yellow-700 mb-6">Potion</p>
    <div class="grid grid-cols-3 gap-6 mb-6">
      <div
        v-for="potionItem in potion"
        :key="potionItem.id"
        class="bg-yellow-800 p-4 rounded-lg shadow-lg text-center"
      >
        <img
          :src="potionItem.icon"
          :alt="potionItem.name"
          class="mb-4 h-70 w-80"
        />
        <p class="text-yellow-100 font-bold">{{ potionItem.name }}</p>
        <p class="text-yellow-200">Price: {{ potionItem.price }} coins</p>
        <p class="text-yellow-300 text-sm">{{ potionItem.effect }}</p>
        <button
          @mouseenter="playHoverSound"
          @click="purchasePotion(potionItem)"
          class="mt-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
        >
          Buy
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast-notification">
      <div class="toast-content">
        <img :src="selectedItem.icon" class="toast-icon" alt="Item icon" />
        <div class="toast-message">
          <p>Successfully purchased {{ selectedItem.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <transition name="slide-fade">
    <div v-if="showToastError" class="toast-notification-error">
      <div class="toast-message-error">
        Not enough coins to purchase this item!
      </div>
    </div>
  </transition>

  <!-- ======================================== Bookmark (Achievement) ======================================== -->
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
          <!-- Header -->
          <div class="mb-6">
            <p
              class="text-3xl font-bold text-center text-yellow-100 bg-gray-900 py-4 rounded-t-lg"
            >
              Achievement
            </p>
          </div>

          <!-- Fish Category Selection -->
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

          <!-- Fish Data Grids -->
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
/* @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
} */

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
