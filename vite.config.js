// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "TimePickerClock",
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "dayjs", "prop-types"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          dayjs: "dayjs",
          "prop-types": "PropTypes"
        }
      }
    },
    sourcemap: true
  }
});