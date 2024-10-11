<script setup>
import { ref, computed } from "vue";
import { usePlayerStore } from '../../stores/player.js';
const playerStore = usePlayerStore();
import ToastNoti from "./toastNoti.vue";
import FilterItems from "./FilterItems.vue";
import Items from "./Items.vue";
const emit = defineEmits(["playHoverSound", "togglePage"]);

console.log(playerStore)

const playHoverSound = () => {
  emit("playHoverSound");
};

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

let timeoutId = null;
</script>

<template>
  <div class="p-6 bg-gray-1000 min-h-screen flex">
    <div
      class="w-20 bg-gradient-to-b bg-gray-900 to-yellow-900 text-white flex flex-col items-center py-4 space-y-4 rounded-lg shadow-lg mr-3 p-3"
    >
      <button
        @mouseenter="$emit('playHoverSound')"
        @click="$emit('togglePage', 5)"
        class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Back
      </button>
      <FilterItems
        @playHoverSound="playHoverSound"
        @setCategory="setCategory"
      />
    </div>

    <ToastNoti
      :showToastInventory="showToastInventory"
      :toastMessage="toastMessage"
    />

    <div class="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg text-yellow-100">
      <h1 class="text-3xl font-bold mb-6">Inventory {{ nameInventory }}</h1>
      <p class="mb-4">Capacity {{ inventoryCapacity }}/{{ maxCapacity }}</p>

      <Items />
    </div>
  </div>
</template>

<style scoped>
.text-yellow-100 {
  color: #fff9c4;
}

.bg-gray-900 {
  background-color: #2b1b17;
}
</style>
