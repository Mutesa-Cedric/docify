<template>
  <div
    class="
      fixed
      z-10
      flex flex-shrink-0
      h-16
      w-full
      max-w-6xl
      items-center
      justify-between
      bg-white
      border-b-2 border-gray-100
    "
  >
    <!-- Mobile menu button -->
    <button class="md:hidden items-center px-4" @click="showMobileMenu">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div class="hidden md:flex px-4">
      <a href="/">
        <logo class="h-8 w-8" />
      </a>
    </div>

    <!-- search -->
    <Search class="border-solid border-2 border-gray-400" />

   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  </div>
</template>

<script>

import {GlobeIcon} from '@vue-hero-icons/outline'
import Search from './Search.vue'
export default {
    components: { Search }
};
</script>

<style>
</style>