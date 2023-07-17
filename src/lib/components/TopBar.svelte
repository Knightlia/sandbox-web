<script lang="ts">
    import { messageList, modalVisible, sidebarVisible, userNickname } from "$lib/stores";
    import Dropdown from "$lib/components/dropdown/Dropdown.svelte";
    import DropdownItem from "$lib/components/dropdown/DropdownItem.svelte";
    import ThemeHandler from "$lib/themes/themehandler";
    import Theme from "$lib/themes/theme";
    import { TrashBinOutline, UsersOutline } from "flowbite-svelte-icons";
</script>

<nav class="px-3 py-2">
    <div class="menu">
        <h3>Sandbox</h3>
        <button on:click={() => $modalVisible = true}>{$userNickname}</button>
    </div>
    <div class="menu">
        <button on:click={() => $messageList = []}>
            <TrashBinOutline size="md" tabindex="-1"/>
        </button>
        <button class="mr-2" on:click={() => sidebarVisible.update(v => !v)}>
            <UsersOutline size="md" tabindex="-1"/>
        </button>
        <Dropdown>
            <DropdownItem label="Light" onclick={() => ThemeHandler.setTheme(Theme.LIGHT)}/>
            <DropdownItem label="Dark" onclick={() => ThemeHandler.setTheme(Theme.DARK)}/>
            <DropdownItem label="System" onclick={() => ThemeHandler.setTheme(Theme.SYSTEM)}/>
        </Dropdown>
    </div>
</nav>

<style lang="scss">
    @import "$lib/styles/mixin/index";

    nav {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--main-border);
        background: var(--main-accent-background);
    }

    .menu {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 0.5rem;
        }
    }
</style>
