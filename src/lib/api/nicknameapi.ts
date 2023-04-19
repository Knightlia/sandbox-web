import { PUBLIC_API_URL } from "$env/static/public";
import UserSetting from "$lib/usersetting";
import { modalVisible, userNickname } from "$lib/stores";

class NicknameAPI {

    async execute(nickname: string): Promise<void> {
        if (!UserSetting.token) {
            console.debug("[NicknameAPI] Token not set.");
            return;
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

export default new NicknameAPI();
