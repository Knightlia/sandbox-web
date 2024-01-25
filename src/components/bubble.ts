import m, { Vnode } from "mithril";
import { classes } from "../core/dom";

// Styles
const s: Record<string, string> = {
    bubble: "flex space-x-2 first:mt-auto",
    avatar: "bg-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold shrink-0",
    body: "bg-white border rounded-md shadow-sm px-3 py-2",
    d1: "space-x-2"
};

const sender: Record<string, string> = {
    bubble: classes(s.bubble, "flex-row-reverse space-x-reverse"),
    body: classes(s.body, "bg-indigo-600 text-white"),
    d1: classes(s.d1, "text-right")
};

// Attributes
interface BubbleAttrs {
    message: string;
    isSender?: boolean;
}

// Component
const Bubble = {
    view({ attrs }: Vnode<BubbleAttrs>) {
        const { message, isSender = false } = attrs;

        return m("div", { className: this._s("bubble", isSender) }, [
            m("div", { className: s.avatar }, "S"),
            m("div", { className: this._s("body", isSender) }, [
                m("div", { className: this._s("d1", isSender) }, [
                    m("strong", "Sender"),
                    m("small", "11:11 AM")
                ]),
                m("div", message)
            ])
        ]);
    },

    _s(style: string, isSender: boolean): string {
        return isSender ? sender[style] : s[style];
    }
};

export default Bubble;
