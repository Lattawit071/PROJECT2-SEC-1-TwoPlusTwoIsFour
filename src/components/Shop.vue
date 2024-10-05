<template>
  <div class="p-6 bg-gray-900 min-h-screen flex flex-col items-center" v-if="page === 3">
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
</template>

<script setup>
import { inject } from "vue";

const page = inject("page");
const playHoverSound = inject("playHoverSound");
const togglePage = inject("togglePage");
const fishingRods = inject("fishingRods");
const potion = inject("potion");
const playerStore = inject("playerStore");
const purchaseRods = inject("purchaseRods");
const purchasePotion = inject("purchasePotion");
const showToast = inject("showToast");
const showToastError = inject("showToastError");
const selectedItem = inject("selectedItem");
const playerCoins = inject("playerCoins");
</script>

<style scoped>
.bg-yellow-800 {
  background-color: #7b5e57;
}
.bg-gray-900 {
  background-color: #2b1b17;
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
  z-index: 1000;
  max-width: 250px;
  font-size: 14px;
  text-align: center;
}

.toast-message-error {
  color: #c62828;
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
</style>
