<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  value: string;
  inputHandler: (payload: Event) => void;
}>();
</script>

<template>
  <div class="form-field">
    <label :for="id">{{ label }}</label>
    <input
      type="number"
      :name="id"
      :id="id"
      :value="value"
      @input="inputHandler"
    />
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

input {
  padding: rem(15) rem(20);
  margin-top: rem(10);
  border: 3px solid $color-secondary;
  border-radius: rem(12);
  color: $color-grey;
  font-size: rem(16);
  background-color: transparent;
  outline: none;
}
</style>
