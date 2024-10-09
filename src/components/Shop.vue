<script setup>

const showToast = ref(false);
const selectedItem = ref({});
let timeoutId = null;
const showToastError = ref(false);
let errorTimeoutId = null;

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

function showToastErrorMessage() {
  showToastError.value = true;

  if (errorTimeoutId) {
    clearTimeout(errorTimeoutId);
  }

  errorTimeoutId = setTimeout(() => {
    showToastError.value = false;
  }, 4000);
}

function deductCoins(amount) {
  if (playerStore.value.coins >= amount) {
    playerStore.value.coins -= amount;
  } else {
  }
}

function addRod(rodId) {
  const rod = fishingRods.find((rod) => rod.id === rodId);

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
      quantity = 1;
      showToastMessage(selectedPotion);
    }
  }
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
</script>
<template>
<div
    class="p-6 bg-gray-900 min-h-screen flex flex-col items-center"
    v-if="page === 3"
  >
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
<style scoped>

</style>