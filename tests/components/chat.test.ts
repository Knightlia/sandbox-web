import { describe, expect, test } from "vitest";
import { render } from "@testing-library/svelte";
import Chat from "$lib/components/Chat.svelte";

describe("Chat component", () => {

    test("should render", () => {
        const { container } = render(Chat);
        expect(container.querySelector(".chat")).toBeDefined();
    });
});
