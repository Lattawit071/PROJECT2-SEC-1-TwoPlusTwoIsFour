<script setup>
import playBackgroundImg from "/images/image/PLAY.png"
import seaImg from "/images/image/sea.png";
import hookImg from "/images/image/Hook.png";
const props = defineProps({
    page: {
        type: Number
    },
    hookAniClass: {
        type: String
    },
    hooking: {
        type: Boolean
    },
    gottenFish: {
        type: Boolean
    },
    fishName: {
        type: Boolean
    },
    fishSrc: {
        type: String
    },
    escapedFish: {
        type: Boolean
    },
    repair: {
        type: Boolean
    },
    maxRodHp: {
        type: Number
    },
    rodHp: {
        type: Number
    },
    playerAvatar: {
        type: String
    },
    playerName: {
        type: String
    },
    playerCoins: {
        type: Number
    },
    playerPotion: {
        type: Object
    },
    playerRodIcon: {
        type: String
    },
    rodHpPercentage: {
        type: Number
    },
})
defineEmits(['playHoverSound','closeModal', 'togglePage', 'hook', 'repairRod', 'repairToggle'])
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
    :style="{
      backgroundImage: `url(${playBackgroundImg})`,
    }"
    v-if="page === 5"
  >
    <div class="relative flex justify-center items-center h-screen w-full">
      <img
        :src="seaImg"
        alt="Animated SVG"
        class="animated-svg relative z-10"
      />
      <div
        :class="hookAniClass"
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

        <div
          class="w-full h-auto md:h-1/2 flex items-center justify-center mt-8"
        >
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
          @mouseenter="$emit('playHoverSound')"
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
          @click="$emit('closeModal')"
          class="bg-yellow-600 text-yellow-100 border-2 rounded-lg w-full md:w-1/2 lg:w-1/3 p-3 md:p-4 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6 md:mt-8 lg:mt-10"
        >
          Close
        </button>
      </div>
    </div>
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

    <transition name="fade">
      <div
        v-if="repair"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
        >
          <h2 class="text-2xl font-bold mb-4">Repair Rod</h2>
          <p class="mb-6">Would you like to repair your rod?</p>

          <div class="flex justify-center items-center mb-4">
            <span class="text-lg font-bold">
              Repair
              {{ maxRodHp - rodHp }} HP
              for
              {{
                (maxRodHp - rodHp) * 25
              }}
              Coins
            </span>
          </div>

          <div class="flex justify-center items-center space-x-4">
            <button
              @mouseenter="$emit('playHoverSound')"
              @click="$emit('repairRod')"
              class="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            >
              Repair
            </button>
            <button
              @mouseenter="$emit('playHoverSound')"
              @click="$emit('repairToggle')"
              class="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>

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
        <p class="text-xs text-right mt-1">
          HP: {{ rodHp }}
        </p>
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
