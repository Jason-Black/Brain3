import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/jason-black/brain3/', // Make sure this matches your repository name
    plugins: [react()],
});
