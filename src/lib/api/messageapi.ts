import { PUBLIC_API_URL } from "$env/static/public";
import UserSetting from "$lib/usersetting";

class MessageAPI {

    async execute(message: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[NicknameAPI] Token not set.");
            return;
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

export default new MessageAPI();
