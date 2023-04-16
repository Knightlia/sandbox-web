<script lang="ts">
    import { dropdownVisible } from "$lib/stores";

    export let label: string;

    function clickOutside(node: HTMLElement) {
        const handleClick = (e: MouseEvent) => {
            if (!node.contains(e.target as HTMLElement)) {
                node.dispatchEvent(new CustomEvent("outclick"));
            }
        };

        document.addEventListener("click", handleClick, true);
        return {
            destroy(): void {
                document.removeEventListener("click", handleClick, true);
            }
        };
    }

    function hideDropdown(): void {
        $dropdownVisible = false;
    }
</script>

<div>
    <button on:click={() => $dropdownVisible = true}>
        {label}
    </button>
    <ul class:invisible={!$dropdownVisible} use:clickOutside on:outclick={hideDropdown}>
        <slot/>
    </ul>
</div>

<style lang="scss">
    @import "$lib/styles/mixin";

    ul {
        @include shadow();
        @include transition-all();
        position: absolute;
        right: 0;
        width: 13rem;
        border: 1px solid var(--main-border);
        border-radius: 0.5rem;
        background: var(--dropdown-background);
        color: var(--dropdown-color);
        z-index: 1;
        margin: 0.25rem 0.5rem 0 0;
        padding: 0.5rem;
    }

    .invisible {
        visibility: hidden;
        opacity: 0;
    }
</style>
