<script lang="ts">
    import MessageAPI from "$lib/api/messageapi";

    const messageAPI = new MessageAPI();
    let editorInput: string;

    function keydown(e: KeyboardEvent): void {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    async function sendMessage(): Promise<void> {
        if (editorInput === "" || editorInput.trim() === "") {
            editorInput = "";
            return;
        }

        await messageAPI.execute(editorInput);
        editorInput = "";
    }
</script>

<div class="editor">
    <div
        contenteditable
        aria-placeholder="Enter message..."
        class="input"
        bind:innerText={editorInput}
        on:keydown={keydown}
        role="textbox"
        tabindex="0"
    />

    <div class="menu">
        <button class="primary" on:click={sendMessage}>Send ></button>
    </div>
</div>

<style lang="scss">
    .editor {
        padding: 0.75rem;
        display: flex;
        flex-direction: column;

        & > * + * {
            margin-top: 0.375rem;
        }
    }

    .input {
        max-height: 6.375rem;
        overflow-y: auto;

        &:empty:before {
            opacity: 0.6;
            content: attr(aria-placeholder);
        }
    }

    .menu {
        display: flex;
        justify-content: flex-end;
    }
</style>
