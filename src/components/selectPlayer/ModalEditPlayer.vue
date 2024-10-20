<script setup>
import { ref, watch } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const editPlayerData = ref({});

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
});

watch(
  () => props.player,
  (newValue) => {
    editPlayerData.value = { ...newValue };
  },
  { immediate: true }
);

const emit = defineEmits(["close", "refresh"]);

const handleEditPlayer = async () => {
  await playerStore.editPlayer(`${import.meta.env.VITE_APP_URL}`, editPlayerData.value.id, editPlayerData.value);
  emit("refresh");
  emit("close"); 
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h2 class="text-yellow-950 font-bold text-2xl mb-4">Edit Player</h2>
      <input v-model="editPlayerData.name" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Player Name" />
      <input v-model.number="editPlayerData.coins" type="number" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Coins" />
      <input v-model.number="editPlayerData.level" type="number" class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2" placeholder="Level" />

      <div class="flex justify-end space-x-4 mt-4">
        <button @click="emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        <button @click="handleEditPlayer" class="bg-yellow-500 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
