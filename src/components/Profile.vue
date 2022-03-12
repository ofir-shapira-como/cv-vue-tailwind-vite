<template>
  <div class="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-indigo-300 w-11/12 mx-auto space-y-5 ">
    <div class="flex flex-row space-x-3">
      <div class="min-w-0">
        <img alt="profile" class="w-48 h-48 xs:w-36 xs:h-36 object-cover rounded-md border-2 border-blue-500"
             src="/ofir-min.webp"/>
      </div>
      <div class="space-y-3 min-w-0">
        <div class="sm:text-6xl xs:text-3xl text-black font-semibold max-w-sm">
<!--          <input type="text" :value="name" class="rounded xs:max-w-xs"/>-->
          {{ name }}
        </div>
        <div class="sm:text-2xl xs:text-sm text-black  min-w-0">
<!--          <input type="text" :value="title" class="rounded max-w-xs"/>-->
          {{ title }}
        </div>
      </div>
    </div>

    <div class="text-md">
<!--      <textarea type="text" class="w-96 resize-none rounded max-w-xs" :value="education"/>-->
      {{education}}
    </div>
    <hr>
    <div class="">
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
