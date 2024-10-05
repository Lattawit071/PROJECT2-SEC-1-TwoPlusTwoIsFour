<template>
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
</template>

<script setup>
import { inject } from "vue";

const page = inject("page");
const filteredItems = inject("filteredItems");
const nameInventory = inject("nameInventory");
const inventoryCapacity = inject("inventoryCapacity");
const maxCapacity = inject("maxCapacity");
const sellFish = inject("sellFish");
const sellFishAll = inject("sellFishAll");
const equipRod = inject("equipRod");
const usePotion = inject("usePotion");
const playHoverSound = inject("playHoverSound");
const togglePage = inject("togglePage");
const setCategory = inject("setCategory");
const isFish = inject("isFish");
const isRod = inject("isRod");
const isPotion = inject("isPotion");
const showToastInventory = inject("showToastInventory");
const toastMessage = inject("toastMessage");
</script>

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
.toast-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(45deg, #a8e6cf, #dcedc1, #f6ffed, #dcedc1, #a8e6cf);
  background-size: 200%;
  animation: pastel-border 3s linear infinite, slideUpFadeIn 0.5s ease;
  z-index: 1000;
  max-width: 250px;
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
</style>
