<script setup>
import { onMounted, ref } from "vue";
import selectPlayerTable from "./selectPlayerTable.vue";
import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore()
const playerList = ref([])
onMounted(async ()=> {
    playerList.value = await playerStore.getAllPlayer(`${import.meta.env.VITE_APP_URL}`)
    
})
const emit = defineEmits(['goBack', 'togglePage'])
const findPlayer = async(selectedPlayer) => {
    await playerStore.getPlayerById(`${import.meta.env.VITE_APP_URL}`, selectedPlayer.id)
    emit('togglePage', 5)
}
</script>

<template>
  <div
    class="bg-gradient-to-b min-h-screen flex justify-center py-6"
    :style="{ backgroundImage: `url('/images/image/selectPlayer.jpg')` }"
  >
    <div
      class="bg-blue-100 bg-opacity-80 mt-3 ml-8 mr-8 rounded-2xl shadow-lg w-3/5"
    >
      <selectPlayerTable :playerList="playerList" @select="findPlayer"/>
    </div>
    <div class="flex justify-between items-center py-4 px-6">
      <button
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center"
        @click="$emit('goBack', 1)"
      >
        ← Go Back
      </button>
    </div>
  </div>
</template>

<style scoped></style>
