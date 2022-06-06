<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "./components/BottomBar.vue";
</script>

<template>
  <RouterView />

  <BottomBar />
</template>

<style lang="scss">
@use "@/assets/styles/base.scss";
@use "@/assets/styles/grid.scss";
</style>
