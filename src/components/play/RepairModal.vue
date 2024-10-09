<script setup>
const props = defineProps({
  repair: {
    type: Boolean,
  },
  maxRodHp: {
    type: Number,
  },
  rodHp: {
    type: Number,
  },
});
defineEmits([
  "playHoverSound",
  "repairRod",
  "repairToggle",
]);
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
            {{ maxRodHp - rodHp }} HP for
            {{ (maxRodHp - rodHp) * 25 }}
            Coins
          </span>
        </div>

        <div class="flex justify-center items-center space-x-4">
          <button
            @mouseenter="$emit('playHoverSound')"
            @click="$emit('repairRod')"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
          >
            Repair
          </button>
          <button
            @mouseenter="$emit('playHoverSound')"
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
