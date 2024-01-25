import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{html,ts,svg}"],
    experimental: {
        optimizeUniversalDefaults: true
    }
};

export default config;
