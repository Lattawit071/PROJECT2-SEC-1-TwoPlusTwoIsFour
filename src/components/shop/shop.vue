<script setup>
import Potion from "./potion.vue";
import Rod from "./rod.vue";
import toastNoti from "./toastNoti.vue";
import successBuySound from "/sound/cash-register-purchase-87313.mp3";
import failBuySound from "/sound/error-126627.mp3";
import potion from "../../../data/potion.json"
import rods from "../../../data/rods.json"
import { ref,computed } from "vue";
import playerImg from "/images/image/Player.png";
import Basic_RodImg from "/images/rod/Basic_Rod.png";

const playerName = ref("int203");
const playerStore = ref({
  id: 1,
  name: playerName.value,
  coins: 100000,
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

const props = defineProps({
  isSfxOn:{
    type:Boolean
  }
})

const playerCoins = computed(() => playerStore.value.coins);

function deductCoins(amount) {
  if (playerStore.value.coins >= amount) {
    playerStore.value.coins -= amount;
  } else {
  }
}

function addRod(rodId) {
  const rod = rods.find((rod) => rod.id === rodId);

  if (rod) {
    const existingRod = playerStore.value.ownedRods.find(
      (ownedRod) => ownedRod.id === rodId
    );

    if (!existingRod) {
      playerStore.value.ownedRods.push({
        ...rod,
        quantity: 1,
      });
      showToastMessage(rod);
    } else {
    }
  } else {
  }
}

function playSuccessBuySound() {
  if (props.isSfxOn) {
    sounds.successBuy.currentTime = 0;
    sounds.successBuy.play();
  }
}

function playFailBuySound() {
  if (props.isSfxOn) {
    sounds.failBuy.playbackRate = 1.5;
    sounds.failBuy.play();
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
  if (playerStore.value.coins >= item.price) {
    const existingRod = playerStore.value.ownedRods.find(
      (rod) => rod.id === item.id
    );

    if (!existingRod) {
      deductCoins(item.price);
      addRod(item.id);
      playSuccessBuySound();
    } else {
    }
  } else {
    playFailBuySound();
    showToastErrorMessage();
  }
}

function addPotion(potionId) {

  const selectedPotion = potion.find((p) => p.id === potionId);
  if (selectedPotion) {
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === potionId
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(selectedPotion);
    } else {
      playerStore.value.potions.push({ ...selectedPotion, quantity: 1 });
      showToastMessage(selectedPotion);
    }
  }
}

function purchasePotion(item) {
  if (playerStore.value.coins >= item.price) {
    playSuccessBuySound();
    showToastMessage(item);
    deductCoins(item.price);
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === item.id
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(item);
    } else {
      addPotion(item.id);
    }
  } else {
    playFailBuySound();
    showToastErrorMessage();
  }
}


const sounds = {
  successBuy: new Audio(successBuySound),
  failBuy: new Audio(failBuySound)
}

const playHoverSound = () => {
  emit('playHoverSound')
}

const emit = defineEmits(['playHoverSound','togglePage'])
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
      @playHoverSound="playHoverSound"
      @purchaseRods="purchaseRods"
      :ownedRod="playerStore.ownedRods"
    />
    <Potion
      :potion="potion"
      @playHoverSound="playHoverSound"
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