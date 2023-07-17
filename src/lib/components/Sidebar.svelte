<script lang="ts">
    import { sidebarVisible, userList, userNickname } from "$lib/stores";
    import { onMount } from "svelte";
    import UserSetting from "$lib/usersetting";

    let ul: string[] = [];

    onMount(() => {
        $sidebarVisible = screen.width >= 768;
    });

    userList.subscribe((val) => {
        if ($userNickname !== "") {
            ul = val.filter((i) => i !== UserSetting.nickname);
            ul.unshift(UserSetting.nickname);
        } else {
            ul = val;
        }
    });
</script>

<div>
    <div
        class:overlay={$sidebarVisible}
        on:click={() => sidebarVisible.update((v) => !v)}
        on:keydown={() => sidebarVisible.update((v) => !v)}
        role="none"
    />
    <aside class:collapsed={!$sidebarVisible}>
        <header class="py-3">
            <h4>User List</h4>
        </header>
        <ul class="py-1">
            {#each ul as user}
                {#if user === $userNickname}
                    <li><strong>{user}</strong></li>
                {:else}
                    <li>{user}</li>
                {/if}
            {/each}
        </ul>
    </aside>
</div>

<!-- HACK: Height is the 100% minus the TopBar height manually calculated -->
<style lang="scss">
    @import "$lib/styles/mixin/index";

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
        background: var(--main-accent-background);
        border-left: 1px solid var(--main-border);
        text-align: center;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            position: relative;
            height: 100%;
        }
    }

    header {
        border-bottom: 1px solid var(--main-border);
    }

    ul {
        flex: 1;
        overflow-y: auto;
    }

    .collapsed {
        margin-right: -250px;
    }
</style>
