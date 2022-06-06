<script setup lang="ts">
import { reactive } from "vue";
import InputField from "@/components/InputField.vue";

const state = reactive({
  gasLiter: 0,
  gasWeight: 0,
});
</script>

<template>
  <div class="grid">
    <div class="content">
      <h1>Umrechung Liter &lt;-&gt; Gewicht</h1>

      <InputField
        :id="'gas-liter'"
        :label="'Liter'"
        :value="state.gasLiter ? state.gasLiter.toFixed(2) : ''"
        :inputHandler="(e: Event) => {
          state.gasLiter = Number((e.target as HTMLInputElement | null)?.value)
          state.gasWeight = state.gasLiter * 0.72
        }"
      />

      <div class="icon">
        <svg
          width="16"
          height="42"
          viewBox="0 0 16 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM7.29289 41.7071C7.68342 42.0976 8.31658 42.0976 8.70711 41.7071L15.0711 35.3431C15.4616 34.9526 15.4616 34.3195 15.0711 33.9289C14.6805 33.5384 14.0474 33.5384 13.6569 33.9289L8 39.5858L2.34315 33.9289C1.95262 33.5384 1.31946 33.5384 0.928932 33.9289C0.538408 34.3195 0.538408 34.9526 0.928932 35.3431L7.29289 41.7071ZM7 1V41H9V1H7Z"
            fill="white"
          />
        </svg>
      </div>

      <InputField
        :id="'gas-weight'"
        :label="'Gewicht'"
        :value="state.gasWeight ? state.gasWeight.toFixed(2) : ''"
        :inputHandler="(e: Event) => {
          state.gasWeight = Number((e.target as HTMLInputElement | null)?.value)
          state.gasLiter = state.gasWeight / 0.72
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/functions.scss" as *;

.content {
  grid-column: 2 / span 10;
}

h1 {
  margin: rem(50) 0;
  font-size: rem(18);
}

.icon {
  display: flex;
  justify-content: center;
}
</style>
