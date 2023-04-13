<script lang="ts">
    import PreLoader from "$lib/components/PreLoader.svelte";
    import Chat from "$lib/components/Chat.svelte";

    let isLoading = true;

    setTimeout(() => {
        isLoading = !isLoading;
    }, 3000);
</script>

{#if isLoading}
    <PreLoader />
{:else}
    <Chat />
{/if}
