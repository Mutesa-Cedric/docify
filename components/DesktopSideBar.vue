<template>
  <div class="bg-white hidden md:flex">
    <div class="flex flex-col w-64">
      <div
        class="fixed pl-3 pt-16 pb-6 pr-12 h-full justify-left overflow-y-auto"
      >
        <ExternalLinks class="flex flex-col pt-12" />
        <DocsContents class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script>
import DocsContents from "./DocsContents.vue";
import ExternalLinks from "./ExternalLinks.vue";
export default { components: { DocsContents, ExternalLinks } };
</script>

<style>
</style>