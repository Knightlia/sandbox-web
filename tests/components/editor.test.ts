import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Editor from "$lib/components/Editor.svelte";

describe("Editor component", () => {

    test("should render", () => {
        const { container } = render(Editor);

        const editor = container.querySelector(".input");
        const btn = screen.getByRole("button");

        expect(editor).toBeDefined();
        expect(btn).toBeDefined();
    });
});
