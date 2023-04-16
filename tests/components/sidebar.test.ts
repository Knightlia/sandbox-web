import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import { sidebarVisible } from "$lib/stores";

describe("Sidebar component", () => {

    test("should render", () => {
        render(Sidebar);
        expect(screen.getByRole("complementary")).toBeDefined();
    });

    test("should toggle sidebar when clicking on the overlay", async () => {
        let sidebarVisibleValue = true;
        sidebarVisible.subscribe(v => sidebarVisibleValue = v);
        sidebarVisible.set(true);

        const { container } = render(Sidebar);

        const overlay = container.querySelector<HTMLElement>(".overlay");
        expect(overlay).not.toBeNull();

        await fireEvent.click(overlay!);
        expect(sidebarVisibleValue).toBeFalsy();

        await fireEvent.keyDown(overlay!);
        expect(sidebarVisibleValue).toBeTruthy();
    });
});
