<script setup>
import { ref } from "vue";
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
const newPlayerName = ref(""); // รับเฉพาะชื่อจากผู้ใช้

const emit = defineEmits(["close", "refresh"]);

const handleAddPlayer = async () => {
  const newPlayer = {
    id: "",
    playerStore: {
      id: "",
      name: newPlayerName.value,
      coins: 100000,
      avatar: "/images/image/Player.png",
      ownedRods: [
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
      ],
      caughtFish: [],
      potions: [],
      usingRods: {
        id: 1,
        name: "Basic Rod",
        quantity: 1,
        price: 0,
        icon: "/images/rod/Basic_Rod.png",
        hp: 50,
        maxHp: 50,
        type: "rod",
      },
      usingPotion: [],
      level: 1,
      exp: 0,
      Bookmarks: [],
    },
  };

  try {
    await playerStore.addPlayer(`${import.meta.env.VITE_APP_URL}`, newPlayer);
    emit("refresh"); // อัปเดตข้อมูลผู้เล่นใหม่
    newPlayerName.value = ""; // ล้างค่าอินพุต
    emit("close");
  } catch (error) {
    console.error("Failed to add player:", error);
  }
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-1/3">
      <h2 class="text-yellow-950 text-2xl font-bold mb-4">Add New Player</h2>
      <input
        v-model="newPlayerName"
        class="bg-stone-300 text-yellow-950 font-bold w-full p-2 border rounded mb-2"
        placeholder="Player Name"
      />
      <div class="flex justify-end space-x-4 mt-4">
        <button @click="emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
        <button @click="handleAddPlayer" class="bg-yellow-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>