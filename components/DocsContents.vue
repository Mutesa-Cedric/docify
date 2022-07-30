<template>
  <div>
    <div class="text-base">
      <h3 class="uppercase text-gray-700 font-bold py-3">
        Section Header
      </h3>

      <nuxt-link to="doc-example" class="flex items-center pb-3 pr-5 text-gray-600 hover:text-gray-700">
        docs example
      </nuxt-link>

      <nuxt-link to="youtube-example" class="flex items-center pb-3 pr-5 text-gray-600 hover:text-gray-700">
        youtube example
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'DocsContent'
}
</script>