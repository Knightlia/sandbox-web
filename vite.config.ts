import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ["**/*.{test,spec}.ts"],
        environment: "jsdom",
        globals: true
    }
});
