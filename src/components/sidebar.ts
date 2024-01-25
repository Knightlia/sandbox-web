import m, { ClassComponent } from "mithril";
import { classes } from "../core/dom";
import Container from "../core/container";
import EventBus from "../core/eventbus";

const s = {
    overlay: "fixed bg-black/50 left-0 h-full w-full md:hidden",
    sidebar: classes(
        "fixed right-0 bg-white h-full w-[250px] border-l text-center transition-all",
        "md:relative"
    ),
    h3: "border-b py-2 text-lg font-bold",
    ul: classes(
        "py-1 overflow-y-auto h-[calc(100%-45px-43px)]",
        "md:h-[calc(100%-45px)]"
    ),
    collapsed: "-mr-[250px]"
};

export default class Sidebar implements ClassComponent {

    private readonly eventbus = Container.resolve(EventBus);

    private _hidden = false;

    /**
     * @override
     */
    oninit() {
        this.eventbus.subscribe("user.list.toggle", this._toggleSidebar, this);
        this._hidden = screen.width <= 768;
    }

    /**
     * @override
     */
    view() {
        const classname = this._hidden ? classes(s.sidebar, s.collapsed) : s.sidebar;

        return m("div", [
            m("div", {
                className: this._hidden ? "hidden" : s.overlay,
                onclick: this._toggleSidebar.bind(this)
            }),
            m("aside", { className: classname }, [
                m("h3", { className: s.h3 }, "User List (0)"),
                m("ul", { className: s.ul }, [
                    m("li", "First"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Person"),
                    m("li", "Last")
                ])
            ])
        ]);
    }

    private _toggleSidebar(): void {
        this._hidden = !this._hidden;
    }
}
