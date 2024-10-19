import { defineStore } from "pinia";
import { ref } from "vue";
import { useSoundStore } from "./sounds.js";
import { useToastStore } from "./toast.js";
import playerImg from "/images/image/Player.png";
import rods from "../../data/rods.json";

export const usePlayerStore = defineStore("playerStore", () => {
  const soundStore = useSoundStore();
  const toastStore = useToastStore();
  const allPlayer = ref([]);
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
    level: 1,
  });
  const selectedPlayer = ref({});
  const potionTimers = {};

  async function getAllPlayer(url) {
    try {
      const response = await fetch(url + "/user");
      const data = await response.json();
      allPlayer.value = data;
      return allPlayer.value;
    } catch (error) {
      console.log(`error: ${error}`);
      throw new Error(error);
    }
  }

  async function getPlayerById(url, id) {
    try {
      const response = await fetch(url + "/user/" + id);
      console.log(response);

      const data = await response.json();
      selectedPlayer.value = data;
      playerStore.value = data.playerStore;
      return selectedPlayer.value;
    } catch (error) {
      console.log(`error: ${error}`);
      throw new Error(error);
    }
  }

  async function editPlayerById(url, id, updatedPlayer) {
    try {
      const response = await fetch(`${url}/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPlayer),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to edit player with ID ${id}.`);
      }
  
      const data = await response.json();
      const index = allPlayer.value.findIndex((player) => player.id === id);
      if (index !== -1) {
        allPlayer.value[index] = data;
      }
  
      console.log(`Player with ID ${id} has been edited successfully.`);
      return data;
    } catch (error) {
      console.log(`error: ${error}`);
      throw new Error(error);
    }
  }
  
  async function deletePlayerById(url, id) {
    try {
      const response = await fetch(url + "/user/" + id, {
        method: "DELETE",
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`ไม่มี id นี้ ไอโง่`);
      }

      console.log(`Player with ID ${id} has deleted`);
      return id;
    } catch (error) {
      console.log(`error: ${error}`);
      throw new Error(error);
    }
  }

  function sellFishAll(fish) {
    playerStore.value.coins += fish.price * fish.quantity;
    playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
      (f) => f.id !== fish.id
    );
    toastStore.showToast(`Sold all ${fish.name}`, "success");
    soundStore.playSellSuccessSound();
  }

  function sellFish(fish) {
    soundStore.playerStore.value.coins += fish.price;
    fish.quantity -= 1;

    if (fish.quantity === 0) {
      playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
        (f) => f.id !== fish.id
      );
    }

    toastStore.showToast(`Sold 1 ${fish.name}`, "success");
    soundStore.playSellSuccessSound();
  }

  function equipRod(rod) {
    soundStore.playUseRodSound();
    playerStore.value.usingRods = rod;
    toastStore.showToast(`Equipped ${rod.name}`, "success");
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
    toastStore.showToast(`Used ${potion.name}`, "success");
  }

  return {
    playerStore,
    sellFishAll,
    sellFish,
    equipRod,
    usePotion,
    getAllPlayer,
    getPlayerById,
    editPlayerById,
    deletePlayerById,
  };
});
