import m, { ClassComponent } from "mithril";
import Button from "./button";
import Container from "../core/container";
import EventBus from "../core/eventbus";

const s = {
    nav: "bg-white border-b flex justify-between py-1 px-2",
    section: "flex space-x-2 items-center",
    h3: "text-xl font-bold"
};

export default class TopBar implements ClassComponent {

    private readonly eventbus = Container.resolve(EventBus);

    /**
     * @override
     */
    view() {
        return m("nav", { className: s.nav }, [
            m("div", { className: s.section }, [
                m("h3", { className: s.h3 }, "Sandbox"),
                m(Button, "Set Name")
            ]),
            m("div", { className: s.section }, [
                m(Button, "C"),
                m(Button, { onclick: this._toggleUserList.bind(this) }, "U"),
                m(Button, "T")
            ])
        ]);
    }

    private _toggleUserList(): void {
        this.eventbus.publish("user.list.toggle");
    }
}
