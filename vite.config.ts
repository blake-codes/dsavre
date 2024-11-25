import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional: Allows using `@/` for imports
    },
  },
  build: {
    outDir: "dist", // Ensure the output directory matches your Render deployment
  },
  server: {
    open: true, // Automatically open the app in the browser during development
  },
  // Handle SPA fallback for client-side routing
  base: "/", // Adjust if your app is hosted in a subdirectory
  esbuild: {
    jsxInject: `import React from 'react'`, // Ensures React is available globally
  },
});
