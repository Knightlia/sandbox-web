import MessageAPI from "$lib/api/messageapi";
import UserSetting from "$lib/usersetting";
import { rest } from "msw";
import { setupServer, type SetupServer } from "msw/node";

const restHandlers = [
    rest.post("http://localhost/message", (req, res, ctx) => {
        if (req.headers.get("token") === "error") {
            return res(ctx.status(401), ctx.json({ error: "error" }));
        }

        return res(ctx.status(200), ctx.json({}));
    })
];

describe("Message API", () => {

    let server: SetupServer;
    let messageAPI: MessageAPI;

    beforeAll(() => {
        server = setupServer(...restHandlers);
        server.listen({ onUnhandledRequest: "error" });
    });

    beforeEach(() => {
        messageAPI = new MessageAPI();
    });

    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    test("should not perform request if token not set", () => {
        UserSetting.token = "";
        expect(messageAPI.execute("nickname")).rejects.toBeUndefined();
    });

    test("should perform api request", async () => {
        UserSetting.token = "token";
        expect(messageAPI.execute("message")).resolves.not.toThrowError();
    });

    test("should throw error if an error response is returned from API", () => {
        UserSetting.token = "error";
        expect(messageAPI.execute("message")).rejects.toThrowError();
    });
});
