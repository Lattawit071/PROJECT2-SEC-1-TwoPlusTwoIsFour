<script setup>
import { ref, computed } from "vue";
import { usePlayerStore } from "../../stores/player.js";
import { useSoundStore } from "../../stores/sounds.js";
import fishStore from "../../../data/fish.json";

import playerImg from "/images/image/Player.png";
import Basic_RodImg from "/images/rod/Basic_Rod.png";

const useplayerStore = usePlayerStore();
const usesoundStore = useSoundStore();

const selectFish = ref("common");

function filterFish(a, b) {
  return fishStore.filter((fish) => fish.id >= a && fish.id <= b);
}

function isFishInPlayerStore(fishId) {
  const highlightedFish = ref(new Set());
  if (
    useplayerStore.playerStore.caughtFish.some((fish) => fish.id === fishId)
  ) {
    highlightedFish.value.add(fishId);
    return true;
  }
  return highlightedFish.value.has(fishId);
}
</script>

<template>
  <div
    class="bg-gray-1000 w-screen h-screen fixed top-0 left-0 font-nonto overflow-scroll"
  >
    <div class="flex justify-center w-screen mt-8">
      <div
        class="header fade-up bg-gradient-to-b bg-gray-900 to-yellow-900 border-black w-[90%] md:w-[60%] min-w-[300px] rounded-lg shadow-lg p-6"
      >
        <button
          @mouseenter="$emit('playHoverSound')"
          @click="$emit('togglePage', 5)"
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

        <div class="bg-gray-900 flex gap-5 justify-evenly p-4 rounded-lg mb-6">
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

        <!-- Fish Display Based on Category -->
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
            <h3 class="text-blue-100 text-lg font-semibold">{{ fish.name }}</h3>
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
</template>

<style scoped>
.animated-svg {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: moveSideways 2s ease-in-out infinite;
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
</style>
