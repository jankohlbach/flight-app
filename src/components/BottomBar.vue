<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="grid">
      <RouterLink to="/">
        <svg
          width="50"
          height="50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.333 9v13.333M22 15.667H8.667M20.142 31.047l-9.428 9.428M20.142 40.475l-9.428-9.428M42 15.667H28.667M42 35.667H28.667"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="35.333" cy="31.667" r="1.333" fill="#fff" />
          <circle cx="35.333" cy="39.667" r="1.333" fill="#fff" />
        </svg>
      </RouterLink>
      <RouterLink to="/convert">
        <svg
          width="50"
          height="50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.923 9c-6.214 7.658-6.905 14.77 0 14.77s6.214-7.112 0-14.77Z"
            stroke="#fff"
            stroke-width="1.42"
          />
          <circle
            cx="36.539"
            cy="27.13"
            r="1.373"
            stroke="#fff"
            stroke-width=".947"
          />
          <path
            d="M42.673 41h-12.27a.923.923 0 0 1-.881-1.194l3.124-10.154a.923.923 0 0 1 .882-.652h6.021c.405 0 .763.264.882.652l3.125 10.154A.923.923 0 0 1 42.673 41Z"
            stroke="#fff"
            stroke-width="1.42"
          />
          <path
            d="M21.77 15.154h12.307a2.461 2.461 0 0 1 2.462 2.461v3.693m0 0L39 18.846m-2.461 2.462-2.462-2.462M26.692 34.846H14.385a2.461 2.461 0 0 1-2.462-2.461v-3.693m0 0-2.461 2.462m2.461-2.462 2.462 2.462"
            stroke="#fff"
            stroke-width="1.846"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </RouterLink>
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
  padding: rem(15) 0;
  background-color: $color-secondary;
  border-top-left-radius: 100% 50%;
  border-top-right-radius: 100% 50%;
}

.grid {
  display: flex;
  justify-content: center;
}

a {
  display: flex;
  align-items: center;
  padding: rem(5) rem(6);
  margin: 0 rem(15);
  color: #fff;
  text-decoration: none;
  border-radius: rem(12);

  &.router-link-active {
    background-color: rgba($color-primary, 0.4);
  }
}
</style>
