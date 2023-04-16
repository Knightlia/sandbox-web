import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import PreLoader from "$lib/components/PreLoader.svelte";

describe("PreLoader component", () => {

    test("should render", () => {
        render(PreLoader);
        expect(screen.getByAltText("Sandbox - Loading")).toBeDefined();
    });
});
