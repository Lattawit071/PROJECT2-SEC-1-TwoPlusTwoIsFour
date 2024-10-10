<script setup>
defineEmits(["playHoverSound", "togglePage", "hook"]);
</script>

<template>
  <div class="relative w-full mt-auto">
    <div class="fixed left-0 bottom-0 w-full bg-[#4E342E]">
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Back.png"
        alt="Bottom Image"
        class="w-full object-contain"
      />
    </div>

    <div class="fixed left-0 bottom-0 w-full bg-[#4E342E] z-10">
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/front.png"
        alt="Top Image"
        class="w-full object-contain"
      />
    </div>

    <div
      class="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-transparent"
    >
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Home.png"
        alt="Home"
        @click="$emit('togglePage', 1)"
        class="w-16 md:w-20 transition-transform transform hover:scale-110 ml-10 md:ml-36 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/BackPack.png"
        alt="Inventory"
        @click="$emit('togglePage', 2)"
        class="w-20 md:w-24 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Play.png"
        alt="Hook"
        @click="$emit('hook')"
        class="w-24 md:w-32 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/Shop.png"
        alt="Shop"
        @click="$emit('togglePage', 3)"
        class="w-20 md:w-28 transition-transform transform hover:scale-110 cursor-pointer"
      />
      <img
        @mouseenter="$emit('playHoverSound')"
        src="/images/button/BookMark.png"
        alt="Bookmark"
        @click="$emit('togglePage', 4)"
        class="w-20 md:w-28 transition-transform transform hover:scale-110 mr-10 md:mr-36 cursor-pointer"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
