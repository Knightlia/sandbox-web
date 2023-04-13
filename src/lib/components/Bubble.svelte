<script lang="ts">
    export let
        sender: string,
        message: string,
        timestamp: number,
        isSender = false;

    function formatTimestamp(timestamp: number): string {
        return new Date(timestamp).toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
    }
</script>

<div class={isSender ? "bubble sender" : "bubble"}>
    <div class={isSender ? 'avatar sender' : 'avatar'}>{sender.at(0)?.toUpperCase()}</div>
    <div class="{isSender ? 'content sender' : 'content'}">
        <header class:sender={isSender}>
            <strong>{sender}</strong>
            <small>{formatTimestamp(timestamp)}</small>
        </header>
        <div class="message">{message}</div>
    </div>
</div>

<style lang="scss">
    @import "$lib/styles/mixin/main";

    .bubble {
        display: flex;
        margin-top: 0.75rem;

        &:first-child {
            margin-top: auto;
        }

        &.sender {
            flex-direction: row-reverse;
        }
    }

    .avatar {
        @include flex-center();
        margin-top: 0.125rem;
        margin-right: 0.5rem;
        color: $slate-50;
        border-radius: 100rem;
        height: 2.5rem;
        width: 2.5rem;
        font-size: 1.125rem;
        user-select: none;
        background: $indigo-800;
        flex-shrink: 0;

        &.sender {
            margin-left: 0.5rem;
            margin-right: 0;
        }
    }

    .content {
        @include shadow();
        @include px(0.75rem);
        @include py(0.5rem);
        background: white;
        border-radius: 0.375rem;

        &.sender {
            background: $indigo-500;
            color: $slate-50;
        }
    }

    header {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 0.5rem;
        }

        &.sender {
            justify-content: flex-end;
        }
    }
</style>
