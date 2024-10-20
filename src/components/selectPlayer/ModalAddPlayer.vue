<script setup>
import { ref } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const newPlayer = ref({
  name: "",
  coins: 0,
  level: 1,
  avatar: "",
  ownedRods: [],
  caughtFish: [],
  potions: [],
  usingRods: {},
  usingPotion: [],
});

const emit = defineEmits(["close", "refresh"]);

const handleAddPlayer = async () => {
  await playerStore.addPlayer(`${import.meta.env.VITE_APP_URL}`, newPlayer.value);
  emit("refresh"); // Refresh player list after adding
  emit("close"); // Close the modal
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h2 class="text-yellow-950 text-2xl font-bold mb-4">Add New Player</h2>
      <input v-model="newPlayer.name" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Player Name" />
      <input v-model.number="newPlayer.coins" type="number" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Coins" />
      <input v-model.number="newPlayer.level" type="number" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Level" />

      <div class="flex justify-end space-x-4 mt-4">
        <button @click="emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        <button @click="handleAddPlayer" class="bg-yellow-500 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>