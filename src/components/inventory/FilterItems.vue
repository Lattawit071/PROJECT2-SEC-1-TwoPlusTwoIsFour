<script setup>
import { useSoundStore } from "../../stores/sounds.js";
const soundStore = useSoundStore()
defineEmits(['setCategory'])

</script>

<template>
  <button
    @mouseenter="soundStore.playHoverSound()"
    @click="$emit('setCategory', 'all')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/inventory/All.png" alt="All" />
  </button>
  <button
    @mouseenter="soundStore.playHoverSound()"
     @click="$emit('setCategory', 'fish')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/inventory/Fish.png" alt="Fish" />
  </button>
  <button
     @mouseenter="soundStore.playHoverSound()"
     @click="$emit('setCategory', 'rods')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/inventory/Rods.png" alt="Rods" />
  </button>
  <button
     @mouseenter="soundStore.playHoverSound()"
     @click="$emit('setCategory', 'potions')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/inventory/Potion.png" alt="potions" />
  </button>
</template>

<style scoped></style>
