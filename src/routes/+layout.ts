import "$lib/styles/main.scss";
import { PUBLIC_VERSION } from "$env/static/public";

const environment = process.env.NODE_ENV;
if (environment === "production") {
    console.debug = () => undefined;
}
console.log(`Sandbox | ${PUBLIC_VERSION} | ${environment}`);

export const prerender = true;
