<template>
  <div class="w-full max-w-6xl">
    <h1 class="text-3xl font-semibold text-gray-9000 pb-8">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("documentation", params.doc).fetch();
    return { doc };
  },
};
</script>

<style scoped>

h2,h3{
  @apply font-semibold pb-3;
}
a{
  @apply underline;
}
</style>