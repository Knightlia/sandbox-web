import m, { ClassComponent } from "mithril";
import TopBar from "./topbar";
import { base, classes } from "../core/dom";
import Editor from "./editor";
import Bubble from "./bubble";
import Sidebar from "./sidebar";

const s = {
    base: classes(base, "flex flex-col"),
    d1: "flex-1 flex overflow-hidden",
    d2: "flex-1 flex flex-col",
    history: "flex-1 px-2.5 py-2 space-y-3 overflow-y-auto flex flex-col"
};

export default class Chat implements ClassComponent {

    /**
     * @override
     */
    view() {
        return m("div", { className: s.base }, [
            m(TopBar),
            m("div", { className: s.d1 }, [
                m("div", { className: s.d2 }, [
                    m("div", { className: s.history }, [
                        // NOTE: Chat bubbles displayed here
                        m(Bubble, {
                            message: "This is where the message will be."
                        }),
                        m(Bubble, {
                            message: "This is a much longer message that will span multiple lines."
                        }),
                        m(Bubble, {
                            message: "This is a much longer message that will span multiple lines.",
                            isSender: true
                        })
                    ]),
                    m(Editor)
                ]),
                m(Sidebar)
            ])
        ]);
    }
}
