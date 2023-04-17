<script>
    import Header from "../../components/+header.svelte";
    import { authStore, userNameF, userNameL } from "../../store/store";
    import { db } from "../../lib/firebase/firebase";
    import UserName from "../../components/userName.svelte";

</script>
<main>
    {#if $authStore.data.firstName == ""}
        <UserName/>
    {:else}
        <Header/>
        <slot />
    {/if}
</main>
<style>
</style>

