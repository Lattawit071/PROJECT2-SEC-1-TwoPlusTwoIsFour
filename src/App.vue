<template>
  <Loading v-if="page === 0" />
  <Menu v-if="page === 1" />
  <Play v-if="page === 5" />
  <Inventory v-if="page === 2" />
  <Shop v-if="page === 3" />
  <BookMark v-if="page === 4" />
</template>

<script setup>
import { ref, provide } from "vue";
import Loading from "./components/Loading.vue";
import Menu from "./components/Menu.vue";
import Play from "./components/Play.vue";
import Inventory from "./components/Inventory.vue";
import Shop from "./components/Shop.vue";
import BookMark from "./components/BookMark.vue";

const page = ref(0);
const togglePage = (newPage) => {
  page.value = newPage;
};

provide("togglePage", togglePage);
provide("page", page);
</script>
