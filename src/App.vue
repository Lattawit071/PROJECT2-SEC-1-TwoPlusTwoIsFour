<script setup>
import { ref, computed } from "vue";
// All Data (Fish,Rods,Potion)
// Fish
const fishStore = [
  {
    id: 1,
    name: "Sardine",
    quantity: 1,
    price: 50,
    icon: "/src/assets/images/fish/Sardine.png",
  },
  {
    id: 2,
    name: "Clownfish",
    quantity: 1,
    price: 150,
    icon: "/src/assets/images/fish/Clownfish.png",
  },
  {
    id: 3,
    name: "Catfish",
    quantity: 1,
    price: 200,
    icon: "/src/assets/images/fish/Catfish.png",
  },
  {
    id: 4,
    name: "Salmon",
    quantity: 1,
    price: 250,
    icon: "/src/assets/images/fish/Salmon.png",
  },
  {
    id: 5,
    name: "Tuna",
    quantity: 1,
    price: 250,
    icon: "/src/assets/images/fish/Tuna.png",
  },
  {
    id: 6,
    name: "Marlin",
    quantity: 1,
    price: 700,
    icon: "/src/assets/images/fish/Marlin.png",
  },
  {
    id: 7,
    name: "Stingray",
    price: 500,
    icon: "/src/assets/images/fish/Stingray.png",
  },
  {
    id: 8,
    name: "Eel",
    quantity: 1,
    price: 300,
    icon: "/src/assets/images/fish/Eel.png",
  },
  {
    id: 9,
    name: "White_Koi",
    quantity: 1,
    price: 800,
    icon: "/src/assets/images/fish/White_Koi.png",
  },
  {
    id: 10,
    name: "Squid",
    quantity: 1,
    price: 850,
    icon: "/src/assets/images/fish/Squid.png",
  },
  {
    id: 11,
    name: "Shark",
    quantity: 1,
    price: 1500,
    icon: "/src/assets/images/fish/Shark.png",
  },
  {
    id: 12,
    name: "Orca",
    quantity: 1,
    price: 2000,
    icon: "/src/assets/images/fish/Orca.png",
  },
  {
    id: 13,
    name: "Blue_Whale",
    quantity: 1,
    price: 2500,
    icon: "/src/assets/images/fish/Blue_Whale.png",
  },
  {
    id: 14,
    name: "Giant_Pacific_Octopus",
    quantity: 1,
    price: 2500,
    icon: "/src/assets/images/fish/Giant_Pacific_Octopus.png",
  },
  {
    id: 15,
    name: "Golden_Fish",
    quantity: 1,
    price: 3000,
    icon: "/src/assets/images/fish/Golden_Fish.png",
  },
  {
    id: 16,
    name: "Rainbow_Fish",
    quantity: 1,
    price: 3500,
    icon: "/src/assets/images/fish/Rainbow_Fish.png",
  },
  {
    id: 17,
    name: "Pearl",
    quantity: 1,
    price: 4500,
    icon: "/src/assets/images/fish/Pearl.png",
  },
  {
    id: 18,
    name: "Diamond",
    quantity: 1,
    price: 5000,
    icon: "/src/assets/images/fish/Diamond.png",
  },
  {
    id: 19,
    name: "Chest",
    quantity: 1,
    price: 8000,
    icon: "/src/assets/images/fish/Chest.png",
  },
  {
    id: 20,
    name: "Dragon",
    quantity: 1,
    price: 100000,
    icon: "/src/assets/images/fish/Dragon.png",
  },
];
// Rods
const fishingRods = [
  {
    id: 1,
    name: "Basic_Rod",
    quantity: 1,
    price: 0,
    icon: "/src/assets/images/rod/Basic_Rod.png",
    hp: 50,
  },
  {
    id: 2,
    name: "Star_Rod",
    quantity: 1,
    price: 50000,
    icon: "/src/assets/images/rod/Star_Rod.png",
    hp: 75,
  },
  {
    id: 3,
    name: "Galaxy_Rod",
    quantity: 1,
    price: 50000,
    icon: "/src/assets/images/rod/Galaxy_Rod.png",
    hp: 100,
  },
  {
    id: 4,
    name: "Lover_Rod",
    quantity: 1,
    price: 50000,
    icon: "/src/assets/images/rod/Lover_Rod.png",
    hp: 200,
  },
  {
    id: 5,
    name: "Thunder_Rod",
    quantity: 1,
    price: 100000,
    icon: "/src/assets/images/rod/Thunder_Rod.png",
    hp: 1000,
  },
];
// Potion
const potion = [
  {
    id: 1,
    name: "Luck +10% 5 minute",
    quantity: 1,
    price: 2500,
    effect: "Lucky ",
    icon: "/src/assets/images/potion/Luck_5m.png",
  },
  {
    id: 2,
    name: "Speed +15% 5 minute",
    quantity: 1,
    price: 2500,
    effect: "Increases fish catch chance by 15%",
    icon: "/src/assets/images/potion/Speed_5m.png",
  },
  {
    id: 3,
    name: "Luck +10% 1 hours",
    quantity: 1,
    price: 10000,
    effect: "Reduces rod wear and tear by 20%",
    icon: "/src/assets/images/potion/Luck_1h.png",
  },
  {
    id: 4,
    name: "Speed +15% 1 hours",
    quantity: 1,
    price: 10000,
    effect: "Decreases fatigue during long fishing sessions",
    icon: "/src/assets/images/potion/Speed_1h.png",
  },
  {
    id: 5,
    name: "Full_Potion",
    quantity: 1,
    price: 100000,
    effect: "Luck+Speed 20% 1 hours",
    icon: "/src/assets/images/potion/Full_Potion.png",
  },
];
// Players
const playerStore = ref({
  id: 1,
  name: "Player1",
  coins: 100000,
  ownedRods: [
    {
      id: 1,
      name: "Basic_Rod",
      quantity: 1,
      price: 0,
      icon: "/src/assets/images/rod/Basic_Rod.png",
      hp: 50,
    },
  ],
  caughtFish: [
    {
      id: 20,
      name: "Dragon",
      quantity: 55,
      price: 100000,
      icon: "/src/assets/images/fish/Dragon.png",
    },
  ],
  potions: [],
  usingRods: {
    id: 1,
    name: "Basic_Rod",
    quantity: 1,
    price: 0,
    icon: "/src/assets/images/rod/Basic_Rod.png",
    hp: 50,
  },
  usingPosion: [],
});
// All Function
//Play
// get Fish by ID
function getFishById(id) {
  return fishStore.find((fish) => fish.id === id);
}

