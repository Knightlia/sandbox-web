<script lang="ts">
    import { messageList, sidebarVisible } from "$lib/stores";
</script>

<nav class="px-3 py-2">
    <div class="menu">
        <h3>Sandbox</h3>
        <button>Set Name...</button>
    </div>
    <div class="menu">
        <button on:click={() => $messageList = []}>C</button>
        <button on:click={() => sidebarVisible.update(v => !v)}>U</button>
        <button>T</button>
    </div>
</nav>

<style lang="scss">
    @import "$lib/styles/mixin/main";

    nav {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $slate-200;
        background: white;
    }

    .menu {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 0.5rem;
        }
    }
</style>
