<script setup>
import { useSoundStore } from "@/stores/sounds";
// import { computed } from "vue";
const sound = useSoundStore();
const props = defineProps({
  gottenFish: {
    type: Boolean,
  },
  fishName: {
    type: String,
  },
  fishSrc: {
    type: String,
  },
  escapedFish: {
    type: Boolean,
  },
});

defineEmits(["playHoverSound", "closeModal"]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
    v-show="gottenFish"
  >
    <div
      class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center bg-gray-1000"
      style="
        background-image: url('/images/image/SeaBackground.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <div
        class="text-xl md:text-2xl bg-gradient-to-b from-gray-900 to-yellow-900 text-yellow-100 font-sans font-bold rounded-lg mx-2 md:mx-4 lg:mx-8 p-3 md:p-4 flex items-center justify-center"
      >
        <span>You got a</span>
        <div
          class="text-xl md:text-2xl text-yellow-100 font-sans font-bold flex items-center"
        >
          &nbsp; "
          <span class="text-xl md:text-2xl text-green-600 font-extrabold">
            {{ fishName }}
          </span>
          "
        </div>
      </div>

      <div class="w-full h-auto md:h-1/2 flex items-center justify-center mt-8">
        <div
          class="bg-gray-900 border border-yellow-400 rounded-lg shadow-lg p-4 max-w-xs md:max-w-md w-full h-full flex justify-center items-center"
        >
          <img
            :src="fishSrc"
            alt="Fish Image"
            class="w-full h-full object-cover rounded-lg"
            style="max-width: 200px; max-height: 200px"
          />
        </div>
      </div>
      <button
        @mouseenter="sound.playHoverSound()"
        @click="$emit('closeModal')"
        class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
      >
        Close
      </button>
    </div>
  </div>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    v-show="escapedFish"
  >
    <div
      class="p-4 md:p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg text-center flex flex-col items-center bg-gray-1000"
      style="
        background-image: url('/images/image/SeaBackground.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <div
        class="text-xl md:text-2xl bg-gradient-to-b bg-gray-900 text-yellow-100 font-sans font-bold rounded-lg mx-2 md:mx-4 lg:mx-8 p-3 md:p-4 flex items-center justify-center"
      >
        <span>Unfortunately, your fish &nbsp; Escaped!</span>
      </div>

      <button
        @mouseenter="sound.playHoverSound()"
        @click="$emit('closeModal')"
        class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
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
