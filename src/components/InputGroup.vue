<script setup lang="ts">
import InputField from "@/components/InputField.vue";

defineProps<{
  inputGroup: {
    key: string;
    slug: string;
    title: string;
    input: {
      weight: number;
      leverArm: number;
      momentum: number;
    };
  };
  inputHandlerWeight: (e: Event) => void;
  inputHandlerLeverArm: (e: Event) => void;
}>();
</script>

<template>
  <div class="input-group">
    <div class="top">
      <h2>{{ inputGroup.title }}</h2>
      <span class="calculated"
        >{{ Number(inputGroup.input.momentum.toFixed(2)) || 0 }} kgm</span
      >
    </div>
    <InputField
      :id="`${inputGroup.slug}--weight`"
      :label="'Masse'"
      :value="inputGroup.input.weight"
      :inputHandler="inputHandlerWeight"
      :unit="'kg'"
    />
    <InputField
      :id="`${inputGroup.slug}--lever-arm`"
      :label="'Hebelarm'"
      :value="inputGroup.input.leverArm"
      :inputHandler="inputHandlerLeverArm"
      :unit="'m'"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss" as *;
@use "@/assets/styles/functions.scss" as *;

.input-group {
  margin-bottom: rem(70);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem(30);
}

.calculated {
  padding: rem(4) rem(10);
  font-size: rem(12);
  border-radius: rem(5);
  background-color: rgba($color-secondary, 0.4);
}

h2 {
  font-size: rem(18);
}
</style>
