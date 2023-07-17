import GetErrorMessage from "$lib/api/errorcodes";

describe("Error codes", () => {

     test("should return error message with a valid code", () => {
          const msg = GetErrorMessage("error.nickname.exists");
          expect(msg).toBe("Nickname already exists.");
     });

     test("should return default error message on unknown error code", () => {
          const msg = GetErrorMessage("unknown.error.message.test");
          expect(msg).toBe("Unexpected error occurred.");
     });
});