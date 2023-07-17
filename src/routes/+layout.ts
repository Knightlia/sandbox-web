import "$lib/styles/main.scss";

const environment = process.env.NODE_ENV;
if (environment === "production") {
    console.debug = () => undefined;
}
console.log(`Sandbox | ${import.meta.env.VITE_VERSION} | ${environment}`);

export const prerender = true;
