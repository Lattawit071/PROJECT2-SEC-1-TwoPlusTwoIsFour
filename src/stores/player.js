// stores/playerStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useSoundStore } from './sounds.js';
import playerImg from "/images/image/Player.png";
import rods from "../../data/rods.json";

export const usePlayerStore = defineStore("playerStore", () => {
  const soundStore = useSoundStore();
  const playerName = ref("int203");
  const playerStore = ref({
    id: 1,
    name: playerName.value,
    coins: 100000,
    avatar: playerImg,
    ownedRods: [rods[0]],
    caughtFish: [],
    potions: [],
    usingRods: rods[0],
    usingPotion: [],
  });

  const showToastInventory = ref(false)
  const toastMessage = ref("");
  const toastClass = ref("");
  
  const potionTimers = {};

  function sellFishAll(fish) {
    playerStore.value.coins += fish.price * fish.quantity;
    playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
      (f) => f.id !== fish.id
    );
    showToastInventoryMessage(`Sold all ${fish.name}`, "success");
    soundStore.playSellSuccessSound();
  }

  function sellFish(fish) {
    playerStore.value.coins += fish.price;
    fish.quantity -= 1;

    if (fish.quantity === 0) {
      playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
        (f) => f.id !== fish.id
      );
    }

    showToastInventoryMessage(`Sold 1 ${fish.name}`, "success");
    soundStore.playSellSuccessSound();
  }

  function equipRod(rod) {
    soundStore.playUseRodSound();
    playerStore.value.usingRods = rod;
    showToastInventoryMessage(`Equipped ${rod.name}`, "success");
  }

  function usePotion(potion) {
    soundStore.playUsePotionSound();
    let existingPotion = playerStore.value.usingPotion.find(
      (p) => p.id === potion.id
    );

    if (!existingPotion) {
      playerStore.value.usingPotion.push({
        ...potion,
        remainingTime: potion.duration,
        startTime: Date.now(),
      });
      existingPotion = playerStore.value.usingPotion.find(
        (p) => p.id === potion.id
      );
    } else {
      const elapsedTimed = (Date.now() - existingPotion.startTime) / 1000;
      existingPotion.remainingTime = Math.max(
        existingPotion.remainingTime - elapsedTimed + potion.duration,
        0
      );
      existingPotion.setTimeout = Date.now();
    }

    if (potionTimers[potion.id]) {
      clearTimeout(potionTimers[potion.id]);
    }

    potionTimers[potion.id] = setTimeout(() => {
      playerStore.value.usingPotion = playerStore.value.usingPotion.filter(
        (p) => p.id !== potion.id
      );
      delete potionTimers[potion.id];
    }, playerStore.value.usingPotion.find((p) => p.id === potion.id).remainingTime * 1000);

    if (potion.quantity > 1) {
      potion.quantity -= 1;
    } else {
      playerStore.value.potions = playerStore.value.potions.filter(
        (p) => p.id !== potion.id
      );
    }
    showToastInventoryMessage(`Used ${potion.name}`, "success");
  }

  function showToastInventoryMessage(message, type) {
    toastMessage.value = message;
    toastClass.value = type === "success" ? "bg-green-500" : "bg-red-500";
    showToastInventory.value = true;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      showToastInventory.value = false;
    }, 4000);
  }

  return {
    playerStore,
    sellFishAll,
    sellFish,
    equipRod,
    usePotion,
  };
});
