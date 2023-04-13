declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}

        interface SingleMessage {
            sender: string;
            message: string;
            timestamp: number;
        }
    }
}

export {};
