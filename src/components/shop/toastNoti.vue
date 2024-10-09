<script setup>
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
</style>