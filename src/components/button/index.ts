import m, { Vnode } from "mithril";
import { classes } from "../../core/dom";
import ButtonType from "./buttontype";

/**
 * Base style for buttons.
 */
const sBase = classes(
    "text-sm select-none border rounded-md shadow-sm px-3 py-1.5 transition-all outline-none",
    "focus-visible:ring-1 focus-visible:ring-offset-2",
    "active:focus:scale-95"
);

const s: Record<ButtonType, string> = {
    [ButtonType.DEFAULT]: classes(
        sBase,
        "bg-white border-slate-300",
        "hover:bg-slate-100",
        "focus-visible:ring-slate-300"
    ),
    [ButtonType.PRIMARY]: classes(
        sBase,
        "bg-indigo-600 text-white border-indigo-700",
        "hover:bg-indigo-700",
        "focus-visible:ring-indigo-700"
    )
};

interface ButtonAttrs {
    type?: ButtonType;
    onclick?: (e?: MouseEvent) => void;
}

const Button = {
    view({ attrs, children }: Vnode<ButtonAttrs>) {
        const type = attrs.type || ButtonType.DEFAULT;

        return m("button", {
            className: s[type],
            onclick: attrs.onclick
        }, children);
    }
};

export default Button;
