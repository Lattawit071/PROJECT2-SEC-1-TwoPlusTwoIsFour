<script setup>
import { useToastStore } from '../../stores/toast.js';
import { storeToRefs } from 'pinia';

const toastStore = useToastStore();
const { showToastInventory, toastMessage } = storeToRefs(toastStore);
</script>
 
<template>
    <div v-if="showToastInventory" class="toast-notification">
      <div class="toast-content">
        <div class="toast-message">
          <p>{{ toastMessage }}</p>
        </div>
      </div>
    </div>
</template>
 
<style scoped>
 .toast-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(
    45deg,
    #a8e6cf,
    #dcedc1,
    #f6ffed,
    #dcedc1,
    #a8e6cf
  );
  background-size: 200%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: pastel-border 3s linear infinite, slideUpFadeIn 0.5s ease;
  z-index: 1000;
  max-width: 250px;
  font-size: 14px;
}

.toast-content {
  display: flex;
  align-items: center;
}

.toast-message {
  flex-grow: 1;
  color: #2e7d32;
  font-weight: bold;
}
</style>
