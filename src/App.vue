<script scope>
// Data Store for Fish
const fishStore = [
  { id: 1, name: "Salmon", price: 100 },
  { id: 2, name: "Tuna", price: 150 },
  { id: 3, name: "Trout", price: 90 },
  { id: 4, name: "Catfish", price: 80 },
  { id: 5, name: "Bass", price: 120 },
  { id: 6, name: "Carp", price: 70 },
  { id: 7, name: "Pike", price: 110 },
  { id: 8, name: "Cod", price: 130 },
  { id: 9, name: "Herring", price: 60 },
  { id: 10, name: "Perch", price: 85 },
  { id: 11, name: "Swordfish", price: 200 },
  { id: 12, name: "Eel", price: 75 },
  { id: 13, name: "Mackerel", price: 95 },
  { id: 14, name: "Sardine", price: 50 },
  { id: 15, name: "Grouper", price: 140 },
  { id: 16, name: "Snapper", price: 125 },
  { id: 17, name: "Flounder", price: 100 },
  { id: 18, name: "Halibut", price: 160 },
  { id: 19, name: "Barracuda", price: 180 },
  { id: 20, name: "Marlin", price: 220 },
];

// Data Store for Fishing Rods
const fishingRods = [
  { id: 1, name: "Basic Rod", price: 100 },
  { id: 2, name: "Advanced Rod", price: 500 },
  { id: 3, name: "Pro Rod", price: 1000 },
];

