<script setup>
import { ref } from "vue";
// Data Store for Fish
const fishStore = [
  {
    id: 1,
    name: "Sardine",
    price: 50,
    icon: "/src/assets/images/fish/Sardine.png",
  },
  {
    id: 2,
    name: "Clownfish",
    price: 150,
    icon: "/src/assets/images/fish/Clownfish.png",
  },
  {
    id: 3,
    name: "Catfish",
    price: 200,
    icon: "/src/assets/images/fish/Catfish.png",
  },
  {
    id: 4,
    name: "Salmon",
    price: 250,
    icon: "/src/assets/images/fish/Salmon.png",
  },
  { id: 5, name: "Tuna", price: 250, icon: "/src/assets/images/fish/Tuna.png" },
  {
    id: 6,
    name: "Marlin",
    price: 700,
    icon: "/src/assets/images/fish/Marlin.png",
  },
  {
    id: 7,
    name: "Stingray",
    price: 500,
    icon: "/src/assets/images/fish/Stingray.png",
  },
  { id: 8, name: "Eel", price: 300, icon: "/src/assets/images/fish/Eel.png" },
  {
    id: 9,
    name: "White_Koi",
    price: 800,
    icon: "/src/assets/images/fish/White_Koi.png",
  },
  {
    id: 10,
    name: "Squid",
    price: 850,
    icon: "/src/assets/images/fish/Squid.png",
  },
  {
    id: 11,
    name: "Shark",
    price: 1500,
    icon: "/src/assets/images/fish/Shark.png",
  },
  {
    id: 12,
    name: "Orca",
    price: 2000,
    icon: "/src/assets/images/fish/Orca.png",
  },
  {
    id: 13,
    name: "Blue_Whale",
    price: 2500,
    icon: "/src/assets/images/fish/Blue_Whale.png",
  },
  {
    id: 14,
    name: "Giant_Pacific_Octopuse",
    price: 2500,
    icon: "/src/assets/images/fish/Giant_Pacific_Octopuse.png",
  },
  {
    id: 15,
    name: "Golden_Fish",
    price: 3000,
    icon: "/src/assets/images/fish/Golden_Fish.png",
  },
  {
    id: 16,
    name: "Rainbow_Fish",
    price: 3500,
    icon: "/src/assets/images/fish/Rainbow_Fish.png",
  },
  {
    id: 17,
    name: "Pearl",
    price: 4500,
    icon: "/src/assets/images/fish/Pearl.png",
  },
  {
    id: 18,
    name: "Diamond",
    price: 5000,
    icon: "/src/assets/images/fish/Diamond.png",
  },
  {
    id: 19,
    name: "Chest",
    price: 8000,
    icon: "/src/assets/images/fish/Chest.png",
  },
  {
    id: 20,
    name: "Dragon",
    price: 100000,
    icon: "/src/assets/images/fish/Dragon.png",
  },
];

// Data Store for Fishing Rods
const fishingRods = [
  {
    id: 1,
    name: "Basic_Rod",
    price: 0,
    icon: "/src/assets/images/rod/Basic_Rod.png",
  },
  {
    id: 2,
    name: "Star_Rod",
    price: 50000,
    icon: "/src/assets/images/rod/Star_Rod.png",
  },
  {
    id: 3,
    name: "Galaxy_Rod",
    price: 50000,
    icon: "/src/assets/images/rod/Galaxy_Rod.png",
  },
  {
    id: 4,
    name: "Lover_Rod",
    price: 50000,
    icon: "/src/assets/images/rod/Lover_Rod.png",
  },
  {
    id: 5,
    name: "Thunder_Rod",
    price: 100000,
    icon: "/src/assets/images/rod/Thunder_Rod.png",
  },
];

// Data Store for Fishing Rod Enhancements
const rodEnhancements = [
  {
    id: 1,
    name: "Luck_5m",
    price: 2500,
    effect: "Increases fish catch rate by 10%",
    icon: "/src/assets/images/potion/Luck_5m.png",
  },
  {
    id: 2,
    name: "Speed_5m",
    price: 2500,
    effect: "Increases fish catch chance by 15%",
    icon: "/src/assets/images/potion/Speed_5m.png",
  },
  {
    id: 3,
    name: "Luck_1h",
    price: 10000,
    effect: "Reduces rod wear and tear by 20%",
    icon: "/src/assets/images/potion/",
  },
  {
    id: 4,
    name: "Speed_1h",
    price: 10000,
    effect: "Decreases fatigue during long fishing sessions",
    icon: "/src/assets/images/potion/Speed_1h.png",
  },
  {
    id: 5,
    name: "Full_Potion",
    price: 100000,
    effect: "Attracts rare fish with a 5% higher probability",
    icon: "/src/assets/images/potion/Full_Potion.png",
  },
];

