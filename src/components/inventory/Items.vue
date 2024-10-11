<script setup>
import ActionButton from "./ActionButton.vue";

const props = defineProps({
  filteredItems: Array,
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="(item, index) in filteredItems"
      :key="index"
      class="relative p-4 bg-yellow-800 border border-yellow-400 rounded-lg hover:border-yellow-300"
    >
      <img :src="item.icon" :alt="item.name" class="mb-2 h-20 w-20 mx-auto" />
      <p class="text-center font-semibold">{{ item.name }}</p>
      <span
        class="absolute top-0 right-0 bg-red-600 text-white text-sm rounded-full px-2"
      >
        x{{ item.quantity }}
      </span>

      <ActionButton
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped>
.bg-gray-1000 {
  background-color: #160a06;
}

.bg-yellow-800 {
  background-color: #7b5e57;
}

.text-yellow-100 {
  color: #fff9c4;
}
</style>
