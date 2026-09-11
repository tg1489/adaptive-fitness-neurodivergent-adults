import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig(({ command }) => ({
  plugins: [solid()],
  base: command === "build" ? "/adaptive-fitness-neurodivergent-adults/" : "/",
  server: {
    port: 3000,
    open: false,
  },
  build: {
    target: "esnext",
  },
}));
