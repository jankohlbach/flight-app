<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="grid">
      <RouterLink to="/">calculate</RouterLink>
      <RouterLink to="/convert">convert</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss" as *;
@use "@/assets/styles/functions.scss" as *;

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: rem(20) 0;
  background-color: $color-secondary;
}

.grid {
  display: flex;
  justify-content: center;
  align-self: start;
}

a {
  padding: 0 rem(15);
  color: #fff;
  text-decoration: none;

  &.router-link-active {
    background-color: rgba($color-primary, 0.4);
  }
}
</style>
