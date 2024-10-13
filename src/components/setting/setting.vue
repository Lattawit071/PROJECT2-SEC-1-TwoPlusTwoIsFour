<script setup>
import { ref } from "vue";
import { usePlayerStore } from "../../stores/player.js";
import { useSoundStore } from "../../stores/sounds.js";
const usePlayer = usePlayerStore();
const useSound = useSoundStore();
const props = defineProps({});
defineEmits([
  "playHoverSound",
  "togglePage",
  "hook",
  "repairToggle",
  "page",
  "saveSettings",
]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
    >
      <h2 class="text-2xl font-bold mb-4">Settings</h2>

      <div class="mb-6">
        <label class="flex items-center mb-2">
          <div
            @click="useSound.toggleSound"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': useSound.isSoundOn,
              'bg-gray-500': !useSound.isSoundOn,
            }"
          >
            <span class="toggle-circle"></span>
          </div>
          <span class="ml-3">Sound On/Off</span>
        </label>
        <label class="flex items-center mb-2">
          <div
            @click="useSound.toggleMusic"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': useSound.isMusicOn,
              'bg-gray-500': !useSound.isMusicOn,
            }"
          >
            <span class="toggle-circle"></span>
          </div>
          <span class="ml-3">Music On/Off</span>
        </label>
        <label class="flex items-center">
          <div
            @click="useSound.toggleSfx"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': useSound.isSfxOn,
              'bg-gray-500': !useSound.isSfxOn,
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
          v-model="usePlayer.playerStore.name"
          type="text"
          class="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none"
          placeholder="Enter new player name"
          maxlength="20"
        />
      </div>

      <div class="flex justify-end space-x-4">
        <button
          @mouseenter="useSound.playHoverSound"
          @click="$emit('saveSettings')"
          class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-message-error {
  color: #c62828;
  font-weight: bold;
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
</style>
