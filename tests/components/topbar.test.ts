import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import TopBar from "$lib/components/TopBar.svelte";
import { messageList, sidebarVisible } from "$lib/stores";

interface SingleMessage {
    sender: string;
    message: string;
    timestamp: number;
}

describe("Top bar component", () => {

    beforeEach(() => {
        render(TopBar);
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
});
