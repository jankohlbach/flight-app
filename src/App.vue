<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "./components/BottomBar.vue";
</script>

<template>
  <main>
    <RouterView />

    <BottomBar />
  </main>
</template>

<style lang="scss">
@use "@/assets/styles/base.scss";
@use "@/assets/styles/grid.scss";
@use "@/assets/styles/functions.scss" as *;

main {
  padding-bottom: rem(120);
}
</style>
