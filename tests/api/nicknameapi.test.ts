import UserSetting from "$lib/usersetting";
import { rest } from "msw";
import { setupServer, type SetupServer } from "msw/node";
import NicknameAPI from "$lib/api/nicknameapi";
import { modalVisible, userNickname } from "$lib/stores";

const restHandlers = [
    rest.post("http://localhost/nickname", (req, res, ctx) => {
        if (req.headers.get("token") === "error") {
            return res(ctx.status(401), ctx.json({ error: "error" }));
        }

        return res(ctx.status(200), ctx.json({}));
    })
];

describe("Nickname API", () => {

    let server: SetupServer;
    let nicknameAPI: NicknameAPI;

    beforeAll(() => {
        server = setupServer(...restHandlers);
        server.listen({ onUnhandledRequest: "error" });
    });

    beforeEach(() => {
        nicknameAPI = new NicknameAPI();
    });

    test("should not send request if token is not set", () => {
        UserSetting.token = "";
        expect(nicknameAPI.execute("nickname")).rejects.toBeUndefined();
    });

    test("should throw error if api response contains an error", () => {
        UserSetting.token = "error";
        expect(nicknameAPI.execute("nickname")).rejects.toThrowError();
    });

    test("should update user settings and state on successful call", async () => {
        let nicknameValue = "Set name...", modalVisibleValue = true;
        userNickname.subscribe(v => nicknameValue = v);
        modalVisible.subscribe(v => modalVisibleValue = v);

        UserSetting.token = "token";
        await nicknameAPI.execute("nickname");

        expect(UserSetting.nickname).toBe("nickname");
        expect(nicknameValue).toBe("nickname");
        expect(modalVisibleValue).toBeFalsy();
    });
});