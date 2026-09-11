import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ command }) => ({
  plugins: [
    solid(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg", "icons/*.png", "icons/*.svg"],
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "unsplash-images",
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/i\.pravatar\.cc\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "avatars",
              expiration: { maxEntries: 30, maxAgeSeconds: 7 * 24 * 60 * 60 },
            },
          },
        ],
        navigateFallback: command === "build" ? "/adaptive-fitness-neurodivergent-adults/index.html" : "/index.html",
      },
      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        type: "module",
      },
    }),
  ],
  base: command === "build" ? "/adaptive-fitness-neurodivergent-adults/" : "/",
  server: {
    port: 3000,
    open: false,
  },
  build: {
    target: "esnext",
  },
}));
