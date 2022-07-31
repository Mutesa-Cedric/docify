export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "docify",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://www.insperity.com/wp-content/uploads/document_HR__1200x600.png",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-instantsearch"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-content-algolia",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  nuxtContentAlgolia: {
    appId: process.env.APP_ID,
    apiKey: process.env.PRIVATE_API_KEY,
    paths: [
      {
        name: "documentation",
        index: "doc",
        fields: ["title", "description", "bodyPlainText"],
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-instantsearch", "instantsearch.js/es"],
  },
  hooks: {
    "content:file:beforeInsert": (document) => {
      const removeMd = require("remove-markdown");
      if (document.extension === "md") {
        document.bodyPlainText = removeMd(document.text);
      }
    },
  },
};
