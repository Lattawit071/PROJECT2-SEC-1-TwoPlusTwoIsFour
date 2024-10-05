<template>
  <div v-if="page === 4">
    <div class="bg-gray-1000 w-screen h-screen fixed top-0 left-0 font-nonto overflow-scroll">
      <div class="flex justify-center w-screen mt-8">
        <div class="header fade-up bg-gradient-to-b bg-gray-900 to-yellow-900 border-black w-[90%] md:w-[60%] min-w-[300px] rounded-lg shadow-lg p-6">
          <button
            @mouseenter="playHoverSound"
            @click="togglePage(5)"
            class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
          >
            Back
          </button>

          <div class="mb-6">
            <p class="text-3xl font-bold text-center text-yellow-100 bg-gray-900 py-4 rounded-t-lg">
              Achievement
            </p>
          </div>

          <div class="bg-gray-900 flex gap-5 justify-evenly p-4 rounded-lg mb-6">
            <div class="relative inline-block w-full md:w-1/3">
              <p class="text-center text-lg text-yellow-100 mb-2">Fish Category</p>
              <select
                v-model="selectFish"
                class="block appearance-none w-full bg-yellow-100 border border-yellow-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-md hover:bg-yellow-100 focus:outline-none transition duration-300 cursor-pointer"
              >
                <option value="common">Common</option>
                <option value="rare">Rare</option>
                <option value="Legendary">Legendary</option>
                <option value="Secret">Secret</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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

          <div v-show="selectFish === 'common'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <h3 class="text-green-900 text-lg font-semibold">{{ fish.name }}</h3>
              <p class="text-green-900">${{ fish.price }}</p>
            </div>
          </div>

          <div v-show="selectFish === 'rare'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
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

          <div v-show="selectFish === 'Legendary'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <h3 class="text-yellow-900 text-lg font-semibold">{{ fish.name }}</h3>
              <p class="text-yellow-800">${{ fish.price }}</p>
            </div>
          </div>

          <div v-show="selectFish === 'Secret'" class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <h3 class="text-yellow-100 text-lg font-semibold">{{ fish.name }}</h3>
              <p class="text-yellow-200">${{ fish.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const page = inject("page");
const playHoverSound = inject("playHoverSound");
const togglePage = inject("togglePage");
const selectFish = inject("selectFish");
const filterFish = inject("filterFish");
const isFishInPlayerStore = inject("isFishInPlayerStore");
</script>

<style scoped>
.bg-gray-1000 {
  background-color: #160a06;
}

.green-gradient-bg {
  background: linear-gradient(270deg, #a8e6cf, #dcedc1, #f6ffed, #dcedc1, #a8e6cf);
  background-size: 600% 600%;
  animation: greenGradient 10s ease infinite;
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

.blue-gradient-bg {
  background: linear-gradient(270deg, #89cff0, #a0d8f1, #c9ebf6, #a0d8f1, #89cff0);
  background-size: 600% 600%;
  animation: blueGradient 10s ease infinite;
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

.pastel-red-gradient-bg {
  background: linear-gradient(270deg, #ffc1c1, #ffb6c1, #ffd1dc, #ffaaaa, #ffc1c1);
  background-size: 400% 400%;
  animation: pastelRedGradient 10s ease infinite;
  border-radius: 15px;
  border: 4px solid transparent;
  padding: 10px;
  transition: transform 0.3s ease;
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

.hologram-bg {
  background: linear-gradient(270deg, #ffb3ff, #b3ffff, #b3ffb3, #ffb3b3, #b3b3ff);
  background-size: 400% 400%;
  animation: hologramBackground 15s ease infinite;
  border-radius: 15px;
  padding: 10px;
  border: 4px solid transparent;
  border-image: linear-gradient(45deg, #ffb3ff, #b3ffff, #b3ffb3, #ffb3b3, #b3b3ff) 1;
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
</style>
