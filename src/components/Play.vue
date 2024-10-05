<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{ backgroundImage: `url(${playBackgroundImg})` }"
    v-if="page === 5"
  >
    <div class="relative flex justify-center items-center h-screen w-full">
      <img :src="seaImg" alt="Animated SVG" class="animated-svg relative z-10" />
      <div
        :class="hookAnimationClass"
        class="hook-container"
        v-show="hooking"
        :style="{ backgroundImage: `url(${hookImg})` }"
      ></div>
    </div>

    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      v-show="gottenFish"
    >
      <div
        class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center bg-gray-1000"
        style="background-image: url('/images/SeaBackground.png'); background-size: cover; background-position: center; background-repeat: no-repeat;"
      >
        <div class="text-xl md:text-2xl bg-gradient-to-b from-gray-900 to-yellow-900 text-yellow-100 font-sans font-bold rounded-lg mx-2 md:mx-4 lg:mx-8 p-3 md:p-4 flex items-center justify-center">
          <span>You got a</span>
          <div class="text-xl md:text-2xl text-yellow-100 font-sans font-bold flex items-center">
            &nbsp; "<span class="text-xl md:text-2xl text-green-600 font-extrabold">{{ fishName }}</span>"
          </div>
        </div>

        <div class="w-full h-auto md:h-1/2 flex items-center justify-center mt-8">
          <div class="bg-gray-900 border border-yellow-400 rounded-lg shadow-lg p-4 max-w-xs md:max-w-md w-full h-full flex justify-center items-center">
            <img :src="fishId" alt="Fish Image" class="w-full h-full object-cover rounded-lg" style="max-width: 200px; max-height: 200px" />
          </div>
        </div>
        <button
          @mouseenter="playHoverSound"
          @click="closeModal"
          class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Hook and Escape modals -->
    <div class="relative w-full mt-auto">
      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E]">
        <img @mouseenter="playHoverSound" src="/images/button/Back.png" alt="Bottom Image" class="w-full object-contain" />
      </div>

      <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
        <img @mouseenter="playHoverSound" src="/images/button/front.png" alt="Top Image" class="w-full object-contain" />
      </div>

      <div class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent">
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Home.png"
          alt="Home"
          @click="togglePage(1)"
          class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/BackPack.png"
          alt="Inventory"
          @click="togglePage(2)"
          class="w-20 md:w-24 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Play.png"
          alt="Hook"
          @click="hook"
          class="w-24 md:w-32 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/Shop.png"
          alt="Shop"
          @click="togglePage(3)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 cursor-pointer"
        />
        <img
          @mouseenter="playHoverSound"
          src="/images/button/BookMark.png"
          alt="Bookmark"
          @click="togglePage(4)"
          class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const page = inject("page");
const playBackgroundImg = inject("playBackgroundImg");
const seaImg = inject("seaImg");
const hookImg = inject("hookImg");
const hookAnimationClass = inject("hookAnimationClass");
const hooking = inject("hooking");
const gottenFish = inject("gottenFish");
const fishId = inject("fishId");
const fishName = inject("fishName");
const togglePage = inject("togglePage");
const hook = inject("hook");
const closeModal = inject("closeModal");
const playHoverSound = inject("playHoverSound");
</script>

<style scoped>
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

.animated-svg {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: moveSideways 2s ease-in-out infinite;
}

@keyframes moveSideways {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 20px);
  }
}
</style>
