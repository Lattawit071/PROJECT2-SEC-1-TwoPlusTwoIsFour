<script setup>
const props = defineProps({
  repair: {
    type: Boolean,
  }
})

defineEmits([
  "repairRod",
  "repairToggle",
]);

import { usePlayerStore } from "@/stores/player";
import { useSoundStore } from "@/stores/sounds";
const sound = useSoundStore();
const player = usePlayerStore();
</script>

<template>
  <transition name="fade">
    <div
      v-if="repair"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
      >
        <h2 class="text-2xl font-bold mb-4">Repair Rod</h2>
        <p class="mb-6">Would you like to repair your rod?</p>

        <div class="flex justify-center items-center mb-4">
          <span class="text-lg font-bold">
            Repair
            {{ player.playerStore.usingRods.maxHp - player.playerStore.usingRods.hp }} HP for
            {{ (player.playerStore.usingRods.maxHp - player.playerStore.usingRods.hp) * 25 }}
            Coins
          </span>
        </div>

        <div class="flex justify-center items-center space-x-4">
          <button
            @mouseenter="sound.playHoverSound()"
            @click="$emit('repairRod')"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
          >
            Repair
          </button>
          <button
            @mouseenter="sound.playHoverSound()"
            @click="$emit('repairToggle')"
            class="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.bg-gray-900 {
  background-color: #2b1b17;
}
</style>
