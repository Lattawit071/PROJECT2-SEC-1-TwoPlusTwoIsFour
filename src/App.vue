<script setup>
import { ref } from "vue";
import { useSoundStore } from "./stores/sounds.js";
import BackgroundImg from "/images/image/Background.png";
import pagetwo from "/images/howtoplay/pagetwo.png";
import pagethree from "/images/howtoplay/pagethree.png";
import pagefour from "/images/howtoplay/pagefour.png";
import pagefive from "/images/howtoplay/pagefive.png";
import pagesix from "/images/howtoplay/pagesix.png";

//Loading
import LoadingPage from "./components/loading/loadingPage.vue";
//bookmark
import bookmark from "./components/bookmark/bookmark.vue";
import setting from "./components/setting/setting.vue";
//inventory
import inventory from "./components/inventory/inventory.vue";

//shop
import Shop from "./components/shop/shop.vue";

//play
import PlayPage from "./components/play/playPage.vue";

const soundStore = useSoundStore();

const page = ref(6);

const togglePage = (value) => {
  page.value = value;
};

const isSettingsOpen = ref(false);

const openSettings = () => {
  isSettingsOpen.value = true;
};

const saveSettings = () => {
  isSettingsOpen.value = false;
};

const imagesHowToPlay = [pagetwo, pagethree, pagefour, pagefive, pagesix];

const currentImageIndex = ref(0);
const isHowToPlayOpen = ref(false);

const openHowToPlay = () => {
  isHowToPlayOpen.value = !isHowToPlayOpen.value;
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = imagesHowToPlay.length - 1;
  }
};

const nextImage = () => {
  if (currentImageIndex.value < imagesHowToPlay.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const goToImage = (index) => {
  currentImageIndex.value = index;
};

import selectPlayerPage from "./components/selectPlayer/selectPlayerPage.vue";
</script>

<template>
  <bookmark v-if="page === 4" @togglePage="togglePage" />
  <selectPlayerPage
    v-if="page === 6"
    @goBack="togglePage"
    @togglePage="togglePage"
  />
  <LoadingPage />

  <div
    class="flex items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${BackgroundImg})`,
    }"
    v-if="page === 1"
  >
    <div class="absolute top-4 left-4" style="user-select: none">
      <img
        @click="openSettings"
        src="/images/button/Setting.png"
        alt="Settings"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="soundStore.playHoverSound()"
      />
    </div>

    <div class="absolute top-4 right-4 flex flex-1" style="user-select: none">
      <img
        @click="openHowToPlay"
        src="/images/button/Question.png"
        alt="Help"
        class="w-24 h-24 md:w-40 md:h-40 cursor-pointer object-contain transition-transform duration-300 hover:scale-110"
        @mouseenter="soundStore.playHoverSound()"
      />
    </div>

    <div class="text-center" style="user-select: none">
      <div
        class="text-5xl md:text-8xl font-handwritten mb-16 wave-animation text-amber-950"
        style="font-family: 'Pacifico', cursive"
      >
        <span>F</span><span>i</span><span>s</span><span>h</span> <span>F</span
        ><span>o</span><span>r</span> <span>L</span><span>i</span><span>f</span
        ><span>e</span>
      </div>
      <div class="relative inline-block template" style="user-select: none">
        <div
          class="relative w-64 h-24 md:w-96 md:h-40 cursor-pointer transition-transform duration-300 hover:scale-110"
          @click="togglePage(5)"
          @mouseenter="soundStore.playHoverSound()"
        >
          <img
            src="/images/button/Button.png"
            alt="Play"
            class="w-full h-full object-contain"
          />
          <span
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl text-white font-handwritten transition-colors duration-300 hover:text-black"
          >
            PLAY
          </span>
        </div>
      </div>
    </div>
  </div>

  <setting v-if="isSettingsOpen" @saveSettings="saveSettings" />

  <transition name="fade">
    <div
      v-if="isHowToPlayOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col items-center"
      >
        <img
          src="/images/howtoplay/pageone.png"
          alt="How to Play Title"
          class="w-full max-w-xs md:max-w-sm h-auto mb-4"
        />

        <div class="relative w-full flex justify-center items-center">
          <img
            :src="imagesHowToPlay[currentImageIndex]"
            alt="How to Play Image"
            class="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
          />

          <button
            @click="prevImage"
            @mouseenter="soundStore.playHoverSound()"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition-all duration-300"
          >
            &#8249;
          </button>
          <button
            @click="nextImage"
            @mouseenter="soundStore.playHoverSound()"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full focus:outline-none transition-all duration-300"
          >
            &#8250;
          </button>
        </div>

        <div class="flex space-x-2 mt-4">
          <span
            v-for="(image, index) in imagesHowToPlay"
            :key="index"
            @mouseenter="soundStore.playHoverSound()"
            @click="goToImage(index)"
            class="w-4 h-4 rounded-full cursor-pointer"
            :class="{
              'bg-white': currentImageIndex === index,
              'bg-gray-500': currentImageIndex !== index,
            }"
          ></span>
        </div>

        <div class="flex justify-end mt-4 w-full">
          <button
            @mouseenter="soundStore.playHoverSound()"
            @click="openHowToPlay"
            class="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>

  <PlayPage v-if="page === 5" @togglePage="togglePage" />

  <inventory v-if="page === 2" @togglePage="togglePage" />

  <Shop v-if="page === 3" @togglePage="togglePage" />
