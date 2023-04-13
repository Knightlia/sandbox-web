<script lang="ts">
    import logo from "$lib/assets/logo.png";
</script>

<div class="preloader">
    <img src={logo} alt="Sandbox - Loading" height="200" width="200">
    <div class="spinner"></div>
</div>

<style lang="scss">
    @import "$lib/styles/mixin/main";

    .preloader {
        @include flex-center();
        height: inherit;
        flex-direction: column;
    }

    .spinner {
        margin-top: 2rem;
        height: 3rem;
        width: 3rem;
        border: 8px solid $indigo-400;
        border-top-color: transparent;
        border-radius: 100rem;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
