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
      <nuxt-link to="/">
        <img src="https://www.insperity.com/wp-content/uploads/document_HR__1200x600.png" class="h-10 w-10 rounded-full" />
      </nuxt-link>
    </div>

    <!-- search -->
    <Search class="border-solid border-2 border-gray-400" />

  <GlobeIcon/>
  </div>
</template>

<script>
import Search from './Search.vue'
import GlobeIcon from './GlobeIcon.vue';
export default {
    components: { Search, GlobeIcon },
    methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu') // closes the mobile menu if in open state and when route changes
    }
  }
};
</script>

<style>
</style>