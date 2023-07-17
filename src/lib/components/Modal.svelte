<script lang="ts">
    import { modalVisible } from "$lib/stores";
    import NicknameAPI from "$lib/api/nicknameapi";
    import GetErrorMessage from "$lib/api/errorcodes";
    import { afterUpdate } from "svelte";

    const nicknameAPI = new NicknameAPI();

    let disabled = false,
        error = { visible: false, msg: "" },
        input: HTMLInputElement;

    afterUpdate(() => {
        input.focus();
    });

    async function formAction(e: SubmitEvent): Promise<void> {
        e.preventDefault();

        disabled = true;
        error.visible = false;

        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            await nicknameAPI.execute(formData.get("nickname") as string);
        } catch (e: unknown) {
            disabled = false;
            const code = e as Error;
            error = { visible: true, msg: GetErrorMessage(code.message) };
        }
    }
</script>

<div class="modal">
    <form class="content" on:submit={formAction}>
        <h3>Set Nickname</h3>

        <input
            name="nickname"
            placeholder="Enter name..."
            {disabled}
            class:error={error.visible}
            bind:this={input}/>

        {#if error.visible}
            <small style="color: red">{error.msg}</small>
        {/if}

        <footer>
            <button type="button" on:click={() => $modalVisible = false} {disabled}>Cancel</button>
            <button class="primary" {disabled}>Set Name</button>
        </footer>
    </form>
</div>

<style lang="scss">
    @import "$lib/styles/mixin";

    .modal {
        @include flex-center();
        @include transition-all();
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(black, 0.4);
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    .content {
        @include transition-all();
        @include shadow();
        max-height: calc(100vh - 5rem);
        background: var(--modal-background);
        padding: 1.5rem;
        max-width: 32rem;
        width: 90%;
        border-radius: 1rem;
        overflow-y: auto;
        z-index: 100;

        & > * + * {
            margin-top: 0.5rem;
        }
    }

    footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem !important;

        & > * + * {
            margin-left: 0.5rem;
        }
    }

    .error {
        outline-color: red;
    }
</style>
