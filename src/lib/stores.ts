import { writable } from "svelte/store";

export const isLoading = writable(true);
export const sidebarVisible = writable(false);
export const messageList = writable<App.SingleMessage[]>([]);
export const userList = writable<string[]>([]);
export const dropdownVisible = writable(false);
export const modalVisible = writable(false);
export const userNickname = writable("Set name...");
