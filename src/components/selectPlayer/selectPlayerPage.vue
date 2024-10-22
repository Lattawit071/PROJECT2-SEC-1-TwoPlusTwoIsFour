<script setup>
import { onMounted, ref } from "vue";
import selectPlayerTable from "./selectPlayerTable.vue";
import ModalAddPlayer from "./ModalAddPlayer.vue";
import ModalEditPlayer from "./ModalEditPlayer.vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const playerList = ref([]);
const selectedPlayer = ref(null);
const isAddModalOpen = ref(false);
const isEditModalOpen = ref(false);

onMounted(async ()=> {
    
    playerList.value = await playerStore.getAllPlayer(`${import.meta.env.VITE_APP_URL}`)
    console.log(playerList.value);
    
    
})
const emit = defineEmits(['togglePage'])
const findPlayer = async(selectedPlayer) => {
    await playerStore.getPlayerById(`${import.meta.env.VITE_APP_URL}`, selectedPlayer.id)
    emit('togglePage', 1)
}

const refreshPlayerList = async () => {
  playerList.value = await playerStore.getAllPlayer(`${import.meta.env.VITE_APP_URL}`);
};

const openAddModal = () => {
  isAddModalOpen.value = true;
};

const openEditModal = (player) => {
  selectedPlayer.value = player;
  isEditModalOpen.value = true;
};
</script>

<template>
  
  <div
    class="bg-gradient-to-b min-h-screen flex justify-center py-6"
    :style="{ backgroundImage: `url('/images/image/selectPlayer.jpg')` }"
  >
    <div class="bg-blue-100 bg-opacity-80 mt-3 ml-8 mr-8 rounded-2xl shadow-lg w-3/5">
      <selectPlayerTable 
        :playerList="playerList" 
        @openEditModal="openEditModal"
        @select="findPlayer"
        @openAddModal="openAddModal" 
        @refresh="refreshPlayerList"
      />
    </div>

    <ModalAddPlayer
      v-if="isAddModalOpen"
      @close="isAddModalOpen = false"
      @refresh="refreshPlayerList"
    />
    <ModalEditPlayer
      v-if="isEditModalOpen"
      :player="selectedPlayer"
      @close="isEditModalOpen = false"
      @refresh="refreshPlayerList"
    />
  </div>
</template>

<style scoped></style>
