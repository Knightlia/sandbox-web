import { describe, expect, test } from "vitest";
import { render } from "@testing-library/svelte";
import Index from "../../src/routes/+page.svelte";

describe("Index route", () => {
    test("should render pre-loader by default", () => {
        const { container } = render(Index);

        const element = container.querySelector(".preloader");
        expect(element).toBeDefined();
    });
});
