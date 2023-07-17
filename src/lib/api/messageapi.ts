import UserSetting from "$lib/usersetting";

export default class MessageAPI {

    private readonly _url = import.meta.env.VITE_API_URL;

    async execute(message: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[MessageAPI] Token not set.");
            return Promise.reject();
        }

        const res = await fetch(`${this._url}/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: UserSetting.token
            },
            body: JSON.stringify({
                message: message,
                timestamp: new Date().getTime()
            })
        });

        const json = await res.json();

        if (json.error) {
            throw Error(json.error);
        }
    }
}