// get a Rods by ID
function getRodById(id) {
  return fishingRods.find((rod) => rod.id === id);
}

// get a Potion by ID
function getPotionById(id) {
  return potion.find((potion) => potion.id === id);
}

//Play
// add a caught fish to the player's inventory
function addCaughtFish(fishId) {
  const fish = getFishById(fishId);
  if (fish) {
    playerStore.value.caughtFish.push(fish);
  }
}

import bubbleSound from "/src/assets/sound/EffectsBubble.mp3";

function playHoverSound() {
  const audio = new Audio(bubbleSound);
  audio.play();
}
//======================================== Toggle ========================================
const page = ref(1);

function togglePage(value) {
  page.value = value;
}
//======================================== Play Page ========================================
const hooking = ref(false);
const gottenFish = ref(false);
const fishName = ref();
const escapedFish = ref(false);
const waiting = ref(false);
const ranNumber = ref(0);
const caughtFish = ref();
const ranTime = ref();
const check = ref();
const reducesHp = ref();
const fishId = ref();
const rodId = ref();
const hookAnimationClass = ref("hook-animation-down");

function getPotionPlayerById(id) {
  return playerStore.value.potions.find((potion) => potion.id === id);
}

function fixHpRods() {
  playerStore.value.usingRods.hp = getRodById(
    playerStore.value.usingRods.id
  ).hp;
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

function waitingForFunction(id) {
  if (waiting.value == true) {
    alert("Caution! Don't be hurry while still catching fish");
  } else {
    hookFish(id);
  }
}

function randomFishing() {
  const rate = Math.random() * 100;
  if (rate >= 35 && check.value == true) {
    ranTime.value = Math.floor(Math.random() * (15 - 5) + 5) * 1000;
  } else {
    ranTime.value = Math.floor(Math.random() * (18 - 5) + 5) * 1000;
  }
}

function doAfterTimeOut(callback) {
  check.value = getPotionById(2) === getPotionPlayerById(2);
  randomFishing();
  waiting.value = true;
  setTimeout(() => {
    waiting.value = false;
    callback();
  }, ranTime.value);
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

function ranFish(luck) {
  const rate = Math.random() * 100;
  if (rate >= 55) {
    random("common");

    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (rate >= 25 + luck * 5 && rate < 55) {
    random("rare");
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else if (rate >= 7 + luck * 2 && rate < 25 + luck * 5) {
    random("epic");
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  } else {
    random("legendary");
    fishId.value = caughtFish.value.icon;
    addCaughtFish(caughtFish.value.id);
  }
}

function checkRod() {
  const luckpoint = 0;
  const checkEnhance = getPotionById(5) === getPotionPlayerById(5);
  const checkRod = playerStore.value.usingRods.id;
  if (checkEnhance) {
    luckpoint + 1;
  }
  luckpoint + checkRod - 1;
  ranFish(luckpoint);
}

function hookFish() {
  const chanceToGet = Math.random() * 100;

  doAfterTimeOut(() => {
    if (getPotionById(1) === getPotionPlayerById(1) && chanceToGet > 20) {
      checkRod();
      gottenFish.value = true;
      fishName.value = playerStore.value.caughtFish[playerStore.value.caughtFish.length - 1].name;
    } else if (getPotionById(1) !== getPotionPlayerById(1) && chanceToGet > 30) {
      checkRod();
      gottenFish.value = true;
      fishName.value = playerStore.value.caughtFish[playerStore.value.caughtFish.length - 1].name;
    } else {
      escapedFish.value = true;
    }

    // เปลี่ยนคลาสเป็นแอนิเมชันเลื่อนกลับขึ้นเมื่อกระบวนการตกปลาเสร็จ
    hookAnimationClass.value = 'hook-animation-up';

    // รอให้แอนิเมชันเลื่อนกลับขึ้นเสร็จสิ้นก่อนซ่อน Hook
    setTimeout(() => {
      hooking.value = false;
    }, 2000); // ระยะเวลาต้องตรงกับความยาวของแอนิเมชัน
  });
}

const hook = () => {
  if (playerStore.value.usingRods.hp != 0) {
    reduceHpRods();
    if (playerStore.value.usingRods.hp < reducesHp.value) {
      alert("Caution! Your Rod is broken pls fix before hook");
    } else {
      playerStore.value.usingRods.hp = playerStore.value.usingRods.hp - reducesHp.value;
      rodId.value = playerStore.value.usingRods.id;

      // เริ่มการตกปลาและแสดง Hook
      hookAnimationClass.value = 'hook-animation-down'; // ให้ Hook เลื่อนลงมา
      hooking.value = true;
      waitingForFunction();
    }
  } else {
    alert("Caution! Your Rod is broken pls fix before hook");
  }
};

const closeModal = () => {
  gottenFish.value = false;
  escapedFish.value = false;
};

//======================================== Inventory Page ========================================
const maxCapacity = 1000;
const selectedCategory = ref("all");
const setCategory = (category) => {
  selectedCategory.value = category;
};

const filteredItems = computed(() => {
  if (selectedCategory.value === "all") {
    return [
      ...playerStore.value.caughtFish,
      ...playerStore.value.ownedRods,
      ...playerStore.value.potions,
    ];
  } else if (selectedCategory.value === "fish") {
    return playerStore.value.caughtFish;
  } else if (selectedCategory.value === "rods") {
    return playerStore.value.ownedRods;
  } else if (selectedCategory.value === "potions") {
    return playerStore.value.potions;
  }
  return [];
});

const inventoryCapacity = computed(() => {
  return filteredItems.value.reduce((acc, item) => acc + item.quantity, 0);
});

// ฟังก์ชันสำหรับขายปลา
function sellFish(fish) {
  playerStore.value.coins += fish.price * fish.quantity;
  playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
    (f) => f.id !== fish.id
  );
  console.log(playerStore);
}

// ฟังก์ชันสำหรับใส่ Rod
function equipRod(rod) {
  playerStore.value.usingRods = rod;
  console.log(playerStore);
}

// ฟังก์ชันสำหรับใช้ Potion
function usePotion(potion) {
  const existingPotion = playerStore.value.usingPosion.find(
    (p) => p.id === potion.id
  );
  if (!existingPotion) {
    playerStore.value.usingPosion.push(potion);
  }
  playerStore.value.potions = playerStore.value.potions.filter(
    (p) => p.id !== potion.id || p.quantity > 1
  );
  if (potion.quantity > 1) {
    potion.quantity -= 1;
  }
  console.log(playerStore);
}

// Helper functions เพื่อตรวจสอบประเภทของ item
function isFish(item) {
  return playerStore.value.caughtFish.some((fish) => fish.id === item.id);
}

function isRod(item) {
  return playerStore.value.ownedRods.some((rod) => rod.id === item.id);
}

function isPotion(item) {
  return playerStore.value.potions.some((potion) => potion.id === item.id);
}
//======================================== Shop Page ========================================
// Buy -Coins
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
    playerStore.value.ownedRods.push(rod);
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
    } else {
      playerStore.value.potions.push({ ...selectedPotion, quantity: 1 }); // ถ้าไม่มี ให้เพิ่มใหม่พร้อมกำหนด quantity = 1
    }
  }
}