</template>

<style scoped>
.bg-yellow-800 {
  background-color: #7b5e57;
}

.text-yellow-200 {
  color: #ffecb3;
}
.text-yellow-300 {
  color: #ffe082;
}

.hover:bg-yellow-500:hover {
  background-color: #ffa726;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes blueGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.blue-gradient-bg {
  background: linear-gradient(
    270deg,
    #89cff0,
    #a0d8f1,
    #c9ebf6,
    #a0d8f1,
    #89cff0
  );
  background-size: 600% 600%;
  animation: blueGradient 10s ease infinite;
}

@keyframes greenGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.green-gradient-bg {
  background: linear-gradient(
    270deg,
    #a8e6cf,
    #dcedc1,
    #f6ffed,
    #dcedc1,
    #a8e6cf
  );
  background-size: 600% 600%;
  animation: greenGradient 10s ease infinite;
}

@keyframes pastelRedGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pastel-red-gradient-bg {
  background: linear-gradient(
    270deg,
    #ffc1c1,
    #ffb6c1,
    #ffd1dc,
    #ffaaaa,
    #ffc1c1
  );
  background-size: 400% 400%;
  animation: pastelRedGradient 10s ease infinite;
  border-radius: 15px;
  border: 4px solid transparent;

  padding: 10px;
  transition: transform 0.3s ease;
}

@keyframes hologramBackground {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hologram-bg {
  background: linear-gradient(
    270deg,
    #ffb3ff,
    #b3ffff,
    #b3ffb3,
    #ffb3b3,
    #b3b3ff
  );
  background-size: 400% 400%;
  animation: hologramBackground 15s ease infinite;
  border-radius: 15px;
  padding: 10px;
  border: 4px solid transparent;
  border-image: linear-gradient(
      45deg,
      #ffb3ff,
      #b3ffff,
      #b3ffb3,
      #ffb3b3,
      #b3b3ff
    )
    1;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 179, 255, 0.5), 0 0 30px rgba(179, 255, 255, 0.5),
    0 0 40px rgba(179, 255, 179, 0.5), 0 0 50px rgba(255, 179, 179, 0.5),
    0 0 60px rgba(179, 179, 255, 0.5);
}

.wave-animation span {
  display: inline-block;
  animation: wave 1.5s infinite ease-in-out;
}

.wave-animation span:nth-child(1) {
  animation-delay: 0s;
}
.wave-animation span:nth-child(2) {
  animation-delay: 0.1s;
}
.wave-animation span:nth-child(3) {
  animation-delay: 0.2s;
}
.wave-animation span:nth-child(4) {
  animation-delay: 0.3s;
}
.wave-animation span:nth-child(5) {
  animation-delay: 0.4s;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pastel-border {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes slideUpFadeIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDownFadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-t {
  opacity: 0;
  transform: translateY(100%);
}

.toggle-switch {
  width: 50px;
  height: 24px;
  background-color: #6e6e6e;
  border-radius: 9999px;
  padding: 2px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 9999px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  transition: transform 0.3s ease-in-out;
}

.is-on {
  background-color: #ff9f05;
}

.is-on .toggle-circle {
  transform: translate(26px, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.navigation button {
  width: 40px;
  height: 40px;
}

.navigation span {
  width: 12px;
  height: 12px;
  background-color: #555;
}

.bg-gray-1000 {
  background-color: #160a06;
}

.text-yellow-100 {
  color: #fff9c4;
}

.bg-gray-900 {
  background-color: #2b1b17;
}

.bg-yellow-600 {
  background-color: #ffb74d;
}
</style>
