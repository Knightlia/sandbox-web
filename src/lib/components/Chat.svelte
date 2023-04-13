<script lang="ts">
    import TopBar from "$lib/components/TopBar.svelte";
    import Editor from "$lib/components/Editor.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { messageList } from "$lib/stores";
    import Bubble from "$lib/components/Bubble.svelte";
    import { afterUpdate } from "svelte";

    let chatHistoryNode: HTMLDivElement;

    afterUpdate(() => {
        chatHistoryNode.scrollTop = chatHistoryNode.scrollHeight;
    });
</script>

<div class="main">
    <TopBar />

    <div class="chat">
        <div class="chat-main">
            <div class="chat-history" bind:this={chatHistoryNode}>
                {#each $messageList as m}
                    <Bubble
                        sender={m.sender}
                        message={m.message}
                        timestamp={m.timestamp}
                        isSender={m.sender === "TODO - update"}
                    />
                {/each}
            </div>

            <Editor />
        </div>

        <Sidebar />
    </div>
</div>

<style lang="scss">
    @import "$lib/styles/mixin/main";

    @mixin flex-col() {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .main {
        height: inherit;
        display: flex;
        flex-direction: column;
    }

    .chat {
        flex: 1;
        display: flex;
        overflow: hidden;
    }

    .chat-main {
        @include flex-col();
    }

    .chat-history {
        @include flex-col();
        @include px(0.75rem);
        @include py(0.5rem);
        overflow-y: auto;
    }
</style>
