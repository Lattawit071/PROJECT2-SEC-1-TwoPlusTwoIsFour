<script setup>
import { ref } from "vue";
import { usePlayerStore } from "../../stores/player.js";
import { useSoundStore } from "../../stores/sounds.js";

const Player = usePlayerStore();
const Sound = useSoundStore();
const showLogoutModal = ref(false);

const emit = defineEmits();

const confirmLogout = () => {
  showLogoutModal.value = false;
  emit("logout"); //อันนี้จะปิด setting modal(ถ้าไม่ใช้อันนี้ setting มันจะทับ)
  emit("togglePage", 6); // เปลี่ยนกลับไปหน้า เลือก player
};
</script>
<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full sm:w-4/5 lg:w-3/5 xl:w-2/5"
    >
      <h2 class="text-2xl font-bold mb-4">Settings</h2>
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-gray-700 pb-4 space-y-4 md:space-y-0 md:flex-wrap"
      >
        <div class="flex items-center space-x-2">
          <p class="text-lg font-medium">User:</p>
          <p class="text-lg font-bold text-yellow-500">
            {{ Player.playerStore.name }}
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <p class="text-lg">Level:</p>
          <p class="text-lg font-semibold text-yellow-500">
            {{ Player.playerStore.level }}
          </p>
        </div>

        <div class="flex items-center space-x-4">
          <p class="text-lg">Coins:</p>
          <p class="text-lg font-bold text-yellow-500">
            {{ Player.playerStore.coins }}
          </p>
          <button
            class="bg-[#8aabd5] text-white border border-gray-600 rounded-lg px-3 py-1 sm:px-4 sm:py-2 hover:bg-[#456185] transition-colors duration-200 text-sm sm:text-base"
            @click="showLogoutModal = true"
          >
            Logout
          </button>
        </div>
      </div>

      <div class="mb-6 mt-5">
        <label class="flex items-center mb-2">
          <div
            @click="Sound.toggleSound"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': Sound.isSoundOn,
              'bg-gray-500': !Sound.isSoundOn,
            }"
          >
            <span class="toggle-circle"></span>
          </div>
          <span class="ml-3 text-sm sm:text-base">Sound On/Off</span>
        </label>
        <label class="flex items-center mb-2">
          <div
            @click="Sound.toggleMusic"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': Sound.isMusicOn,
              'bg-gray-500': !Sound.isMusicOn,
            }"
          >
            <span class="toggle-circle"></span>
          </div>
          <span class="ml-3 text-sm sm:text-base">Music On/Off</span>
        </label>
        <label class="flex items-center">
          <div
            @click="Sound.toggleSfx"
            class="toggle-switch relative inline-flex items-center cursor-pointer"
            :class="{
              'bg-green-500 is-on': Sound.isSfxOn,
              'bg-gray-500': !Sound.isSfxOn,
            }"
          >
            <span class="toggle-circle"></span>
          </div>
          <span class="ml-3 text-sm sm:text-base">SFX On/Off</span>
        </label>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          @mouseenter="Sound.playHoverSound"
          @click="$emit('saveSettings')"
          class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base"
        >
          OK
        </button>
      </div>

      <div
        v-show="showLogoutModal"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60"
      >
        <div
          class="bg-[#8aabd5] text-white p-4 rounded-lg shadow-lg w-4/5 md:w-1/3 items-center justify-center"
        >
          <h3 class="text-lg font-bold mb-4 items-center justify-center">
            Are you sure you want to log out?
          </h3>
          <div class="flex justify-end space-x-2">
            <button
              @click="confirmLogout"
              class="bg-[#3871bd] hover:bg-[#1b3250] text-white py-2 px-4 rounded-lg"
            >
              Yes, Logout
            </button>
            <button
              @click="showLogoutModal = false"
              class="bg-[#5f6367] hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
