<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  gasLiter: 0,
  gasWeight: 0,
});
</script>

<template>
  <div class="grid">
    <div class="content">
      <h1>Umrechung Liter &lt;-&gt; Gewicht</h1>
      <div class="form-field">
        <label for="gas-liter">Liter</label>
        <input
          type="number"
          name="gas-liter"
          id="gas-liter"
          :value="state.gasLiter ? state.gasLiter.toFixed(2) : ''"
          @input="(e) => {
            state.gasLiter = Number((e.target as HTMLInputElement | null)?.value)
            state.gasWeight = state.gasLiter * 0.72
          }"
        />
      </div>
      <div class="form-field">
        <label for="gas-weight">Gewicht</label>
        <input
          type="number"
          name="gas-weight"
          id="gas-weight"
          :value="state.gasWeight ? state.gasWeight.toFixed(2) : ''"
          @input="(e) => {
            state.gasWeight = Number((e.target as HTMLInputElement | null)?.value)
            state.gasLiter = state.gasWeight / 0.72
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  grid-column: 2 / span 10;
}
</style>
