import "tailwindcss/tailwind.css";

import m from "mithril";
import Sandbox from "./views/sandbox";
import Container from "./core/container";
import EventBus from "./core/eventbus";

// Register objects
Container.register(EventBus);

// Setup routes
m.route(document.body, "/", {
    "/": Sandbox
});
