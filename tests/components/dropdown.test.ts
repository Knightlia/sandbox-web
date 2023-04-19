import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import Dropdown from "$lib/components/dropdown/Dropdown.svelte";

describe("Dropdown component", () => {

    beforeEach(() => {
        render(Dropdown, {
            label: "Label"
        });
    });

    test("should be visible when clicking on label button", async () => {
        await fireEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("list")).toBeDefined();
    });
});
