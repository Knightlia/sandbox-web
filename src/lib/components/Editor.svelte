<div class="editor">
    <div contenteditable aria-placeholder="Enter message..." class="input"></div>
    <div class="menu">
        <button class="primary">Send ></button>
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
