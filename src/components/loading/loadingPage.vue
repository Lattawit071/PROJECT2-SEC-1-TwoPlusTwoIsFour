<script setup>
import { ref, onMounted } from "vue";
import { useSoundStore } from "@/stores/sounds";
const sound = useSoundStore();
const loading = ref(true);
const loadingProgress = ref(0);
const isLoaded = ref(false);
const loadingMessage = ref("Loading... Please wait");


const startGame = () => {
  sound.playBackgroundMusic();
  loading.value = false;
};

const updateLoadingBar = () => {
  const interval = setInterval(() => {
    if (loadingProgress.value >= 100) {
      loadingMessage.value = "Success";
      clearInterval(interval);
      isLoaded.value = true;
    } else {
      loadingProgress.value += 10;
    }
  }, 500);
};

onMounted(() => {
  updateLoadingBar();
});
</script>
 
<template>
  <div class="loading-screen" v-if="loading">
    <img src="/gif/loading.gif" />
    <p>{{ loadingMessage }}</p>
    <div class="loading-bar">
      <div
        class="loading-bar-inner"
        :style="{ width: loadingProgress + '%' }"
      ></div>
    </div>
    <button class="start-btn" @click="startGame" :disabled="!isLoaded">
      Continue
    </button>
  </div>
</template>
 
<style scoped>
.loading-screen {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #25120d;
  color: white;
  z-index: 9999;
  padding-bottom: 12%;
}

.loading-screen img {
  width: 25rem;
  height: auto;
}

.loading-bar {
  width: 80%;
  background-color: #ddd;
  height: 25px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
}

.loading-bar-inner {
  height: 100%;
  background-color: #ff9f05;
  width: 0%;
  transition: width 0.5s linear;
}

.start-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff9f05;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.start-btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>