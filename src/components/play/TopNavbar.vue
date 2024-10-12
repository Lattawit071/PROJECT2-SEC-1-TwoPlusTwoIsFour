<script setup>
import { usePlayerStore } from "@/stores/player";
import { useSoundStore } from "@/stores/sounds";
import { computed } from "vue";
const sound = useSoundStore();
const player = usePlayerStore();
const rodHpPercentage = computed(() => {
  const maxHp = player.playerStore.usingRods.maxHp;
  return (player.playerStore.usingRods.hp / maxHp) * 100;
});
defineEmits(["repairToggle"]);
</script>
<template>
<div
    class="absolute top-0 left-0 p-4 z-20 w-full bg-gray-900 bg-opacity-80 shadow-lg text-white flex items-center justify-between space-x-8"
  >
    <div class="flex items-center space-x-4">
      <img
        :src="player.playerStore.avatar"
        alt="Player Avatar"
        class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-500"
      />
      <div>
        <p class="text-lg font-semibold md:text-xl">{{ player.playerStore.name }}</p>
        <p class="text-sm md:text-base">Coins: {{ player.playerStore.coins }}</p>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p class="text-sm md:text-base font-semibold">Active Potions</p>
      <div class="flex space-x-2">
        <img
          v-for="potion in player.playerStore.potions"
          :src="potion.icon"
          alt="Potion"
          class="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p class="text-sm md:text-base font-semibold">Using Rod</p>
      <div class="flex items-center space-x-2">
        <img
          :src="player.playerStore.usingRods.icon"
          alt="Rod"
          class="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-1/3">
      <p class="text-sm md:text-base font-semibold">Rod HP</p>
      <div class="w-full bg-gray-800 rounded-full h-4">
        <div
          class="bg-green-500 h-4 rounded-full"
          :style="{ width: rodHpPercentage + '%' }"
        ></div>
      </div>
      <p class="text-xs text-right mt-1">HP: {{ player.playerStore.usingRods.hp }}</p>
    </div>
    <button
      v-if="player.playerStore.usingRods.hp < player.playerStore.usingRods.maxHp"
      @mouseenter="sound.playHoverSound()"
      @click="$emit('repairToggle')"
      class="fixed right-3 top-32 bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-500 transition-transform transform hover:scale-110"
    >
      Repair Rod
    </button>
  </div>
</template>
<style>
.bg-gray-1000 {
  background-color: #160a06;
}

.text-yellow-100 {
  color: #fff9c4;
}

.bg-gray-900 {
  background-color: #2b1b17;
}

.bg-yellow-600 {
  background-color: #ffb74d;
}
</style>