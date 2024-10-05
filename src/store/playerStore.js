import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("playerStore", () => {
  const playerName = ref("Int203");
  const coins = ref(1000);
  const avatar = ref("/images/image/Player.png");

  const caughtFish = ref([]);
  const ownedRods = ref([
    {
      id: 1,
      name: "Basic Rod",
      quantity: 1,
      price: 0,
      icon: "/images/rod/Basic_Rod.png",
      hp: 50,
      maxHp: 50,
      type: "rod",
    },
  ]);
  const potions = ref([]);

  const usingRods = ref({
    id: 1,
    name: "Basic Rod",
    quantity: 1,
    price: 0,
    icon: "/images/rod/Basic_Rod.png",
    hp: 50,
    maxHp: 50,
    type: "rod",
  });
  const usingPotion = ref([]);

  // Function to add caught fish
  const addCaughtFish = (fish) => {
    const existingFish = caughtFish.value.find((f) => f.id === fish.id);
    if (existingFish) {
      existingFish.quantity += 1;
    } else {
      caughtFish.value.push({ ...fish, quantity: 1 });
    }
  };

  // Function to equip rods
  const equipRod = (rodId) => {
    const rod = ownedRods.value.find((rod) => rod.id === rodId);
    if (rod) {
      usingRods.value = rod;
    }
  };

  // Function to use potions
  const usePotion = (potion) => {
    const existingPotion = usingPotion.value.find((p) => p.id === potion.id);
    if (!existingPotion) {
      usingPotion.value.push({
        ...potion,
        remainingTime: potion.duration,
        startTime: Date.now(),
      });
    } else {
      // Update existing potion time
      existingPotion.remainingTime += potion.duration;
    }
  };

  return {
    playerName,
    coins,
    avatar,
    caughtFish,
    ownedRods,
    potions,
    usingRods,
    usingPotion,
    addCaughtFish,
    equipRod,
    usePotion,
  };
});
