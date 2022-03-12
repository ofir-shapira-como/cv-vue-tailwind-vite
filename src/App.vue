<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Profile from "./components/Profile.vue";
import Link from "./components/Link.vue";

</script>

<template>
  <Profile
      name="Ofir Shapira"
      title="Software Developer"
      education="BSc, Computer Engineering, The Hebrew University of Jerusalem"
      class="mx-20 mx-auto"
  >
    <template v-slot:content>
      Hi, I am Ofir, I created this basic profile page because I wanted to play around with
      <Link text="vite" url="https://vitejs.dev/">Vite</Link>,
      <Link url="https://vuejs.org/">Vue 3 (TS)</Link>
      and
      <Link url="https://tailwindcss.com/">Tailwind</Link>
    </template>
  </Profile>
</template>

<style>
/*noinspection CssUnusedSymbol*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
