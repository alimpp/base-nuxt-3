export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  ssr: true,
  devtools: { enabled: false },
  css: ["@/assets/scss/main.scss"],
  imports: {
    autoImport: true,
    dirs: ["stores"],
  },
});