// Function to get a fish by ID
function getFishById(id) {
  return fishStore.find((fish) => fish.id === id);
}

// Function to get a fishing rod by ID
function getRodById(id) {
  return fishingRods.find((rod) => rod.id === id);
}

// Function to get a rod enhancement by ID
function getRodEnhancementById(id) {
  return rodEnhancements.find((enhancement) => enhancement.id === id);
}

// Data Store for Players
const playerStore = {
  id: 1, // Unique ID for the player
  name: "Player1", // Player's name
  coins: 1000, // Amount of coins the player has
  ownedRods: [], // Array to store fishing rods owned by the player
  caughtFish: [], // Array to store the fish caught by the player
  enhancements: [], // Array to store enhancements owned by the player
};

// Function to add coins to the player
function addCoins(amount) {
  playerStore.coins += amount;
}

// Function to deduct coins from the player
function deductCoins(amount) {
  if (playerStore.coins >= amount) {
    playerStore.coins -= amount;
  } else {
    console.log("Not enough coins!");
  }
}

// Function to add a rod to the player's inventory
function addRod(rodId) {
  const rod = getRodById(rodId);
  if (rod) {
    playerStore.ownedRods.push(rod);
  }
}

// Function to add a caught fish to the player's inventory
function addCaughtFish(fishId) {
  const fish = getFishById(fishId);
  if (fish) {
    playerStore.caughtFish.push(fish);
  }
}

// Function to add an enhancement to the player's inventory
function addEnhancement(enhancementId) {
  const enhancement = getRodEnhancementById(enhancementId);
  if (enhancement) {
    playerStore.enhancements.push(enhancement);
  }
}

function getEnhacementPlayerById(id) {
  return playerStore.enhancements.find((enhancement) => enhancement.id === id);
}


function playHoverSound() {
  const audio = new Audio(require("./assets/sounds/Bubbles Sound Effect.mp3"));
  audio.play();
}

// Play Page
const hooking = ref(false)
const play = ref(true)
const rodId = ref()
const gottenFish = ref(false)
const fishName = ref()
const escapedFish = ref(false)
const waiting = ref(false)
const ranNumber = ref(0)
const caughtFish = ref()
const ranTime = ref()
const check = ref()
const reducesHp = ref()
const fishId = ref()
const togglePlay = () => {
  play.value = !play.value
}

function fixHpRods() {
  playerStore.usingRods.hp = getRodById(playerStore.usingRods.id).hp
}

function reduceHpRods() {
  reducesHp.value = 0
  if (playerStore.usingRods.id === 1) {
    reducesHp.value = 3
  } else if (playerStore.usingRods.id === 2) {
    reducesHp.value = 2
  } else {
    reducesHp.value = 1
  }

  if (getEnhacementPlayerById(3) === getRodEnhancementById(3)) {
    reducesHp.value = (reducesHp.value * 80) / 100
  }
}

function waitingForFunction(id) {
  if (waiting.value == true) {
    alert("Caution! Don't be hurry while still catching fish")
  } else {
    hookFish(id)
  }
}

function randomFishing() {
  const rate = Math.random() * 100
  if (rate >= 35 && check.value == true) {
    ranTime.value = Math.floor(Math.random() * (15 - 5) + 5) * 1000
  } else {
    ranTime.value = Math.floor(Math.random() * (18 - 5) + 5) * 1000
  }
}

function doAfterTimeOut(callback) {
  check.value = getRodEnhancementById(2) === getEnhacementPlayerById(2)
  randomFishing()
  waiting.value = true
  setTimeout(() => {
    waiting.value = false
    callback()
  }, ranTime.value)
}

function random(type) {
  switch (type) {
    case 'common':
      ranNumber.value = Math.floor(Math.random() * 10) + 1
      caughtFish.value = getFishById(ranNumber.value)
      break
    case 'rare':
      ranNumber.value = Math.floor(Math.random() * (15 - 11) + 11)
      caughtFish.value = getFishById(ranNumber.value)
      break
    case 'epic':
      ranNumber.value = Math.floor(Math.random() * (20 - 15) + 15)
      caughtFish.value = getFishById(ranNumber.value)
      break
    case 'legendary':
      ranNumber.value = Math.floor(Math.random() * (20 - 20) + 20)
      caughtFish.value = getFishById(ranNumber.value)
      break
  }
}

