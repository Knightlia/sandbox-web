import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ["**/*.{test,spec}.ts"],
        environment: "jsdom",
        globals: true,
        env: {
            VITE_API_URL: "http://localhost"
        }
    }
});
