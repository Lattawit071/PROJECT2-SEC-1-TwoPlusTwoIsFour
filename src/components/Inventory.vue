<script setup>
const maxCapacity = 1000;
const selectedCategory = ref("all");
const potionTimers = {};
const showToastInventory = ref(false);
const toastMessage = ref("");
const toastClass = ref("");
const nameInventory = ref("");

function showToastInventoryMessage(message, type) {
  toastMessage.value = message;
  toastClass.value = type === "success" ? "bg-green-500" : "bg-red-500";
  showToastInventory.value = true;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    showToastInventory.value = false;
  }, 4000);
}

const setCategory = (category) => {
  selectedCategory.value = category;
};

function isFish(item) {
  return item.type === "fish";
}

function isRod(item) {
  return item.type === "rod";
}

function isPotion(item) {
  return item.type === "potion";
}

const filteredItems = computed(() => {
  switch (selectedCategory.value) {
    case "fish":
      return (nameInventory.value = "Fish"), playerStore.value.caughtFish;
    case "rods":
      return (nameInventory.value = "Rods"), playerStore.value.ownedRods;
    case "potions":
      return (nameInventory.value = "Potions"), playerStore.value.potions;
    default:
      nameInventory.value = "All";
      return [
        ...playerStore.value.caughtFish,
        ...playerStore.value.ownedRods,
        ...playerStore.value.potions,
      ];
  }
});

const inventoryCapacity = computed(() => {
  return filteredItems.value.reduce((acc, item) => acc + item.quantity, 0);
});

function sellFishAll(fish) {
  playerStore.value.coins += fish.price * fish.quantity;
  playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
    (f) => f.id !== fish.id
  );
  showToastInventoryMessage(`Sold all ${fish.name}`, "success");
  playSellSuccessSound();
}

function sellFish(fish) {
  playerStore.value.coins += fish.price;
  fish.quantity -= 1;

  if (fish.quantity === 0) {
    playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
      (f) => f.id !== fish.id
    );
  }

  showToastInventoryMessage(`Sold 1 ${fish.name}`, "success");
  playSellSuccessSound();
}

function equipRod(rod) {
  playUseRodSound();
  playerStore.value.usingRods = rod;
  showToastInventoryMessage(`Equipped ${rod.name}`, "success");
}

function usePotion(potion) {
  playUsePotionSound();
  let existingPotion = playerStore.value.usingPotion.find(
    (p) => p.id === potion.id
  );

  if (!existingPotion) {
    playerStore.value.usingPotion.push({
      ...potion,
      remainingTime: potion.duration,
      startTime: Date.now(),
    });
    existingPotion = playerStore.value.usingPotion.find(
      (p) => p.id === potion.id
    );
  } else {
    const elapsedTimed = (Date.now() - existingPotion.startTime) / 1000;
    existingPotion.remainingTime = Math.max(
      existingPotion.remainingTime - elapsedTimed + potion.duration,
      0
    );
    existingPotion.setTimeout = Date.now();
  }

  if (potionTimers[potion.id]) {
    clearTimeout(potionTimers[potion.id]);
  }

  potionTimers[potion.id] = setTimeout(() => {
    playerStore.value.usingPotion = playerStore.value.usingPotion.filter(
      (p) => p.id !== potion.id
    );
    delete potionTimers[potion.id];
  }, playerStore.value.usingPotion.find((p) => p.id === potion.id).remainingTime * 1000);

  if (potion.quantity > 1) {
    potion.quantity -= 1;
  } else {
    playerStore.value.potions = playerStore.value.potions.filter(
      (p) => p.id !== potion.id
    );
  }
  showToastInventoryMessage(`Used ${potion.name}`, "success");
}
</script>
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
<style scoped>

</style>