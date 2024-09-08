<script setup lang="ts">
import { useCounterStore } from './counter.store'

const counterStore = useCounterStore()

</script>

<template>
  <h1>Vue 3 + Pinia + Pinia Persist</h1>
  <p>Count: {{ counterStore.count }}</p>
  <button @click="counterStore.increment">Increment</button>
</template>