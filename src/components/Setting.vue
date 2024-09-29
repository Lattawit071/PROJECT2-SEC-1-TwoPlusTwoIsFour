<script setup>
import Sounds from './Sounds.vue';

const isSoundOn = ref(true);
const isMusicOn = ref(true);
const isSfxOn = ref(true);

function toggleSound() {
  isSoundOn.value = !isSoundOn.value;
}

function toggleMusic() {
  isMusicOn.value = !isMusicOn.value;
  if (isMusicOn.value) {
    sounds.backgroundMusic.play();
  } else {
    sounds.backgroundMusic.pause();
  }
}

function toggleSfx() {
  isSfxOn.value = !isSfxOn.value;
}
</script>
<template>
    <div
      v-if="isSettingsOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
      >
        <h2 class="text-2xl font-bold mb-4">Settings</h2>

        <div class="mb-6">
          <label class="flex items-center mb-2">
            <div
              @click="toggleSound"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isSoundOn,
                'bg-gray-500': !isSoundOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">Sound On/Off</span>
          </label>
          <label class="flex items-center mb-2">
            <div
              @click="toggleMusic"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isMusicOn,
                'bg-gray-500': !isMusicOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">Music On/Off</span>
          </label>
          <label class="flex items-center">
            <div
              @click="toggleSfx"
              class="toggle-switch relative inline-flex items-center cursor-pointer"
              :class="{
                'bg-green-500 is-on': isSfxOn,
                'bg-gray-500': !isSfxOn,
              }"
            >
              <span class="toggle-circle"></span>
            </div>
            <span class="ml-3">SFX On/Off</span>
          </label>
        </div>

        <div class="mb-6">
          <label class="block mb-2 font-bold">Change Player Name:</label>
          <input
            v-model="playerStore.name"
            type="text"
            class="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
            placeholder="Enter new player name"
            maxlength="20"
          />
        </div>

        <div class="flex justify-end space-x-4">
          <button
            @mouseenter="playHoverSound"
            @click="saveSettings"
            class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
          >
            OK
          </button>
        </div>
      </div>
    </div>
</template>