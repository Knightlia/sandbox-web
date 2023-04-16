import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import TopBar from "$lib/components/TopBar.svelte";
import { messageList, sidebarVisible } from "$lib/stores";
import ThemeHandler from "$lib/themes/themehandler";

interface SingleMessage {
    sender: string;
    message: string;
    timestamp: number;
}

describe("Top bar component", () => {

    beforeEach(() => {
        render(TopBar);
    });

    afterEach(() => {
        document.documentElement.innerHTML = "";
    });

    test("should render", () => {
        expect(screen.getByRole("navigation")).toBeDefined();
    });

    test("should set messageList store to be empty when clicking on clear messages button", async () => {
        let messageListValue: SingleMessage[] = [];
        messageList.subscribe(v => messageListValue = v);

        messageList.set([{ sender: "", message: "", timestamp: 0 }])
        expect(messageListValue.length).toBe(1);

        const btn = screen.getAllByRole("button")[1];
        await fireEvent.click(btn);

        expect(messageListValue.length).toBe(0);
    });

    test("should toggle sidebarVisible store when clicking on userList button", async () => {
        let sidebarVisibleValue = true;
        sidebarVisible.subscribe(v => sidebarVisibleValue = v);

        const btn = screen.getAllByRole("button")[2];

        await fireEvent.click(btn);
        expect(sidebarVisibleValue).toBeTruthy();

        await fireEvent.click(btn);
        expect(sidebarVisibleValue).toBeFalsy();
    });

    test("should call setTheme in the theme handler when theme dropdown items are clicked", async () => {
        // Mock matchMedia
        global.matchMedia = global.matchMedia || function () {
            return {
                matches: false
            };
        };

        const spy = vi.spyOn(ThemeHandler, "setTheme");

        const items = screen.getAllByRole("listitem");
        for (const i of items) {
            await fireEvent.click(i);
            expect(spy).toBeCalled();
        }
    });
});
