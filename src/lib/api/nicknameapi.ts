import UserSetting from "$lib/usersetting";
import { modalVisible, userNickname } from "$lib/stores";

export default class NicknameAPI {

    private readonly _url = import.meta.env.VITE_API_URL;

    async execute(nickname: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[NicknameAPI] Token not set.");
            return Promise.reject();
        }

        const res = await fetch(`${this._url}/nickname`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: UserSetting.token
            },
            body: JSON.stringify({ nickname })
        });

        const json = await res.json();

        if (json.error) {
            throw Error(json.error);
        }

        UserSetting.nickname = nickname;
        userNickname.set(nickname);
        modalVisible.set(false);
    }
}
