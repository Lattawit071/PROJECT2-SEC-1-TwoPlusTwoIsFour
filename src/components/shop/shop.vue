<script setup>
import { ref,computed } from "vue";
import { usePlayerStore } from "../../stores/player.js";
import { useSoundStore } from '../../stores/sounds.js';
import Potion from "./potion.vue";
import Rod from "./rod.vue";
import toastNoti from "./toastNoti.vue";
import potion from "../../../data/potion.json"
import rods from "../../../data/rods.json"

const emit = defineEmits(['playHoverSound','togglePage'])
const store = usePlayerStore();
const soundStore = useSoundStore();
const url = import.meta.env.VITE_APP_URL

const playerCoins = computed(() => store.playerStore.coins);

function deductCoins(amount) {
  if (store.playerStore.coins >= amount) {
    store.playerStore.coins -= amount;
  } else {
  }
}

function addRod(rodId) {
  const rod = rods.find((rod) => rod.id === rodId);

  if (rod) {
    const existingRod = store.playerStore.ownedRods.find(
      (ownedRod) => ownedRod.id === rodId
    );

    if (!existingRod) {
      store.playerStore.ownedRods.push({
        ...rod,
        quantity: 1,
      });
      showToastMessage(rod);
    } else {
    }
  } else {
  }
}

const showToast = ref(false);
const selectedItem = ref({});
let timeoutId = null;
const showToastError = ref(false);
let errorTimeoutId = null;

function showToastErrorMessage() {
  showToastError.value = true;

  if (errorTimeoutId) {
    clearTimeout(errorTimeoutId);
  }

  errorTimeoutId = setTimeout(() => {
    showToastError.value = false;
  }, 4000);
}

function showToastMessage(item) {
  selectedItem.value = item;
  showToast.value = true;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    showToast.value = false;
  }, 4000);
}

function purchaseRods(item) {
  if (store.playerStore.coins >= item.price) {
    const existingRod = store.playerStore.ownedRods.find(
      (rod) => rod.id === item.id
    );

    if (!existingRod) {
      deductCoins(item.price);
      addRod(item.id);
      soundStore.playSuccessBuySound();
      store.updatePlayerState(url)
    }
  } else {
    soundStore.playFailBuySound();
    showToastErrorMessage();
  }
}

function addPotion(potionId) {

  const selectedPotion = potion.find((p) => p.id === potionId);
  if (selectedPotion) {
    const existingPotion = store.playerStore.potions.find(
      (p) => p.id === potionId
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(selectedPotion);
    } else {
      store.playerStore.potions.push({ ...selectedPotion, quantity: 1 });
      showToastMessage(selectedPotion);
    }
  }
}

function purchasePotion(item) {
  if (store.playerStore.coins >= item.price) {
    soundStore.playSuccessBuySound();
    showToastMessage(item);
    deductCoins(item.price);
    const existingPotion = store.playerStore.potions.find(
      (p) => p.id === item.id
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(item);
      store.updatePlayerState(url)
    } else {
      addPotion(item.id);
      store.updatePlayerState(url)
    }
  } else {
    soundStore.playFailBuySound();
    showToastErrorMessage();
  }
}
</script>

<template>
  <div class="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
    <button
      @mouseenter="$emit('playHoverSound')"
      @click="$emit('togglePage',5)"
      class="self-start mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
    >
      Back
    </button>
    <h1 class="text-5xl font-bold text-yellow-100 mb-6">SHOP</h1>
    <p class="text-yellow-100 mb-4">My coins : {{ playerCoins }}</p>
    <Rod
      :fishingRods="rods"
      @playHoverSound="soundStore.playHoverSound()"
      @purchaseRods="purchaseRods"
      :ownedRod="store.playerStore.ownedRods"
    />
    <Potion
      :potion="potion"
      @playHoverSound="soundStore.playHoverSound()"
      @purchasePotion="purchasePotion"
    />
  </div>
  <toastNoti :selectedItem="selectedItem" :showToast="showToast" :showToastError="showToastError" />

</template>

<style>
.bg-yellow-800 {
  background-color: #7b5e57;
}
.text-yellow-200 {
  color: #ffecb3;
}
.text-yellow-300 {
  color: #ffe082;
}
.text-yellow-100 {
  color: #fff9c4;
}
.bg-yellow-600 {
  background-color: #ffb74d;
}
</style>