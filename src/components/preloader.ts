import m from "mithril";
import logo from "../assets/logo.webp";
import { base, classes } from "../core/dom";

const s = {
    preloader: classes(base, "flex flex-col justify-center items-center"),
    spinner: "mt-2 w-12 h-12 border-8 border-indigo-400 rounded-full border-t-transparent animate-spin"
};

const PreLoader = {
    view() {
        return m("div", { className: s.preloader }, [
            m("img", {
                src: logo,
                height: 190,
                width: 190,
                alt: "Sandbox Web - Loading"
            }),
            m("div", { className: s.spinner })
        ]);
    }
};

export default PreLoader;
