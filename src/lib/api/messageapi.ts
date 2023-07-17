import UserSetting from "$lib/usersetting";
import { PUBLIC_API_URL } from "$env/static/public";

export default class MessageAPI {

    async execute(message: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[MessageAPI] Token not set.");
            return Promise.reject();
        }

        const res = await fetch(`${PUBLIC_API_URL}/message`, {
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
