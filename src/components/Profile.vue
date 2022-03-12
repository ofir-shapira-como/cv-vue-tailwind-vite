<template>
  <div class="p-6 max-w-5xl mx-auto bg-white rounded-sm shadow-lg">
    <div class="flex space-x-4">
      <img class="rounded-md" width="200" height="200" src="https://i.pravatar.cc/300"/>
      <div class="flex flex-col items-start">
        <h1 class="text-7xl text-black font-semibold">Ofir Shapira</h1>
        <h2 class="text-2xl text-black">Software Developer</h2>
        <h3 class="text-xl">
          BSc, Computer Engineering, The Hebrew University of Jerusalem
        </h3>
      </div>
    </div>

    <hr>
    <div>
      I created this basic profile page because I wanted to play around with
      <Link url="https://vitejs.dev/">Vite</Link>
      ,
      <Link url="https://vuejs.org/">Vue 3 (TS)</Link>
      and
      <Link url="https://tailwindcss.com/">Tailwind</Link>
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
</script>

<style scoped>

</style>