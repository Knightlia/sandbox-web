<script lang="ts">
    import PreLoader from "$lib/components/PreLoader.svelte";
    import Chat from "$lib/components/Chat.svelte";
    import { isLoading } from "$lib/stores";
    import { onMount } from "svelte";
    import WebsocketHandler from "$lib/api/websockethandler";

    const websocketHandler = new WebsocketHandler();

    onMount(async () => {
        websocketHandler.connect();
    });
</script>

{#if $isLoading}
    <PreLoader/>
{:else}
    <Chat/>
{/if}
