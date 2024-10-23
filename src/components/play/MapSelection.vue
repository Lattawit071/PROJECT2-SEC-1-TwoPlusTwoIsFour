<script setup>
import mapData from "../../../data/map.json";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore(); // ดึงข้อมูล player
const emit = defineEmits(["close", "selectMap"]);

const unlockMap = (map) => {
  const playerLevel = playerStore.playerStore.level;
  return playerLevel >= map.level;
};

const selectMap = (map) => {
  if (unlockMap(map)) {
    emit("selectMap", map.name);
    emit("close");
  }
};
</script>
<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h2 class="text-2xl font-bold text-center mb-4">Select Map</h2>
      <ul class="space-y-4">
        <li
          v-for="map in mapData"
          :key="map.name"
          :class="{
            'text-gray-500 cursor-not-allowed': !unlockMap(map),
            'hover:bg-blue-500 hover:text-white cursor-pointer': unlockMap(map),
          }"
          @click="selectMap(map)"
        >
          <img
            :src="map.icon"
            alt="map icon"
            class="inline-block w-8 h-8 mr-2"
          />
          {{ map.name }} - Level: {{ map.level }}
        </li>
      </ul>
      <button
        @click="emit('close')"
        class="bg-red-500 text-white px-4 py-2 mt-4 rounded w-full"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  z-index: 50;
}
</style>
