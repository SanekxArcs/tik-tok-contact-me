import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  host: true,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
