<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import {ref} from 'vue'
import Profile from "./components/Profile.vue";
import Link from "./components/Link.vue";
import {Switch} from "@headlessui/vue";

const hasGradientBackground = ref(true)


</script>

<template>
  <div :class="hasGradientBackground ? 'bg-gradient-to-b from-cyan-200 to-blue-500' : 'bg-white'" style="height: 100vh"
       class="absolute">
    <div class="right-0 absolute pt-4 pr-4">
      <Switch
          v-model="hasGradientBackground"
          :class="hasGradientBackground ? 'bg-teal-900' : 'bg-teal-700'"
          class="relative inline-flex items-center h-6 rounded-full w-11"
      >
        <span class="sr-only">Enable notifications</span>
        <span
            :class="hasGradientBackground ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block w-4 h-4 transform bg-white rounded-full"
        />
      </Switch>
    </div>
    <Profile
        name="Ofir Shapira"
        title="Software Developer"
        education="BSc, Computer Engineering, The Hebrew University of Jerusalem"
        class="mt-12"
    >
      <template v-slot:content>
        Hi, I am Ofir, I am a Software Developer from Israel, I created this basic profile page because I wanted to play
        around with
        <Link url="https://vitejs.dev/">Vite</Link>
        ,
        <Link url="https://vuejs.org/">Vue 3 (TS)</Link>
        and
        <Link url="https://tailwindcss.com/">Tailwind</Link>
        <br>
        The source code is available
        <Link url="https://github.com/ofir-shapira-como/cv-vue-tailwind-vite">here</Link>
      </template>
    </Profile>
  </div>
</template>

<style>
/*noinspection CssUnusedSymbol*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
