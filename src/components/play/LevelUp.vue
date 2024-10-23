<script setup>
import { usePlayerStore } from '@/stores/player';
const player = usePlayerStore();
defineEmits(['closeLvlModal'])

</script>
 
<template>
<div class="fixed inset-0 flex items-center justify-center bg-gradient-to-b bg-opacity-80 bg-black z-50">
  <div class="bg-gray-900 rounded-lg shadow-2xl w-11/12 max-w-lg p-10 relative transform transition-transform duration-500 ease-in-out scale-105 hover:scale-110">
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="flex items-center justify-center space-x-4 mb-6">
      <div class="bg-gradient-to-r from-blue-500 to-teal-400 p-3 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 11l-4 4-4-4M9 11l-4 4-4-4m4-4l4 4 4-4M9 11l4 4" />
        </svg>
      </div>
      <h2 class="text-3xl font-extrabold text-blue-600 tracking-wide">Level Up!</h2>
    </div>
    
    <div class="text-center" v-if="player.playerStore.level%10!==0">
      <p class="text-gray-600 text-lg mb-4">You've reached <span class="text-blue-500 font-semibold">Level {{ player.playerStore.level }}</span>!</p>
      <p class="text-teal-600 font-bold text-xl mb-6">Continue your fishing adventure and discover new oceans!</p>
    </div>

    <div class="text-center" v-if="player.playerStore.level%10==0">
      <p class="text-gray-600 text-lg mb-4">You've reached <span class="text-blue-500 font-semibold">Level 10</span>!</p>
      <p class="text-teal-600 font-bold text-xl mb-6">You have unlock your new oceans now!!</p>
      <p class="text-teal-600 font-bold text-xl mb-6">Continue your fishing adventure and discover new oceans!</p>
    </div>

    <div class="mt-6 flex justify-center">
      <button class="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      @click="$emit('closeLvlModal')">
        Continue Fishing
      </button>
    </div>
  </div>
</div>


</template>
 
<style scoped>

</style>