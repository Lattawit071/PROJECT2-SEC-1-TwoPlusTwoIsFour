<script setup>
const props = defineProps({
    playerList: {
        type: Array
    }
})
defineEmits(['select'])
</script>
<template>
  <div
    class="h-28 grid grid-cols-12 font-poppins font-semibold gap-4 py-3 text-blue-900 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 shadow-xl"
  >
    <div class="col-span-2 text-center flex justify-center items-center">
      <div
        class="bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl shadow-xl h-16 w-28 border-4 border-blue-400"
      >
        🐟
        <span class="ml-2 text-white text-2xl font-bold">No</span>
      </div>
    </div>

    <div class="col-span-4 flex items-center text-4xl text-white">
      Player Name
    </div>

    <div class="col-span-3 flex items-center text-4xl text-white">Level 🌊</div>

    <div class="col-span-3 flex items-center justify-center mr-16">
      <button
        class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 flex items-center"
      >
        <span class="mr-2">➕</span>
        Add
      </button>
    </div>
  </div>
  <div
    class="grid grid-cols-12 items-center font-poppins gap-4 py-4 bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-400 hover:from-lime-200 hover:via-green-300 hover:to-green-400 transition-all duration-300 ease-in-out hover:shadow-lg"
    v-for="(player, index) in playerList" :key="index"
    @click="$emit('select',player)"
  >
    <div class="col-span-2 text-center flex justify-center items-center">
      <div
        class="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl shadow-md"
      >
        {{ index+1 }}
      </div>
    </div>

    <div class="col-span-4 text-blue-900 text-xl font-bold">{{ player.playerStore.name }}</div>
    <div class="col-span-3 text-blue-600 text-xl font-semibold">{{ player.playerStore.level }} 🌟</div>

    <div class="col-span-3 flex justify-start space-x-4">
      <button
        class="bg-yellow-400 text-white rounded-lg px-3 py-1 text-lg hover:bg-yellow-500 transition-colors duration-200 flex items-center"
      >
        ✏️ Edit
      </button>

      <button
        class="bg-red-500 text-white rounded-lg px-3 py-1 text-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
      >
        🗑️ Delete
      </button>
    </div>
  </div>
</template>

<style></style>
