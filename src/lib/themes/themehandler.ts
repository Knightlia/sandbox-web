import Theme from "$lib/themes/theme";

const ThemeHandler = {
    initTheme() {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => this._systemTheme());
    },

    setTheme(theme: Theme) {
        switch (theme) {
            case Theme.LIGHT:
                localStorage.setItem("theme", "light");
                break;
            case Theme.DARK:
                localStorage.setItem("theme", "dark");
                break;
            default:
                localStorage.removeItem("theme");
        }

        this._applyTheme();
    },

    /**
     * @private
     */
    _applyTheme() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },

    /**
     * @private
     */
    _systemTheme() {
        if (!("theme" in localStorage)) {
            this.setTheme(Theme.SYSTEM);
        }
    }
};

export default ThemeHandler;
