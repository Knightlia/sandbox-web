import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Bubble from "$lib/components/Bubble.svelte";

describe("Bubble component", () => {

    test("should render props correctly", () => {
        const { container } = render(Bubble, {
            sender: "Name",
            message: "Test message.",
            timestamp: new Date().getTime()
        });

        const avatar = document.querySelector(".avatar");
        expect(avatar).not.toBeNull();

        expect(screen.getByText("Name")).toBeDefined();
        expect(screen.getByText("Test message.")).toBeDefined();
        expect(avatar!.innerHTML).toBe("N");
    });

    test("should format date correctly", () => {
        render(Bubble, {
            sender: "Name",
            message: "Test message.",
            timestamp: 1681283373770
        });

        expect(screen.getByText("8:09 am")).toBeDefined();
    });

    test("should render correctly if isSender is set", () => {
        const { container } = render(Bubble, {
            sender: "Name",
            message: "Test message.",
            timestamp: new Date().getTime(),
            isSender: true
        });

        const elements = container.querySelectorAll(".sender");
        expect(elements.length).toBeGreaterThan(0);
    });
});
