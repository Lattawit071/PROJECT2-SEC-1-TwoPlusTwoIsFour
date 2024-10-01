<script setup>
const props = defineProps({
  playerAvatar: {
    type: String,
  },
  playerName: {
    type: String,
  },
  playerCoins: {
    type: Number,
  },
  playerPotion: {
    type: Object,
  },
  playerRodIcon: {
    type: String,
  },
  rodHpPercentage: {
    type: Number,
  },
  maxRodHp: {
    type: Number,
  },
  rodHp: {
    type: Number,
  },
});
defineEmits(["playHoverSound", "togglePage", "hook", "repairToggle"]);
</script>

<template>
  <div class="relative w-full mt-auto">
    <div class="fixed left-0 bottom-0 w-full bg-[#4E342E]">
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Back.png"
        alt="Bottom Image"
        class="w-full object-contain"
      />
    </div>

    <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/front.png"
        alt="Top Image"
        class="w-full object-contain"
      />
    </div>

    <div
      class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent"
    >
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Home.png"
        alt="Home"
        @click="$emit('togglePage', 1)"
        class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/BackPack.png"
        alt="Inventory"
        @click="$emit('togglePage', 2)"
        class="w-20 md:w-24 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Play.png"
        alt="Hook"
        @click="$emit('hook')"
        class="w-24 md:w-32 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Shop.png"
        alt="Shop"
        @click="$emit('togglePage', 3)"
        class="w-20 md:w-28 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/BookMark.png"
        alt="Bookmark"
        @click="$emit('togglePage', 4)"
        class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36 cursor-pointer"
      />
    </div>
  </div>

  <div
    class="absolute top-0 left-0 p-4 z-20 w-full bg-gray-900 bg-opacity-80 shadow-lg text-white flex items-center justify-between space-x-8"
  >
    <div class="flex items-center space-x-4">
      <img
        :src="playerAvatar"
        alt="Player Avatar"
        class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-500"
      />
      <div>
        <p class="text-lg font-semibold md:text-xl">{{ playerName }}</p>
        <p class="text-sm md:text-base">Coins: {{ playerCoins }}</p>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p class="text-sm md:text-base font-semibold">Active Potions</p>
      <div class="flex space-x-2">
        <img
          v-for="potion in playerPotion"
          :src="potion.icon"
          alt="Potion"
          class="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col items-center">
      <p class="text-sm md:text-base font-semibold">Using Rod</p>
      <div class="flex items-center space-x-2">
        <img
          :src="playerRodIcon"
          alt="Rod"
          class="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-1/3">
      <p class="text-sm md:text-base font-semibold">Rod HP</p>
      <div class="w-full bg-gray-800 rounded-full h-4">
        <div
          class="bg-green-500 h-4 rounded-full"
          :style="{ width: rodHpPercentage + '%' }"
        ></div>
      </div>
      <p class="text-xs text-right mt-1">HP: {{ rodHp }}</p>
    </div>
    <button
      v-if="rodHp < maxRodHp"
      @mouseenter="$emit('playHoverSound')"
      @click="$emit('repairToggle')"
      class="fixed right-3 top-32 bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-500 transition-transform transform hover:scale-110"
    >
      Repair Rod
    </button>
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
