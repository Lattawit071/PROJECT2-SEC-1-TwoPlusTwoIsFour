<script setup>
import { ref, computed } from "vue";
import { usePlayerStore } from "../../stores/player.js";
import { useSoundStore } from '../../stores/sounds.js';
import ToastNoti from "./toastNoti.vue";
import FilterItems from "./FilterItems.vue";
import Items from "./Items.vue";
defineEmits(['togglePage']);
const store = usePlayerStore();
const soundStore = useSoundStore();

const maxCapacity = 1000;
const selectedCategory = ref("all");
const showToastInventory = ref(false);
const toastMessage = ref("");
const nameInventory = ref("");

const setCategory = (category) => {
  selectedCategory.value = category;
};

const filteredItems = computed(() => {
  switch (selectedCategory.value) {
    case "fish":
      nameInventory.value = "Fish";
      return store.playerStore.caughtFish;
    case "rods":
      nameInventory.value = "Rods";
      return store.playerStore.ownedRods;
    case "potions":
      nameInventory.value = "Potions";
      return store.playerStore.potions;
    default:
      nameInventory.value = "All";
      return [
        ...store.playerStore.caughtFish,
        ...store.playerStore.ownedRods,
        ...store.playerStore.potions,
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
        @mouseenter="soundStore.playHoverSound()"
        @click="$emit('togglePage', 5)"
        class="mb-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Back
      </button>
      <FilterItems
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

      <Items :filteredItems="filteredItems" />
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
