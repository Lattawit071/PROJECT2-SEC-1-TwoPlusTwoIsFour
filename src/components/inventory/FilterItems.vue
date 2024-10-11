<script setup>
defineEmits(['playHoverSound', 'setCategory'])

</script>

<template>
  <button
    @mouseenter="$emit('playHoverSound')"
    @click="$emit('setCategory', 'all')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/images/inventory/All.png" alt="All" />
  </button>
  <button
    @mouseenter="$emit('playHoverSound')"
     @click="$emit('setCategory', 'fish')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/images/inventory/Fish.png" alt="Fish" />
  </button>
  <button
     @mouseenter="$emit('playHoverSound')"
     @click="$emit('setCategory', 'rods')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/images/inventory/Rods.png" alt="Rods" />
  </button>
  <button
     @mouseenter="$emit('playHoverSound')"
     @click="$emit('setCategory', 'potions')"
    class="w-12 h-12 flex items-center justify-center hover:bg-yellow-500 rounded-full"
  >
    <img src="/images/inventory/Potion.png" alt="potions" />
  </button>
</template>

<style scoped></style>
