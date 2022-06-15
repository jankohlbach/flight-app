<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  value: number;
  inputHandler: (payload: Event) => void;
  unit: string;
}>();
</script>

<template>
  <div class="form-field">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input
        type="number"
        :name="id"
        :id="id"
        :value="value"
        @input="inputHandler"
      />
      <span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss" as *;
@use "@/assets/styles/functions.scss" as *;

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: rem(25);
}

label {
  font-size: rem(16);
}

.input-wrapper {
  position: relative;
  margin-top: rem(10);
  border-radius: rem(12);
}

input {
  width: 100%;
  padding: rem(15) rem(20);
  border: 3px solid rgba($color-secondary, 0.5);
  border-radius: inherit;
  color: $color-grey;
  font-family: $font-primary;
  font-size: rem(16);
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgba($color-secondary, 1);
  }
}

.unit {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  width: rem(75);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  background-color: rgba($color-secondary, 0.4);
}
</style>
