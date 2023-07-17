import UserSetting from "$lib/usersetting";
import { modalVisible, userNickname } from "$lib/stores";
import { PUBLIC_API_URL } from "$env/static/public";

export default class NicknameAPI {

    async execute(nickname: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[NicknameAPI] Token not set.");
            return Promise.reject();
        }

        const res = await fetch(`${PUBLIC_API_URL}/nickname`, {
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
