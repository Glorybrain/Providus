import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "mapbox-gl": "mapbox-gl/dist/mapbox-gl.js", // Fix for react-map-gl
	  'react-map-gl': 'react-map-gl/dist/es6'
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fix for ESM/CommonJS issues
    },
  },
});
