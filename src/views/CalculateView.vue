<script setup lang="ts">
import { reactive } from "vue";
import { computed } from "@vue/reactivity";
import InputGroup from "@/components/InputGroup.vue";

const state = reactive([
  {
    key: "emptyWeight",
    slug: "empty-weight",
    title: "Leermasse",
    input: {
      weight: 0,
      leverArm: 0,
      momentum: 0,
    },
  },
  {
    key: "frontSeats",
    slug: "front-seats",
    title: "Vordersitze",
    input: {
      weight: 0,
      leverArm: 0,
      momentum: 0,
    },
  },
  {
    key: "backSeats",
    slug: "back-seats",
    title: "Hintersitze",
    input: {
      weight: 0,
      leverArm: 0,
      momentum: 0,
    },
  },
  {
    key: "gas",
    slug: "gas",
    title: "Sprit",
    input: {
      weight: 0,
      leverArm: 0,
      momentum: 0,
    },
  },
  {
    key: "lugagge",
    slug: "lugagge",
    title: "Gepäck",
    input: {
      weight: 0,
      leverArm: 0,
      momentum: 0,
    },
  },
]);

const sumMomentum = computed(() => {
  return state.reduce((previousValue, currentValue) => {
    return (previousValue += currentValue.input.momentum);
  }, 0);
});

const sumWeights = computed(() => {
  return state.reduce((previousValue, currentValue) => {
    return (previousValue += currentValue.input.weight);
  }, 0);
});
</script>

<template>
  <div class="grid">
    <div class="content">
      <InputGroup
        v-for="inputGroup in state"
        :key="inputGroup.key"
        :inputGroup="inputGroup"
        :inputHandlerWeight="(e: Event) => {
          inputGroup.input.weight = parseFloat((e.target as HTMLInputElement | null)?.value || '');
          inputGroup.input.momentum = inputGroup.input.weight * inputGroup.input.leverArm;
        }"
        :inputHandlerLeverArm="(e: Event) => {
          inputGroup.input.leverArm = parseFloat((e.target as HTMLInputElement | null)?.value || '');
          inputGroup.input.momentum = inputGroup.input.weight * inputGroup.input.leverArm;
        }"
      />
      <div class="bottom">
        <div class="row sum momentum">
          <span class="label">Summe Momente:</span>
          <span>{{ Number(sumMomentum.toFixed(2)) || 0 }} kgm</span>
        </div>
        <div class="row sum weight">
          <span class="label">Summe Massen:</span>
          <span>{{ Number(sumWeights.toFixed(2)) || 0 }} kg</span>
        </div>
        <div class="row result">
          = {{ Number((sumMomentum / sumWeights).toFixed(2)) || 0 }} m
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/functions.scss" as *;

.content {
  grid-column: 2 / span 10;
  padding-top: rem(50);
}

.bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: rem(100);
  margin-bottom: rem(50);
  font-size: rem(18);
}

.sum {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:nth-child(1) {
    padding-bottom: rem(15);
    margin-bottom: rem(15);
    border-bottom: 2px solid #fff;
  }
}

.result {
  padding-top: rem(15);
  margin-top: rem(15);
  border-top: 2px solid #fff;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: translateY(-12px);
  }
}

.label {
  font-weight: bold;
}
</style>