function ranFish(luck) {
  const rate = Math.random() * 100
  if (rate >= 55) {
    random('common')


    fishId.value = caughtFish.value.id
    addCaughtFish(caughtFish.value.id)
  } else if (rate >= 25 + luck * 5 && rate < 55) {
    random('rare')
    fishId.value = caughtFish.value.id
    addCaughtFish(caughtFish.value.id)
  } else if (rate >= 7 + luck * 2 && rate < 25 + luck * 5) {
    random('epic')
    fishId.value = caughtFish.value.id
    addCaughtFish(caughtFish.value.id)
  } else {
    random('legendary')
    fishId.value = caughtFish.value.id
    addCaughtFish(caughtFish.value.id)
  }
}

function checkRod() {
  const luckpoint = 0
  const checkEnhance = getRodEnhancementById(5) === getEnhacementPlayerById(5)
  const checkRod = playerStore.usingRods.id
  if (checkEnhance) {
    luckpoint + 1
  }
  luckpoint + checkRod - 1
  ranFish(luckpoint)
}

function hookFish() {
  const chanceToGet = Math.random() * 100

  doAfterTimeOut(() => {
    if (
      getRodEnhancementById(1) === getEnhacementPlayerById(1) &&
      chanceToGet > 20
    ) {
      checkRod()
      gottenFish.value = true
      fishName.value =
        playerStore.caughtFish[playerStore.caughtFish.length - 1].name
    } else if (
      getRodEnhancementById(1) != getEnhacementPlayerById(1) &&
      chanceToGet > 30
    ) {
      checkRod()
      gottenFish.value = true
      fishName.value =
        playerStore.caughtFish[playerStore.caughtFish.length - 1].name
    } else {
      escapedFish.value = true
    }
    hooking.value = false
  })
}

const hook = (rodId) => {
  if (playerStore.usingRods.hp != 0) {
    reduceHpRods()
    if (playerStore.usingRods.hp < reducesHp.value) {
      alert('Caution! Your Rod is broken pls fix before hook')
    } else {
      playerStore.usingRods.hp = playerStore.usingRods.hp - reducesHp.value
      rodId.value = rodId
      hooking.value = true
      waitingForFunction()
    }
  } else {
    alert('Caution! Your Rod is broken pls fix before hook')
  }
}

const closeModal = () => {
  gottenFish.value = false
  escapedFish.value = false
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="user-select: none; background-image: url('/src/components/image/Background.png'"
    v-if="play"
  >
    <!-- Top Left Button -->
    <div class="absolute top-4 left-4" style="user-select: none">
      <img
        @click="openSettings"
        src="./components/icons/Setting.png"
        alt="Settings"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseover="playHoverSound"
      />
    </div>

    <!-- Top Right Button -->
    <div class="absolute top-4 right-4" style="user-select: none">
      <img
        @click="openHelp"
        src="./components/icons/Question.png"
        alt="Help"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseover="playHoverSound"
      />
    </div>
    <!-- Center Content -->
    <div class="text-center" style="user-select: none">
      <div
        class="text-5xl md:text-8xl font-handwritten mb-16 wave-animation"
        style="font-family: 'Pacifico', cursive"
      >
        <span>F</span><span>i</span><span>s</span><span>h</span> <span>F</span
        ><span>o</span><span>r</span> <span>L</span><span>i</span><span>f</span
        ><span>e</span>
      </div>
      <div class="relative inline-block template" style="user-select: none">
        <div
          class="relative w-64 h-24 md:w-96 md:h-40 cursor-pointer transition-transform duration-300 hover:scale-110"
          @click="togglePlay"
          @mouseover="playHoverSound"
        >
          <img
            src="./components/icons/Button.png"
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

  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="background-image: url('/src/components/images/PlayBackground.png')"
    v-if="!play"
  >
    <!-- Centered Hookbait Image at Top Center -->
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4"
      style="
        width: 500px; /* Set a fixed width for the image container */
        height: 500px; /* Set a fixed height for the image container */
        background-image: url('/src/components/icons/Hookbait.png');
        background-size: contain; /* Ensures the image fits within the container */
        background-repeat: no-repeat; /* Ensures the image does not repeat */
        background-position: center; /* Centers the image within the container */
      "
      v-show="hooking"
    ></div>

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
          src="./components/icons/Back.png"
          alt="Bottom Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Foreground Image -->
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
        <img
          src="./components/icons/front.png"
          alt="Top Image"
          class="w-full object-contain"
        />
      </div>

      <!-- Navigation Icons -->
      <div
        class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent"
      >
        <img
          src="./assets/images/button/Home.png"
          alt="Home"
          @click="togglePlay"
          class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36"
        />
        <img
          src="./assets/images/button/BackPack.png"
          alt="Inventory"
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
          class="w-20 md:w-28 transition-transform transform hover:scale-110"
        />
        <img
          src="./assets/images/button//BookMark.png"
          alt="Bookmark"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
}

@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.wave-animation {
  /* display: inline-block; */
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
</style>
