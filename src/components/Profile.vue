<template>
  <div class="p-6 max-w-5xl mx-auto bg-white rounded-sm shadow-2xl flex-row space-y-5">
    <div class="flex space-x-4 mb-5">
      <img alt="profile" class="w-48 h-48 object-cover rounded-md border-2 border-indigo-500" src="https://i.pravatar.cc/300"/>
      <div class="flex flex-col items-start">
        <h1 class="text-7xl text-black font-semibold">{{ name }}</h1>
        <h2 class="text-2xl text-black">Software Developer</h2>
        <h3 class="text-xl">
          BSc, Computer Engineering, The Hebrew University of Jerusalem
        </h3>
      </div>
    </div>
    <hr>
    <div>
      <slot name="content" />
    </div>
    <hr>
    <div class="flex flex-row space-x-2 justify-center">
      <Link url="https://www.linkedin.com/in/ofiris/">LinkedIn</Link>
      <Link url="https://github.com/ofir-shapira-como">GitHub</Link>
      <Link url="https://github.com/ofir-shapira-como">Contact</Link>
    </div>
  </div>

</template>

<script setup lang="ts">
import Link from "./Link.vue";

defineProps<{ name: string, title: string, education: string}>()

</script>

<style scoped>

</style>