// Data Store for Fishing Rod Enhancements
const rodEnhancements = [
  {
    id: 1,
    name: "Stronger Line",
    price: 200,
    effect: "Increases fish catch rate by 10%",
  },
  {
    id: 2,
    name: "Sharper Hook",
    price: 300,
    effect: "Increases fish catch chance by 15%",
  },
  {
    id: 3,
    name: "Durable Rod",
    price: 400,
    effect: "Reduces rod wear and tear by 20%",
  },
  {
    id: 4,
    name: "Lightweight Reel",
    price: 250,
    effect: "Decreases fatigue during long fishing sessions",
  },
  {
    id: 5,
    name: "Enhanced Bait",
    price: 150,
    effect: "Attracts rare fish with a 5% higher probability",
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

function waitingForFunction(id) {
  if (waiting.value == true) {
    alert("Caution! Don't be hurry while still catching fish");
  } else {
    hookFish(id);
  }
}

function doAfterTimeOut(callback) {
  if (getRodEnhancementById(2) === getEnhacementPlayerById(2)) {
    waiting.value = true;
    setTimeout(() => {
      waiting.value = false;
      callback();
    }, 5000);
  } else {
    waiting.value = true;
    setTimeout(() => {
      waiting.value = false;
      callback();
    }, 8000);
  }
}

function random(type) {
  switch (type) {
    case "common":
      ranNumber.value = Math.floor(Math.random() * 10);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "rare":
      ranNumber.value = Math.floor(Math.random() * (15 - 10) + 10);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "epic":
      ranNumber.value = Math.floor(Math.random() * (20 - 14) + 14);
      caughtFish.value = getFishById(ranNumber.value);
      break;
    case "legendary":
      ranNumber.value = Math.floor(Math.random() * (20 - 20) + 20);
      caughtFish.value = getFishById(ranNumber.value);
      break;
  }
}

function hookFish(rodId) {
  const rate = Math.random() * 100;
  doAfterTimeOut(() => {
    if (rate >= 65) {
      random("common");
      addCaughtFish(caughtFish.value.id);
    } else if (rate >= 20 && rate < 65) {
      random("rare");
      addCaughtFish(caughtFish.value.id);
    } else if (rate >= 10 && rate < 20) {
      random("epic");
      addCaughtFish(caughtFish.value.id);
    } else {
      random("legendary");
      addCaughtFish(caughtFish.value.id);
    }
  });
}
const waiting = ref(false);
const ranNumber = ref(0);
const caughtFish = ref();
const gottenFish = ref(false);
/*// Example Usage
addCoins(500); // Add 500 coins to the player
deductCoins(300); // Deduct 300 coins from the player
addRod(1); // Add the Basic Rod to the player's inventory
addCaughtFish(4); // Add Catfish to the player's caught fish list
addEnhancement(2); // Add the Sharper Hook enhancement to the player's inventory
// console.log(playerStore);*/

import { ref } from "vue";

export default {
  setup() {
    const play = ref(true);
    const gottenFish = ref(false);
    const fishName = ref();
    const togglePlay = () => {
      play.value = !play.value;
    };
    const hooking = () => {
      waitingForFunction();
      if (getRodEnhancementById(2) === getEnhacementPlayerById(2)) {
        setTimeout(() => {
          gottenFish.value = true;
          fishName.value =
            playerStore.caughtFish[playerStore.caughtFish.length - 1].name;
        }, 5000);
      } else {
        setTimeout(() => {
          gottenFish.value = true;
          fishName.value =
            playerStore.caughtFish[playerStore.caughtFish.length - 1].name;
        }, 8000);
      }
    };
    const closeModal = () => {
      gottenFish.value = false;
    };

    return {
      play,
      togglePlay,
      hooking,
      closeModal,
      gottenFish,
      fishName,
    };
  },
};
</script>

<template>
  <!-- <div class="main-container" v-if="play"> -->
  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="
      background-image: url('/src/components/image/Background.png');
      height: 400px;
    "
    v-if="play"
  >
    <!-- Top Left Button -->
    <div style="position: absolute; top: 1rem; left: 1rem">
      <img
        @click="openSettings"
        src="./components/icons/Setting.png"
        alt="Settings"
        style="
          width: 15rem;
          height: 15rem;
          cursor: pointer;
          object-fit: contain;
        "
      />
    </div>
    <!-- Top Right Button -->
    <div style="position: absolute; top: 1rem; right: 1rem">
      <img
        @click="openHelp"
        src="./components/icons/Question.png"
        alt="Help"
        style="
          width: 15rem;
          height: 15rem;
          cursor: pointer;
          object-fit: contain;
        "
      />
    </div>
    <!-- Center Content -->
    <div style="text-align: center">
      <div
        style="
          font-size: 10rem;
          font-family: 'YourHandwrittenFont', sans-serif;
          margin-bottom: 10rem;
        "
      >
        Fish For Life
      </div>
      <div style="position: relative; display: inline-block" class="template">
        <img
          src="./components/icons/Button.png"
          alt="Play"
          style="
            width: 40rem;
            height: 15rem;
            margin: 0 auto;
            cursor: pointer;
            object-fit: contain;
          "
        />
        <span
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 6rem;
            color: white;
            font-family: 'YourHandwrittenFont', sans-serif;
          "
          @click="togglePlay"
        >
          PLAY
        </span>
      </div>
    </div>
  </div>

  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    style="background-image: url('/src/components/image/PlayBackground.png')"
    v-if="!play"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      v-show="gottenFish"
    >
      <!-- Modal Content -->
      <div
        class="p-8 rounded-2xl shadow-lg w-11/12 my-10 h-4/6 md:w-1/2 max-w-4xl text-center flex flex-col items-center"
        style="
          background-image: url('/src/components/image/SeaBackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        "
      >
        <!-- Header -->
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

        <!-- Image Container -->
        <div class="w-full h-1/2 flex items-center justify-center mt-8">
          <div
            class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md w-full h-10/12 mb-2"
          >
            <img
              src=""
              alt="Fish Image"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="bg-black text-white border-2 border-black rounded-lg w-1/2 p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-10"
        >
          Close
        </button>
      </div>
    </div>
    <div class="relative w-full">
      <img
        src="./components/icons/Back.png"
        alt="Bottom Image"
        class="fixed left-0 bottom-0 w-full object-contain"
      />

      <img
        src="./components/icons/front.png"
        alt="Top Image"
        class="fixed left-0 bottom-0 w-full object-contain"
        style="z-index: 1"
      />
      <!-- <div class="bottom-container"> -->
      <div
        class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-2 z-20"
      >
        <img
          src="./components/icons/Home.png"
          alt="Home"
          @click="togglePlay"
          class="w-20 ml-36"
        />
        <img
          src="./components/icons/Inventory.png"
          alt="Inventory"
          class="w-24"
        />
        <img
          src="./components/icons/Hook.png"
          alt="Hook"
          @click="hooking"
          class="w-32"
        />
        <img src="./components/icons/Shop.png" alt="Shop" class="w-28" />
        <img
          src="./components/icons/Bookmark.png"
          alt="Bookmark"
          class="w-28 mr-36"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

/* @font-face { font-family: "YourHandwrittenFont"; src:
url("/path/to/your/font-file.woff2") format("woff2"); } */
