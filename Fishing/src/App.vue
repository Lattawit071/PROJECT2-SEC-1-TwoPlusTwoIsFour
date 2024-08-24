<script scope>
// Data Store for Fish
const fishStore = [
  { id: 1, name: 'Salmon', price: 100 },
  { id: 2, name: 'Tuna', price: 150 },
  { id: 3, name: 'Trout', price: 90 },
  { id: 4, name: 'Catfish', price: 80 },
  { id: 5, name: 'Bass', price: 120 },
  { id: 6, name: 'Carp', price: 70 },
  { id: 7, name: 'Pike', price: 110 },
  { id: 8, name: 'Cod', price: 130 },
  { id: 9, name: 'Herring', price: 60 },
  { id: 10, name: 'Perch', price: 85 },
  { id: 11, name: 'Swordfish', price: 200 },
  { id: 12, name: 'Eel', price: 75 },
  { id: 13, name: 'Mackerel', price: 95 },
  { id: 14, name: 'Sardine', price: 50 },
  { id: 15, name: 'Grouper', price: 140 },
  { id: 16, name: 'Snapper', price: 125 },
  { id: 17, name: 'Flounder', price: 100 },
  { id: 18, name: 'Halibut', price: 160 },
  { id: 19, name: 'Barracuda', price: 180 },
  { id: 20, name: 'Marlin', price: 220 }
];

// Data Store for Fishing Rods
const fishingRods = [
  { id: 1, name: 'Basic Rod', price: 100 },
  { id: 2, name: 'Advanced Rod', price: 500 },
  { id: 3, name: 'Pro Rod', price: 1000 }
];

// Data Store for Fishing Rod Enhancements
const rodEnhancements = [
  { id: 1, name: 'Stronger Line', price: 200, effect: 'Increases fish catch rate by 10%' },
  { id: 2, name: 'Sharper Hook', price: 300, effect: 'Increases fish catch chance by 15%' },
  { id: 3, name: 'Durable Rod', price: 400, effect: 'Reduces rod wear and tear by 20%' },
  { id: 4, name: 'Lightweight Reel', price: 250, effect: 'Decreases fatigue during long fishing sessions' },
  { id: 5, name: 'Enhanced Bait', price: 150, effect: 'Attracts rare fish with a 5% higher probability' }
];

// Function to get a fish by ID
function getFishById(id) {
  return fishStore.find(fish => fish.id === id);
}

// Function to get a fishing rod by ID
function getRodById(id) {
  return fishingRods.find(rod => rod.id === id);
}

// Function to get a rod enhancement by ID
function getRodEnhancementById(id) {
  return rodEnhancements.find(enhancement => enhancement.id === id);
}

// Data Store for Players
const playerStore = {
  id: 1, // Unique ID for the player
  name: 'Player1', // Player's name
  coins: 1000, // Amount of coins the player has
  ownedRods: [], // Array to store fishing rods owned by the player
  caughtFish: [], // Array to store the fish caught by the player
  enhancements: [] // Array to store enhancements owned by the player
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

// Example Usage
addCoins(500); // Add 500 coins to the player
deductCoins(300); // Deduct 300 coins from the player
addRod(1); // Add the Basic Rod to the player's inventory
addCaughtFish(4); // Add Catfish to the player's caught fish list
addEnhancement(2); // Add the Sharper Hook enhancement to the player's inventory

console.log(playerStore);

import { ref } from "vue";

export default {
  setup() {
    const play = ref(true);
    const playPage = () => {
      play.value = false;
    };

    return {
      play,
      playPage,
    };
  },
};
</script>

<template>
  <div class="main-container" v-if="play">
    <!-- Top Left Button -->
    <div style="position: absolute; top: 1rem; left: 1rem;">
      <img @click="openSettings" src="./components/icons/Setting.png" alt="Settings" style="width: 15rem; height: 15rem; cursor: pointer; object-fit: contain;">
    </div>
    <!-- Top Right Button -->
    <div style="position: absolute; top: 1rem; right: 1rem;">
      <img @click="openHelp" src="./components/icons/Question.png" alt="Help" style="width: 15rem; height: 15rem; cursor: pointer; object-fit: contain;">
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
        fish for life
      </div>
      <div style="position: relative; display: inline-block;" class="template">
        <img @click="playGame" src="./components/icons/Button.png" alt="Play" style="width: 40rem; height: 15rem; margin: 0 auto; cursor: pointer; object-fit: contain;">
        <span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 6rem; color: white; font-family: 'YourHandwrittenFont', sans-serif;">
          PLAY
        </span>
      </div>
    </div>
  </div>

  <div class="play-container" v-if="!play">
    <div class="bottom-image">
      <img
        src="./components/icons/RectangleBack.png"
        alt="Bottom Image"
        class="bottom-image-item"
      />
      <img
        src="./components/icons/RectangleFront.png"
        alt="Top Image"
        class="top-image-item"
      />
      <div class="bottom-container">
        <img src="./components/icons/Home.png" alt="Home" />
        <img src="./components/icons/Inventory.png" alt="Home" />
        <img src="./components/icons/Hook.png" alt="Home" />
        <img src="./components/icons/Shop.png" alt="Home" />
        <img src="./components/icons/Bookmark.png" alt="Home" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("./components/image/Background.png"); /* เปลี่ยน path ของรูปตามที่ต้องการ */
  background-size: cover; /* ปรับขนาดให้รูปภาพครอบคลุมทั้ง background */
  background-position: center; /* ปรับให้รูปอยู่ตรงกลาง */
  position: relative;
}
.play-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("./components/image/PlayBackground.png"); /* เปลี่ยน path ของรูปตามที่ต้องการ */
  background-size: cover; /* ปรับขนาดให้รูปภาพครอบคลุมทั้ง background */
  background-position: center; /* ปรับให้รูปอยู่ตรงกลาง */
  position: relative;
}

.bottom-image {
  position: relative; /* Relative positioning to allow for absolute positioning of children */
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
}

.bottom-image-item,
.top-image-item {
  position: fixed; /* Absolute positioning to stack images */
  left: 0;
  bottom: 0;
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure the image fits within the container */
}

.top-image-item {
  /* Adjust z-index if needed to control stacking order */
  z-index: 1; /* Make sure it is on top of the bottom image */
}

.bottom-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; /* Full viewport width */
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  align-items: center; /* Center images vertically */
  padding: 0 2rem; /* Add horizontal padding to avoid images touching edges */
  box-sizing: border-box; /* Include padding in width calculations */
  z-index: 2;
}

.bottom-container img {
  max-width: 20%; /* Adjust based on the number of images */
  height: auto; /* Maintain aspect ratio */
}

@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
}
</style>
