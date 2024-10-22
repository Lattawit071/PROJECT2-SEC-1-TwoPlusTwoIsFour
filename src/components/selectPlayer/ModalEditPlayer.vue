<script setup>
import { ref, watch } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const editPlayerName = ref("");

const props = defineProps({
  player: {
    type: Object,
    required: true,
  },
});

watch(
  () => props.player,
  (newValue) => {
    editPlayerName.value = newValue.playerStore.name;
  },
  { immediate: true }
);

const emit = defineEmits(["close", "refresh"]);

const handleEditPlayer = async () => {
  const updatedPlayer = { ...props.player };
  updatedPlayer.playerStore.name = editPlayerName.value;

  try {
    await playerStore.editPlayerById(
      `${import.meta.env.VITE_APP_URL}`,
      updatedPlayer.id,
      updatedPlayer
    );
    emit("refresh");
    emit("close");
  } catch (error) {
    console.error("Failed to edit player:", error);
  }
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h2 class="text-yellow-950 font-bold text-2xl mb-4">Edit Player</h2>
      <input
        v-model="editPlayerName"
        class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2"
        placeholder="Player Name"
      />
      <div class="flex justify-end space-x-4 mt-4">
        <button @click="emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
        <button @click="handleEditPlayer" class="bg-yellow-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
