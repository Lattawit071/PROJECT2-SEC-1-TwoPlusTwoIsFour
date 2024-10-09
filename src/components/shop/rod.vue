<script setup>
const props = defineProps({
    fishingRods:{
        type:Array
    },
    ownedRod:{
        type:Array
    }
})
defineEmits(['playHoverSound','purchaseRods'])
</script>

<template>
    <p class="text-3xl font-bold text-yellow-700 mb-6">Rod</p>
    <div class="grid grid-cols-3 gap-6 mb-6">
      <div
        v-for="rod in fishingRods"
        :key="rod.id"
        class="bg-yellow-800 p-4 rounded-lg shadow-lg text-center"
      >
        <img :src="rod.icon" :alt="rod.name" class="mb-4 h-70 w-80" />
        <p class="text-yellow-100 font-bold">{{ rod.name }}</p>
        <p class="text-yellow-200">Price: {{ rod.price }} coins</p>
        <p>
          {{
            ownedRod?.find((ownedRod) => ownedRod.id === rod.id)
              ? "Rod owned"
              : "Rod not owned"
          }}
        </p>
        <button
          @mouseenter="$emit('playHoverSound')"
          :disabled="
            ownedRod?.find((ownedRod) => ownedRod.id === rod.id)
          "
          @click="$emit('purchaseRods',rod)"
          class="mt-4 text-yellow-100 py-2 px-4 rounded"
          :class="{
            'bg-gray-500 cursor-not-allowed': ownedRod?.find(
              (ownedRod) => ownedRod.id === rod.id
            ),
            'bg-yellow-600 hover:bg-yellow-500': !ownedRod?.find(
              (ownedRod) => ownedRod.id === rod.id
            ),
          }"
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