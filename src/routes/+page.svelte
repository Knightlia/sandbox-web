<script lang="ts">
    import PreLoader from "$lib/components/PreLoader.svelte";
    import Chat from "$lib/components/Chat.svelte";

    const isLoading = true;
</script>

{#if isLoading}
    <PreLoader/>
{:else}
    <Chat/>
{/if}
