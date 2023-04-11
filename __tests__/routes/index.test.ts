import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Index from "../../src/routes/+page.svelte";

describe("Index route", () => {
    test("should render", () => {
        render(Index);
        const header = screen.getByRole("heading");
        expect(header.textContent).toBe("Hello World!");
    });
});
