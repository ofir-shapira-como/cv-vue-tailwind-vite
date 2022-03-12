<template>
  <div class="p-6 max-w-full mx-auto bg-white rounded-sm shadow-2xl hover:shadow-indigo-300 flex-row space-y-5">
    <div class="flex space-x-4 mb-5">
      <img alt="profile" class="w-48 h-48 object-cover rounded-md border-2 border-indigo-500"
           src="https://i.pravatar.cc/300"/>
      <div class="flex flex-col items-start space-y-2">
        <div class="text-6xl text-black font-semibold">
          <input type="text" :value="name" class="rounded max-w-lg" />
        </div>
        <div class="text-2xl text-black">
          <input  type="text" :value="title" class="rounded max-w-lg"/>
        </div>
        <div class="text-md">
          <textarea  type="text" class="w-96 resize-none" :value="education"/>
        </div>
      </div>
    </div>
    <hr>
    <div>
      <slot name="content"/>
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

defineProps<{ name: string, title: string, education: string }>()

</script>

<style scoped>

</style>
