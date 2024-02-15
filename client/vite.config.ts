import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:5544/api/v1",
        target: "https://azmari-server.onrender.com/api/v1",
        changeOrigin: true,
      },
    },
  },
});
