import { writable } from "svelte/store";

export const sidebarVisible = writable(false);
export const messageList = writable<App.SingleMessage[]>([]);

export const userList = writable<string[]>([]);
