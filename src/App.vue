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
    playerStore.caughtFish.push(fish);
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

function getEnhacementPlayerById(id) {
  return playerStore.potions.find((potion) => potion.id === id);
}

function fixHpRods() {
  playerStore.usingRods.hp = getRodById(playerStore.usingRods.id).hp;
}

function reduceHpRods() {
  reducesHp.value = 0;
  if (playerStore.usingRods.id === 1) {
    reducesHp.value = 3;
  } else if (playerStore.usingRods.id === 2) {
    reducesHp.value = 2;
  } else {
    reducesHp.value = 1;
  }

  if (getEnhacementPlayerById(3) === getRodEnhancementById(3)) {
    reducesHp.value = (reducesHp.value * 80) / 100;
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
  check.value = getRodEnhancementById(2) === getEnhacementPlayerById(2);
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

    fishId.value = caughtFish.value.id;
    addCaughtFish(caughtFish.value.id);
  } else if (rate >= 25 + luck * 5 && rate < 55) {
    random("rare");
    fishId.value = caughtFish.value.id;
    addCaughtFish(caughtFish.value.id);
  } else if (rate >= 7 + luck * 2 && rate < 25 + luck * 5) {
    random("epic");
    fishId.value = caughtFish.value.id;
    addCaughtFish(caughtFish.value.id);
  } else {
    random("legendary");
    fishId.value = caughtFish.value.id;
    addCaughtFish(caughtFish.value.id);
  }
}

function checkRod() {
  const luckpoint = 0;
  const checkEnhance = getRodEnhancementById(5) === getEnhacementPlayerById(5);
  const checkRod = playerStore.usingRods.id;
  if (checkEnhance) {
    luckpoint + 1;
  }
  luckpoint + checkRod - 1;
  ranFish(luckpoint);
}

function hookFish() {
  const chanceToGet = Math.random() * 100;

  doAfterTimeOut(() => {
    if (
      getRodEnhancementById(1) === getEnhacementPlayerById(1) &&
      chanceToGet > 20
    ) {
      checkRod();
      gottenFish.value = true;
      fishName.value =
        playerStore.caughtFish[playerStore.caughtFish.length - 1].name;
    } else if (
      getRodEnhancementById(1) != getEnhacementPlayerById(1) &&
      chanceToGet > 30
    ) {
      checkRod();
      gottenFish.value = true;
      fishName.value =
        playerStore.caughtFish[playerStore.caughtFish.length - 1].name;
    } else {
      escapedFish.value = true;
    }
    hooking.value = false;
  });
}

