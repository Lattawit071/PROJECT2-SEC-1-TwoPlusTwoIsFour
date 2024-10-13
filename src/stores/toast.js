import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore('toast', () => {
  const showToastInventory = ref(false);
  const toastMessage = ref("");

  function showToast(message) {
    toastMessage.value = message;
    showToastInventory.value = true;
    setTimeout(() => {
      showToastInventory.value = false;
    }, 4000);
  }

  return {
    showToastInventory,
    toastMessage,
    showToast
  };
});
