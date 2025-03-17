import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MindFlow/", // نام مخزنت در GitHub رو بذار
});
