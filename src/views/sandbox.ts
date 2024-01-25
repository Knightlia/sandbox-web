import m from "mithril";
import PreLoader from "../components/preloader";
import Chat from "../components/chat";

const Sandbox = {
    isLoading: false,

    view() {
        return this.isLoading ? m(PreLoader) : m(Chat);
    }
};

export default Sandbox;
