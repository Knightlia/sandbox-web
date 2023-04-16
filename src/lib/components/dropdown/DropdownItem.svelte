<script lang="ts">
    export let label: string,
               onclick: () => void;
</script>

<li class="py-2 px-3" on:click={onclick} on:keydown={onclick}>
    {label}
</li>

<style lang="scss">
    @import "$lib/styles/mixin/index";

    li {
        @include transition();
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
            background: var(--dropdown-hover);
        }

        &:active {
            background: var(--dropdown-active);
        }
    }
</style>
