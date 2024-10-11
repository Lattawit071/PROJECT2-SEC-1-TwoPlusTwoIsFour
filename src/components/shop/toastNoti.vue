<script setup>
const props = defineProps({
  showToast:{
    type:Boolean
  },
  showToastError:{
    type:Boolean
  },
  selectedItem:{
    type:Object
  }
})
</script>

<template>
    <div v-if="showToast" class="toast-notification">
      <div class="toast-content">
        <img :src="selectedItem.icon" class="toast-icon" alt="Item icon" />
        <div class="toast-message">
          <p>Successfully purchased {{ selectedItem.name }}</p>
        </div>
      </div>
    </div>

  <transition name="slide-fade">
    <div v-if="showToastError" class="toast-notification-error">
      <div class="toast-message-error">
        Not enough coins to purchase this item!
      </div>
    </div>
  </transition>
</template>

<style>
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
  ); /* สีเขียวพาสเทล */
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

.toast-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.toast-message {
  flex-grow: 1;
  color: #2e7d32;
  font-weight: bold;
}

.toast-notification-error {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  background: linear-gradient(
    45deg,
    #ffcccc,
    #ff9999,
    #ffb3b3,
    #ff9999,
    #ffcccc
  );
  background-size: 200%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 2px solid transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  max-width: 250px;
  font-size: 14px;
  text-align: center;
}

.toast-message-error {
  color: #c62828;
  font-weight: bold;
}
</style>