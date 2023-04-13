<script lang="ts">
    import { sidebarVisible, userList } from "$lib/stores";
    import { onMount } from "svelte";

    onMount(() => {
        $sidebarVisible = screen.width >= 768;
    });
</script>

<div>
    <div
        class:overlay="{$sidebarVisible}"
        on:click={() => sidebarVisible.update(v => !v)}
        on:keydown={() => sidebarVisible.update(v => !v)}
    ></div>
    <aside class:collapsed="{!$sidebarVisible}">
        <header class="py-2">
            <h4>User List</h4>
        </header>
        <ul class="py-1">
            {#each $userList as user}
                <li>{user}</li>
            {/each}
        </ul>
    </aside>
</div>

<!-- HACK: Height is the 100% - the TopBar height manually calculated -->
<style lang="scss">
    @import "$lib/styles/mixin/main";

    .overlay {
        @include transition-all();
        position: absolute;
        top: 51px;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(black, 0.5);

        @media (min-width: 768px) {
            display: none;
        }
    }

    aside {
        @include transition-all();
        position: absolute;
        right: 0;
        height: calc(100% - 51px);
        width: 250px;
        background: white;
        border-left: 1px solid $slate-200;
        text-align: center;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            position: relative;
            height: 100%;
        }
    }

    header {
        border: 1px solid $slate-200;
    }

    ul {
        flex: 1;
        overflow-y: auto;

        li:first-child {
            font-weight: 500
        }
    }

    .collapsed {
        margin-right: -250px;
    }
</style>
