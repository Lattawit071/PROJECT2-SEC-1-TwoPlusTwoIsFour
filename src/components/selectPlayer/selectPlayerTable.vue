<script setup>
import { ref, onMounted } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const playerList = ref([]);

const props = defineProps({
  playerList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["select", "openAddModal", "openEditModal", "refresh"]);

async function handleDeletePlayer(playerId) {
  try {
    const deletedId = await playerStore.deletePlayerById(
      `${import.meta.env.VITE_APP_URL}`,
      playerId
    );
    console.log(`Deleted player ID: ${deletedId}`);

    playerList.value = await playerStore.getAllPlayer(
      `${import.meta.env.VITE_APP_URL}`
    );
    emit("refresh");
  } catch (error) {
    console.error(`Failed to delete player: ${error}`);
  }
}
</script>

<template>
  <div
    class="h-28 grid grid-cols-12 font-semibold gap-4 py-3 rounded-t-3xl bg-gradient-to-r from-[#503828] via-[#6b4e3c] to-[#503828] shadow-xl overflow-hidden"
  >
    <div class="col-span-2 text-center flex justify-center items-center">
      <div
        class="bg-[#255cae] text-white rounded-full flex items-center justify-center text-3xl shadow-xl h-16 w-28 border-4 border-[#76a0e3]"
      >
        🐟
        <span class="ml-2 text-white text-2xl font-bold" style="font-family: 'Pacifico', cursive">No</span>
      </div>
    </div>

    <div class="col-span-4 flex items-center text-3xl text-white" style="font-family: 'Pacifico', cursive">
      Player Name
    </div>

    <div class="col-span-3 flex items-center text-3xl text-white" style="font-family: 'Pacifico', cursive">Level 🌊</div>

    <div class="col-span-3 flex items-center justify-center mr-16">
      <button
        @click="$emit('openAddModal')"
        class="bg-[#f0b41d] hover:bg-[#bc9030] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 flex items-center"
        style="font-family: 'Pacifico', cursive"
      >
        <svg class="pr-1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2z"/></svg>
        Add
      </button>
    </div>
  </div>

  <div
    class="grid grid-cols-12 items-center font-poppins gap-4 py-4 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 hover:from-blue-400 hover:via-blue-200 hover:to-blue-400 transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden"
    v-for="(player, index) in props.playerList"
    :key="index"
    @click="$emit('select', player)"
  >
    <div class="col-span-2 text-center flex justify-center items-center">
      <div
        class="bg-[#3c68ab] text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl shadow-md"
        style="font-family: 'Pacifico', cursive"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="col-span-4 text-[#244b86] hover:text-[#ffffff] text-2xl font-bold cursor-pointer" style="font-family: 'Pacifico', cursive">
      {{ player.playerStore.name }}
    </div>
    <div class="col-span-3 text-[#3c68ab] text-2xl font-semibold" style="font-family: 'Pacifico', cursive">
      {{ player.playerStore.level }} 🌟
    </div>

    <div class="col-span-3 flex justify-start space-x-4">
      <button
        @click.stop="$emit('openEditModal', player)"
        class="bg-[#757882] text-white rounded-lg px-3 py-1 font-bold hover:bg-yellow-500 transition-colors duration-200 flex items-center"
        style="font-family: 'Pacifico', cursive"
      >
        ✏️ Edit
      </button>

      <button
        @click.stop="handleDeletePlayer(player.playerStore.id)"
        class="bg-[#e35959] text-white rounded-lg px-3 py-1 font-bold hover:bg-red-600 transition-colors duration-200 flex items-center"
        style="font-family: 'Pacifico', cursive"
      >
        🗑️ Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
