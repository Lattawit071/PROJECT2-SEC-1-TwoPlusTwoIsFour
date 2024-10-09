<script setup>
import { ref } from "vue";
import fishStore from "../../../data/fish.json";
import playerImg from "/images/image/Player.png";
import Basic_RodImg from "/images/rod/Basic_Rod.png";
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
sounds.backgroundMusic.volume = 0.1;
sounds.hover.volume = 0.09;
sounds.successBuy.volume = 0.4;
sounds.getFish.volume = 0.4;
sounds.failGetFish.volume = 0.4;
sounds.hookFish.volume = 0.5;
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

function toggleSfx() {
  isSfxOn.value = !isSfxOn.value;
}

const playerName = ref("int203");
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
const props = defineProps({});
defineEmits([
  "playHoverSound",
  "togglePage",
  "hook",
  "repairToggle",
  "page",
  "saveSettings",
]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
    >
      <h2 class="text-2xl font-bold mb-4">Settings</h2>

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

      <div class="flex justify-end space-x-4">
        <button
          @mouseenter="$emit('playHoverSound')"
          @click="$emit('saveSettings')"
          class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-message-error {
  color: #c62828;
  font-weight: bold;
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
</style>
