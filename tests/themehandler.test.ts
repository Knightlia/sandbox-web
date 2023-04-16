import { describe, expect, test, vi } from "vitest";
import ThemeHandler from "$lib/themes/themehandler";

describe("Theme handler", () => {
    test("should add event listener for dark theme changes", () => {
        // Mock matchMedia
        global.matchMedia = global.matchMedia || function () {
            return {
                matches: false,
                addEventListener: vi.fn(),
                dispatchEvent: vi.fn().mockImplementation(() => {
                    ThemeHandler._systemTheme();
                })
            };
        };

        const spy = vi.spyOn(ThemeHandler, "setTheme");

        ThemeHandler.initTheme();
        window.matchMedia("(prefers-color-scheme: dark)").dispatchEvent(new Event("change"));

        expect(spy).toBeCalled();
    });
});
