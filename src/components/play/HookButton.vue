<script setup>
import seaImg from "/images/image/sea.png";
import hookImg from "/images/image/Hook.png";
const props = defineProps({
  hookAniClass: {
    type: String,
  },
  hooking: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="relative flex justify-center items-center h-screen w-full">
    <img :src="seaImg" alt="Animated SVG" class="animated-svg relative z-10" />
    <div
      :class="hookAniClass"
      class="hook-container"
      v-show="hooking"
      :style="{ backgroundImage: `url(${hookImg})` }"
    ></div>
  </div>
</template>

<style scoped>
.animated-svg {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: moveSideways 2s ease-in-out infinite;
}

.hook-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 900px;
  background-image: url("/images/image/Hook.png");

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 5;
}

.hook-animation-down {
  animation: hookMoveDown 2s ease forwards;
}

.hook-animation-up {
  animation: hookMoveUp 2s ease forwards;
}

@keyframes hookMoveDown {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 5%);
  }
}

@keyframes hookMoveUp {
  0% {
    transform: translate(-50%, 5%);
  }
  100% {
    transform: translate(-50%, -100%);
  }
}
</style>