// ฟังก์ชันสำหรับซื้อสินค้า
function purchaseRods(item) {
  if (playerStore.value.coins >= item.price) {
    deductCoins(item.price);
    if (fishingRods.some((rod) => rod.id === item.id)) {
      addRod(item.id);
    }
  } else {
    console.log("Not enough coins to purchase this item!");
  }
}

function purchasePotion(item) {
  if (playerStore.value.coins >= item.price) {
    deductCoins(item.price);

    if (potion.some((potions) => potions.id === item.id)) {
      addPotion(item.id);
    }
  } else {
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
  <!-- ==================== Home ====================-->
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="
      user-select: none;
      background-image: url('/src/assets/images/image/Background.png');
    "
    v-if="page === 1"
  >
    <!-- Top Left Button -->
    <div class="absolute top-4 left-4" style="user-select: none">
      <img
        @click="openSettings"
        src="./assets/images/button/Setting.png"
        alt="Settings"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="playHoverSound"
      />
    </div>

    <!-- Top Right Button -->
    <div class="absolute top-4 right-4" style="user-select: none">
      <img
        @click="openHelp"
        src="./assets/images/button/Question.png"
        alt="Help"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="playHoverSound"
      />
    </div>
    <!-- Center Content -->
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
            src="./assets/images/button/Button.png"
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

  <!-- ==================== Play ====================-->
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    style="background-image: url('/src/assets/images/image/PLAY.png')"
    v-if="page === 5"
  >
    <!-- Hook and SVG Image Section -->
    <div class="relative flex justify-center items-center h-screen w-full">
      <!-- SVG Image -->
      <img
        src="/src/assets/images/svg/PLAY.svg"
        alt="Animated SVG"
        class="animated-svg relative z-10"
      />

<!-- Hook -->
<div
      :class="hookAnimationClass"
      style="
        width: 1250px;
        height: 5250px;
        background-image: url('/src/assets/images/image/Hook.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: 5;
      "
      v-show="hooking"
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
      background-image: url('/src/components/images/SeaBackground.png');
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

    <div class="w-full h-auto md:h-1/2 flex items-center justify-center mt-8">
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
    class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center  bg-gray-1000"
    style="
      background-image: url('/src/components/images/SeaBackground.png');
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
          src="./assets/images/button/Back.png"
          alt="Bottom Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Foreground Image -->
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
        <img
          src="./assets/images/button/front.png"
          alt="Top Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Navigation -->
      <div
        class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent"
      >
        <img
          src="./assets/images/button/Home.png"
          alt="Home"
          @click="togglePage(1)"
          class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36 cursor-pointer"
        />
        <img
          src="./assets/images/button/BackPack.png"
          alt="Inventory"
          @click="togglePage(2)"
          class="w-20 md:w-24 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          src="./assets/images/button/Play.png"
          alt="Hook"
          @click="hook"
          class="w-24 md:w-32 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          src="./assets/images/button/Shop.png"
          alt="Shop"
          @click="togglePage(3)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          src="./assets/images/button//BookMark.png"
          alt="Bookmark"
          @click="togglePage(4)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36 cursor-pointer"
        />
      </div>
    </div>
  </div>
  <!-- ==================== Inventory ====================-->
  <div class="p-6 bg-gray-1000 min-h-screen flex" v-if="page === 2">
    <!-- Sidebar for Categories -->
    <div
      class="w-20 bg-gradient-to-b bg-gray-900 to-yellow-900 text-white flex flex-col items-center py-4 space-y-4 rounded-lg shadow-lg mr-3 p-3"
    >
      <!-- ปุ่ม Back -->
      <button
        @click="togglePage(5)"
        class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Back
      </button>
      <button
        @click="setCategory('all')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/src/assets/images/inventory/All.png" alt="All" />
      </button>
      <button
        @click="setCategory('fish')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/src/assets/images/inventory/Fish.png" alt="Fish" />
      </button>
      <button
        @click="setCategory('rods')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/src/assets/images/inventory/Rods.png" alt="Rods" />
      </button>
      <button
        @click="setCategory('potions')"
        class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
      >
        <img src="/src/assets/images/inventory/Potion.png" alt="potions" />
      </button>
    </div>

    <!-- Main Inventory Section -->
    <div class="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg text-yellow-100">
      <h1 class="text-3xl font-bold mb-6">Inventory</h1>
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

          <!-- ปุ่มขายสำหรับปลา -->
          <button
            v-if="isFish(item)"
            @click="sellFish(item)"
            class="mt-2 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500 w-full"
          >
            Sell for {{ item.price }} coins
          </button>

          <!-- ปุ่มใช้สำหรับ Rods -->
          <button
            v-if="isRod(item)"
            @click="equipRod(item)"
            class="mt-2 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500 w-full"
          >
            Equip Rod
          </button>

          <!-- ปุ่มใช้สำหรับ Potions -->
          <button
            v-if="isPotion(item)"
            @click="usePotion(item)"
            class="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-500 w-full"
          >
            Use Potion
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- ==================== Shop ====================-->
  <div
    class="p-6 bg-gray-900 min-h-screen flex flex-col items-center"
    v-if="page === 3"
  >
    <!-- ปุ่ม Back -->
    <button
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
        <button
          @click="purchaseRods(rod)"
          class="mt-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
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
          @click="purchasePotion(potionItem)"
          class="mt-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
  <!-- ==================== Bookmark (Achievement) ====================-->
  <div v-if="page === 4">
    <div
      class="bg-gray-1000 w-screen h-screen fixed top-0 left-0 font-nonto overflow-scroll"
    >
      <div class="flex justify-center w-screen mt-8">
        <div
          class="header fade-up bg-gradient-to-b bg-gray-900 to-yellow-900 border-black w-[90%] md:w-[60%] min-w-[300px] rounded-lg shadow-lg p-6"
        >
          <button
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
                class="brightness-100 rounded-lg mb-2"
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
                class="brightness-100 rounded-lg mb-2"
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
                class="brightness-100 rounded-lg mb-2"
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
                class="brightness-100 rounded-lg mb-2 noselect"
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

@keyframes hookMoveDown {
  0% {
    transform: translate(-50%, -100%); /* เริ่มต้นจากนอกจอด้านบน */
  }
  100% {
    transform: translate(-50%, -85%); /* อยู่ในตำแหน่งพอเหมาะ (เลื่อนลงมาครึ่งหนึ่งของหน้าจอ) */
  }
}

@keyframes hookMoveUp {
  0% {
    transform: translate(-50%, -85%); /* เริ่มต้นจากตำแหน่งที่เลื่อนลงมา */
  }
  100% {
    transform: translate(-50%, -150%); /* เลื่อนไปนอกจอด้านบน */
  }
}

.hook-animation-down {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -40%);
  animation: hookMoveDown 2s ease forwards; /* เลื่อนลงมาด้านล่าง */
}

.hook-animation-up {
  position: absolute;
  top: 50%; /* เริ่มจากตรงกลาง */
  left: 50%;
  transform: translate(-50%, -40%);
  animation: hookMoveUp 2s ease forwards; /* เลื่อนกลับขึ้นไป */
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

@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
}

@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

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
/* เพิ่ม nth-child() สำหรับแต่ละตัวอักษร */
.wave-animation span:nth-child(4) {
  animation-delay: 0.3s;
}
.wave-animation span:nth-child(5) {
  animation-delay: 0.4s;
}
/* ...เพิ่มต่อไปตามความยาวของข้อความ... */

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
    transform: translate(-50%, 20px); /* Adjust the value as needed */
  }
}
</style>
