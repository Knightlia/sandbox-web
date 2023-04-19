import { PUBLIC_WS_URL } from "$env/static/public";
import { isLoading, messageList, userList, userNickname } from "$lib/stores";
import UserSetting from "$lib/usersetting";

class WebSocketHandler {

    /**
     * Reference to the user nickname.
     * @private
     */
    private _nickname = "";

    /**
     * Reference to the interval job that sends pings to the websocket server.
     * Used to cancel the job when the connection closes.
     * @private
     */
    private _ping = 0;

    constructor() {
        userNickname.subscribe(val => {
            this._nickname = val;
            userList.update(v => v);
        });
    }

    connect() {
        const ws = new WebSocket(PUBLIC_WS_URL);
        ws.onopen = () => this._onOpen(ws);
        ws.onmessage = e => this._onMessage(e);
        ws.onclose = this._onClose;
        ws.onerror = this._onError;
    }

    /**
     * Sets up an interval job every 30 seconds to send a ping message.
     * @param ws The websocket object to send the ping message with.
     * @private
     */
    private _onOpen(ws: WebSocket): void {
        console.debug("Connected to websocket.");
        this._ping = window.setInterval(() => {
            ws.send("ping");
            console.debug("Sent websocket ping message.");
        }, 30000);
    }

    private async _onMessage(e: MessageEvent): Promise<void> {
        const data = JSON.parse(await (e.data as Blob).text());
        console.debug(data);

        switch (data.mt) {
            case "TOKEN_PAYLOAD":
                UserSetting.token = data.t;
                isLoading.set(false);
                break;
            case "USER_LIST_PAYLOAD":
                userList.set(data.ul);
                break;
            case "MESSAGE_PAYLOAD":
                const sender = data.s, message = data.m, timestamp = data.t, isSender = data.s === this._nickname;
                messageList.update(m => [...m, { sender, message, timestamp, isSender }]);
                break;
            default:
                console.error("Did not receive a valid websocket message.");
        }
    }

    private _onClose(e: CloseEvent): void {
        console.debug("Websocket connection closed with status:", e.code);
        clearInterval(this._ping);
    }

    private _onError(e: Event): void {
        console.error("Error in websocket connection:", e);
    }
}

export default new WebSocketHandler();