const hook = (rodId) => {
  if (playerStore.usingRods.hp != 0) {
    reduceHpRods();
    if (playerStore.usingRods.hp < reducesHp.value) {
      alert("Caution! Your Rod is broken pls fix before hook");
    } else {
      playerStore.usingRods.hp = playerStore.usingRods.hp - reducesHp.value;
      rodId.value = rodId;
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

// ฟังก์ชันสำหรับเพิ่มเหรียญ
function addCoins(amount) {
  playerStore.value.coins += amount;
}

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
  playerStore.value.caughtFish = playerStore.value.caughtFish.filter(f => f.id !== fish.id);
  console.log(playerStore)
}

// ฟังก์ชันสำหรับใส่ Rod
function equipRod(rod) {
  playerStore.value.usingRods = rod;
  console.log(playerStore)
}

// ฟังก์ชันสำหรับใช้ Potion
function usePotion(potion) {
  const existingPotion = playerStore.value.usingPosion.find(p => p.id === potion.id);
  if (!existingPotion) {
    playerStore.value.usingPosion.push(potion);
  }
  playerStore.value.potions = playerStore.value.potions.filter(p => p.id !== potion.id || p.quantity > 1);
  if (potion.quantity > 1) {
    potion.quantity -= 1;
  }
  console.log(playerStore)
}

// Helper functions เพื่อตรวจสอบประเภทของ item
function isFish(item) {
  return playerStore.value.caughtFish.some(fish => fish.id === item.id);
}

function isRod(item) {
  return playerStore.value.ownedRods.some(rod => rod.id === item.id);
}

function isPotion(item) {
  return playerStore.value.potions.some(potion => potion.id === item.id);
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
const selectItem = ref("noselectitem");

function filterFish(a, b) {
  // กรองปลา จากปลา id a ถึง id b
  return fishStore.filter((fish) => fish.id >= a && fish.id <= b);
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
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="background-image: url('/src/assets/images/image/PLAY.png')"
    v-if="page === 5"
  >
    <img
      src="/src/assets/images/svg/PLAY.svg"
      alt="Animated SVG"
      class="animated-svg"
    />
    <!-- Hook -->
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4"
      style="
        width: 500px;
        height: 500px;
        background-image: url('/src/components/icons/Hookbait.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      "
      v-show="hooking"
    ></div>
    <!-- Modal Get Fish -->
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      v-show="gottenFish"
    >
      <div
        class="p-8 rounded-2xl shadow-lg w-11/12 my-10 h-4/6 md:w-1/2 max-w-4xl text-center flex flex-col items-center"
        style="
          background-image: url('/src/components/images/SeaBackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div
          class="text-4xl text-yellow-600 font-sans font-extrabold border-8 border-blue-500 rounded-xl bg-blue-100 mx-8 md:mx-16 p-6 flex items-center justify-center"
        >
          <span>You got a</span>
          <div
            class="text-4xl text-blue-700 font-sans font-extrabold flex items-center"
          >
            &nbsp; "
            <span class="text-4xl text-green-600 font-extrabold">
              {{ fishName }}
            </span>
            "
          </div>
        </div>

        <div class="w-full h-1/2 flex items-center justify-center mt-8">
          <div
            class="bg-pink-100 border border-gray-200 rounded-lg shadow-lg p-4 max-w-md w-full h-10/12 mb-2 flex justify-center"
          >
            <img
              :src="`/src/components/fishs/${fishId}.png`"
              alt="Fish Image"
              class="w-full h-full object-cover rounded-lg"
              style="max-width: 200px; max-height: 200px; object-fit: cover"
            />
          </div>
        </div>
        <button
          @click="closeModal"
          class="bg-black text-white border-2 border-black rounded-lg w-1/2 p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-10"
        >
          Close
        </button>
      </div>
    </div>
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      v-show="escapedFish"
    >
      <div
        class="p-6 rounded-xl shadow-lg w-3/4 my-8 h-1/3 md:w-1/3 max-w-md text-center flex flex-col items-center"
        style="
          background-image: url('/src/components/images/SeaBackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <div
          class="text-2xl text-red-600 font-sans font-bold border-4 border-red-500 rounded-lg bg-red-100 mx-4 md:mx-8 p-4 flex items-center justify-center"
        >
          <span>Unfortunately, your fish &nbsp; Escaped!</span>
          <div
            class="text-2xl text-red-700 font-sans font-bold flex items-center ml-2"
          ></div>
        </div>

        <button
          @click="closeModal"
          class="bg-black text-white border-2 border-black rounded-lg w-1/2 p-3 text-sm font-semibold transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-20"
        >
          Close
        </button>
      </div>
    </div>
    <div class="relative w-full">
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
          class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36"
        />
        <img
          src="./assets/images/button/BackPack.png"
          alt="Inventory"
          @click="togglePage(2)"
          class="w-20 md:w-24 transition-transform transform hover:scale-110"
        />
        <img
          src="./assets/images/button/Play.png"
          alt="Hook"
          @click="hooking"
          class="w-24 md:w-32 transition-transform transform hover:scale-110"
        />
        <img
          src="./assets/images/button/Shop.png"
          alt="Shop"
          @click="togglePage(3)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110"
        />
        <img
          src="./assets/images/button//BookMark.png"
          alt="Bookmark"
          @click="togglePage(4)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36"
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
      <img :src="item.icon" :alt="item.name" class="mb-2 h-20 w-20 mx-auto" />
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
  <!-- ==================== Bookmark ====================-->
    <div  v-if="page === 4">
      <div
        class="bg-black/50 w-screen h-screen fixed top-0 left-0 font-nonto overflow-scroll"
      >
        <div class="flex justify-center w-screen mt-[30px]">
          <div
            class="header fade-up bg bg-slate-200 border-black w-[60%] min-w-[300px] min-h-[900px] rounded-[7px]"
          >
            <div>
              <p
                class="text-2xl font-mono text-gray-800 text-center bg-slate-300 pt-[10px]"
              >
                Achievement
              </p>
            </div>

            <div class="bg-slate-300 flex gap-5 justify-evenly">
              <div class="relative inline-block w-59 my-[15px] font-mono">
                <p class="text-center text-lg">Fish</p>
                <select
                  v-model="selectFish"
                  class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none"
                >
                  <option value="common">Common</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legend">Legend</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-7 text-gray-700"
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

            <!--  fish data  -->
            <div v-show="selectFish === 'noselectfish'"></div>

            <!--  common -->
            <div
              v-show="selectFish === 'common'"
              class="transition-opacity justify-evenly gap-10 mt-[10px] ml-[10px] text-center grid grid-cols-3 justify-items-center"
            >
              <div
                v-for="fish in filterFish(1, 10)"
                :key="fish.id"
              >
                <img
                  class="brightness-0"
                  :src="fish.icon"
                  width="150px"
                />
                <h3>{{ fish.name }}</h3>
                <p>${{ fish.price }}</p>
              </div>
            </div>

            <!-- rare -->
            <div
              v-show="selectFish === 'rare'"
              class="justify-evenly gap-10 mt-[10px] ml-[10px] text-center grid grid-cols-3 justify-items-center"
            >
              <div
                v-for="fish in filterFish(11, 14)"
                :key="fish.id"
              >
                <img
                  class="brightness-0"
                  :src="fish.icon"
                  width="150px"
                />
                <h3>{{ fish.name }}</h3>
                <p>${{ fish.price }}</p>
              </div>
            </div>

            <!-- epic -->
            <div
              v-show="selectFish === 'epic'"
              class="justify-evenly gap-10 mt-[10px] ml-[10px] text-center grid grid-cols-3 justify-items-center"
            >
              <div
                v-for="fish in filterFish(15, 19)"
                :key="fish.id"
              >
                <img
                  class="brightness-0"
                  :src="fish.icon"
                  width="150px"
                />
                <h3>{{ fish.name }}</h3>
                <p>${{ fish.price }}</p>
              </div>
            </div>

            <!-- legend -->
            <div
              v-show="selectFish === 'legend'"
              class="justify-evenly gap-10 mt-[10px] ml-[10px] text-center grid grid-cols-3 justify-items-center"
            >
              <div
                v-for="fish in filterFish(20, 20)"
                :key="fish.id"
              >
                <img
                  class="brightness-0 noselect"
                  :src="fish.icon"
                  width="150px"
                />
                <h3>{{ fish.name }}</h3>
                <p>${{ fish.price }}</p>
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
