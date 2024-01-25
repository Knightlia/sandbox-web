import m from "mithril";
import Button from "./button";
import { classes } from "../core/dom";
import ButtonType from "./button/buttontype";

const s = {
    d1: "m-3",
    section: "mt-2 text-right",
    editor: classes(
        "border rounded-md shadow-sm bg-white max-h-[5rem] overflow-y-auto px-3 py-2 outline-none border-slate-300",
        "focus:ring-1 focus:ring-slate-300 focus:ring-offset-2",
        "empty:before:content-[attr(placeholder)] empty:before:opacity-60"
    )
};

const Editor = {
    view() {
        return m("div", { className: s.d1 }, [
            m("div", {
                className: s.editor,
                contenteditable: true,
                placeholder: "Enter message..."
            }),
            m("div", { className: s.section }, [
                m(Button, { type: ButtonType.PRIMARY  }, "Send")
            ])
        ]);
    }
};

export default Editor;
