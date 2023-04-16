<script lang="ts">
    import ThemeHandler from "$lib/themes/themehandler";
    import { onMount } from "svelte";

    onMount(async () => {
        ThemeHandler.initTheme();
    });
</script>

<slot/>
