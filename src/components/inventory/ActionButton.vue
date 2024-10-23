<script setup>
import { usePlayerStore } from '../../stores/player.js';
import { useSoundStore } from '../../stores/sounds.js';
const playerStore = usePlayerStore();
const soundStore = useSoundStore();
const emit = defineEmits(["sellFish", "sellFishAll", "equipRod", "usePotion"]);

const props = defineProps({
  item: Object,
});

</script>
<template>
  <div v-if="item.type === 'fish'" class="flex flex-col space-y-2">
    <button
      @mouseenter="soundStore.playHoverSound()"
      @click="playerStore.sellFish(item)"
      class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
    >
      Sell 1 for {{ item.price }} coins
    </button>

    <button
      @mouseenter="soundStore.playHoverSound()"
      @click="playerStore.sellFishAll(item)"
      class="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
    >
      Sell All {{ item.price * item.quantity }} coins
    </button>
  </div>

  <div v-else-if="item.type === 'rod'" class="flex flex-col space-y-2">
    <button
      @mouseenter="soundStore.playHoverSound()"
      :disabled="playerStore.usingRods?.id === item.id"
      @click="playerStore.equipRod(item)"
      class="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
      :class="{ 'bg-green-500': playerStore.usingRods?.id === item.id }"
    >
      Equip Rod
    </button>
  </div>

  <div v-else-if="item.type === 'potion'" class="flex flex-col space-y-2">
    <button
      @mouseenter="soundStore.playHoverSound()"
      @click="playerStore.usePotion(item)"
      class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full"
    >
      Use Potion
    </button>
  </div>
</template>
