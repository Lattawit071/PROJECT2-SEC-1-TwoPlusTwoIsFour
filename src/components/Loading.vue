<script setup>
import Sound from 
const loading = ref(true);
const loadingProgress = ref(0);
const isLoaded = ref(false);
const loadingMessage = ref("Loading... Please wait");

const startGame = () => {
  playBackgroundMusic();
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
    <img src="/images/gif/loading.gif" />
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

</style>