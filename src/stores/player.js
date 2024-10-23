import { defineStore } from "pinia";
import { ref } from "vue";
import { useSoundStore } from "./sounds.js";
import { useToastStore } from "./toast.js";
import playerImg from "/Player.png";
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
    exp: 0,
    Bookmarks: []
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
      throw new Error(error);
    }
  }

  async function getPlayerById(url, id) {
    try {
      const response = await fetch(url + "/user/" + id);
      const data = await response.json();
      selectedPlayer.value = data;
      playerStore.value = data.playerStore;
      return selectedPlayer.value;
    } catch (error) {
      throw new Error(error);
    }
  }

  const getNextId = () => {
    if (allPlayer.value.length === 0) return 1;
    const maxId = Math.max(...allPlayer.value.map((p) => parseInt(p.id)));
    return maxId + 1;
  };

  async function addPlayer(url, newPlayer) {
    try {
      const newId = getNextId(); 
      newPlayer.id = String(newId); 
      newPlayer.playerStore.id = newId;

      const response = await fetch(url + "/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });

      if (!response.ok) {
        throw new Error("Failed to add player.");
      }

      const data = await response.json();
      allPlayer.value.push(data);

      return data;
    } catch (error) {
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

    } catch (error) {
      throw new Error(error);
    }
  }

  async function deletePlayerById(url, id) {
    try {
      const response = await fetch(url + "/user/" + id, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(error);
      }
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updatePlayerState(url) {
    try {
      const playerId = playerStore.value.id;
      const response = await fetch(`${url}/user/${playerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playerStore: playerStore.value }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update player with ID ${playerId}.`);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  function sellFishAll(fish) {
    const targetFish = playerStore.value.caughtFish.find(
      (f) => f.id === fish.id
    );
    if (!targetFish) return;

    playerStore.value.coins += targetFish.price * targetFish.quantity;
    playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
      (f) => f.id !== fish.id
    );
    toastStore.showToast(`Sold all ${targetFish.name}`, "success");
    soundStore.playSellSuccessSound();
    updatePlayerState(import.meta.env.VITE_APP_URL);
  }

  function sellFish(fish) {
    const targetFish = playerStore.value.caughtFish.find(
      (f) => f.id === fish.id
    );
    if (!targetFish) return;

    playerStore.value.coins += targetFish.price;
    targetFish.quantity -= 1;

    if (targetFish.quantity === 0) {
      playerStore.value.caughtFish = playerStore.value.caughtFish.filter(
        (f) => f.id !== fish.id
      );
    }
    toastStore.showToast(`Sold 1 ${targetFish.name}`, "success");
    soundStore.playSellSuccessSound();
    updatePlayerState(import.meta.env.VITE_APP_URL);
  }

  function equipRod(rod) {
    if (!playerStore.value.ownedRods.find((r) => r.id === rod.id)) return;
    playerStore.value.usingRods = rod;
    toastStore.showToast(`Equipped ${rod.name}`, "success");
    soundStore.playUseRodSound();
    updatePlayerState(import.meta.env.VITE_APP_URL);
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
      const elapsed = (Date.now() - existingPotion.startTime) / 1000;
      existingPotion.remainingTime = Math.max(
        existingPotion.remainingTime - elapsed + potion.duration,
        0
      );
      existingPotion.startTime = Date.now(); 
    }

    if (potionTimers[potion.id]) clearTimeout(potionTimers[potion.id]);

    potionTimers[potion.id] = setTimeout(() => {
      playerStore.value.usingPotion = playerStore.value.usingPotion.filter(
        (p) => p.id !== potion.id
      );
      delete potionTimers[potion.id];

      updatePlayerState(import.meta.env.VITE_APP_URL);
    }, existingPotion.remainingTime * 1000);

    if (potion.quantity > 1) {
      potion.quantity -= 1;
    } else {
      playerStore.value.potions = playerStore.value.potions.filter(
        (p) => p.id !== potion.id
      );
    }
    toastStore.showToast(`Used ${potion.name}`, "success");
    updatePlayerState(import.meta.env.VITE_APP_URL);
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
    addPlayer,
    updatePlayerState,
  };
});
