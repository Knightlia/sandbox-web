const errorCodes: Record<string, string> = {
    "error.token.invalid": "Token is invalid. Please refresh the page.",
    "error.nickname.format": "Invalid nickname format.",
    "error.nickname.exists": "Nickname already exists."
};

export default function GetErrorMessage(code: string): string {
    let msg = errorCodes[code];
    if (!msg) {
        msg = "Unexpected error occurred.";
    }

    return msg;
};
