<script setup>
const props = defineProps({
    potion:{
        type:Array
    }
})
defineEmits(['playHoverSound','purchasePotion'])

</script>

<template>
    <p class="text-3xl font-bold text-yellow-700 mb-6">Potion</p>
    <div class="grid grid-cols-3 gap-6 mb-6">
      <div
        v-for="potionItem in potion"
        :key="potionItem.id"
        class="bg-yellow-800 p-4 rounded-lg shadow-lg text-center"
      >
        <img
          :src="potionItem.icon"
          :alt="potionItem.name"
          class="mb-4 h-70 w-80"
        />
        <p class="text-yellow-100 font-bold">{{ potionItem.name }}</p>
        <p class="text-yellow-200">Price: {{ potionItem.price }} coins</p>
        <p class="text-yellow-300 text-sm">{{ potionItem.effect }}</p>
        <button
          @mouseenter="$emit('playHoverSound')"
          @click="$emit('purchasePotion',potionItem)"
          class="mt-4 bg-yellow-600 text-yellow-100 py-2 px-4 rounded hover:bg-yellow-500"
        >
          Buy
        </button>
      </div>
    </div>
</template>

<style>
.bg-yellow-800 {
  background-color: #7b5e57;
}
.text-yellow-200 {
  color: #ffecb3;
}
.text-yellow-300 {
  color: #ffe082;
}
.text-yellow-100 {
  color: #fff9c4;
}
.bg-yellow-600 {
  background-color: #ffb74d;
}
</style>