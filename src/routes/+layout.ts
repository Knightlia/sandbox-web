import "$lib/styles/main.scss";
import { PUBLIC_VERSION } from "$env/static/public";

console.log(`Sandbox | ${PUBLIC_VERSION} | ${process.env.NODE_ENV}`);

export const prerender = true;
