<script setup>
import mapData from "../../../data/map.json";
import { usePlayerStore } from "@/stores/player";

// ดึงข้อมูลผู้เล่นจาก store
const playerStore = usePlayerStore();
const emit = defineEmits(["close", "selectMap"]);

// ตรวจสอบว่าผู้เล่นปลดล็อกแมพหรือไม่
const unlockMap = (map) => {
  const playerLevel = playerStore.playerStore.level;
  return playerLevel >= map.level;
};

// ฟังก์ชันเลือกแมพ
const selectMap = (map) => {
  if (unlockMap(map)) {
    emit("selectMap", map); // ส่งข้อมูลของแมพกลับไปยัง parent
    emit("close"); // ปิด modal
  }
};
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-2/5">
      <h2 class="text-3xl font-bold text-center mb-6">Select Map</h2>
      <div class="grid grid-cols-2 gap-6">
        <div
          v-for="map in mapData"
          :key="map.name"
          :class="{
            'bg-gray-300 cursor-not-allowed': !unlockMap(map),
            'bg-blue-100 hover:bg-blue-500 hover:text-white cursor-pointer':
              unlockMap(map),
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
        </div>
      </div>
      <button
        @click="emit('close')"
        class="bg-red-500 text-white px-4 py-2 mt-6 rounded w-full"
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
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* แสดงเป็นตาราง 2 คอลัมน์ */
  gap: 1.5rem;
}
</style>
