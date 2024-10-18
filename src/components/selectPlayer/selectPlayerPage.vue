<script setup>
import { onMounted, ref } from "vue";
import selectPlayerTable from "./selectPlayerTable.vue";
import { usePlayerStore } from "@/stores/player";
const playerStore = usePlayerStore()
const playerList = ref([])
onMounted(async ()=> {
    playerList.value = await playerStore.getAllPlayer(`${import.meta.env.VITE_APP_URL}`)
    
})
const emit = defineEmits(['togglePage'])
const findPlayer = async(selectedPlayer) => {
    await playerStore.getPlayerById(`${import.meta.env.VITE_APP_URL}`, selectedPlayer.id)
    emit('togglePage', 1)
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
  </div>
</template>

<style scoped></style>
