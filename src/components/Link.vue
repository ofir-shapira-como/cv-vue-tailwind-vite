<template>
  <a class="text-blue-600" :href="url" target="_blank">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{ url: string }>()

</script>

<style scoped>

</style>