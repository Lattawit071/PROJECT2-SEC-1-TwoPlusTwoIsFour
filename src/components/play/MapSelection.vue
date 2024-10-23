<script setup>
import mapData from "../../../data/map.json";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const emit = defineEmits(["close", "selectMap"]);

const unlockMap = (map) => {
  const playerLevel = playerStore.playerStore.level;
  return playerLevel >= map.level;
};


const selectMap = (map) => {
  if (unlockMap(map)) {
    emit("selectMap", map); 
    emit("close");
  }
};
</script>

<template>
  <transition name="fade">
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-gray-900 p-8 rounded-lg shadow-lg w-2/5">
        <h2 class="text-white text-3xl font-bold text-center mb-6">Select Map</h2>
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="map in mapData"
            :key="map.name"
            :class="{
              'bg-gray-300 cursor-not-allowed': !unlockMap(map),
              'bg-blue-100 hover:bg-gray-500 hover:text-white cursor-pointer': unlockMap(map),
            }"
            class="flex items-center justify-between p-4 rounded-lg shadow-md transition-all duration-300"
            @click="unlockMap(map) && selectMap(map)"
          >
            <div class="flex items-center">
              <img :src="map.icon" alt="map icon" class="w-12 h-12 mr-4" />
              <div>
                <h3 class="text-lg font-bold">{{ map.name }}</h3>
                <p class="text-sm text-gray-600">Level: {{ map.level }}</p>
              </div>
            </div>
            <p
              v-if="!unlockMap(map)"
              class="text-xs text-red-500"
              title="Level {{ map.level }} required"
            >
              Locked
            </p>
          </div>
        </div>
        <button
          @click="emit('close')"
          class="bg-yellow-500 text-white px-4 py-2 mt-6 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to A{
  opacity: 0;
}

.fixed {
  z-index: 50;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
</style>
