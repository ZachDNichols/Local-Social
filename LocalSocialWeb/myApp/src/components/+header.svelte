<script>
    import { authHandlers, authStore} from "../store/store";
    export let friendList = true;

    let friends = [];
    authStore.subscribe((curr) => {
        friends = curr.data.friends;
    });
    

</script>

<div class="header">
    <a href="/home"><img src="LogoSmall.png" alt="" class="headerLogo"></a>
    <span class="grow"></span>
    <span><p><a href="/profile" class="headerItem">Profile</a></p></span>
    <span on:click={authHandlers.logOut} on:keydown={(button) => {if (button == "Enter"){authHandlers.logOut}}} class="headerItem"><p>Log Out</p></span>
</div>
<div class="spacer"></div>
{#if friendList}
{#if !$authStore.loading}
<main>
    <div class="mainCont">
        <div class="title">
            <div>Friends</div>
        </div>
        <div class="list">
            {#each friends as friend}
            <span>{friend}</span>
            {/each}
        </div>
    </div>
</main>
{/if}
{/if}


<slot />

<style>
    .mainCont {
        position: fixed;
        top: 80px;
        right: 1%;
        width: 19%;
        padding: 10px;
        padding-left: 30px;
        color: white;
        background-color: #345168;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        border: 2px solid rgb(5, 54, 56);
        z-index: 2;
    }
    .title {
        font-weight: 600;
        font-size: 1.1em;
        margin-bottom: 10px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap:  4px;
    }
    .list span:hover{
        background-color: aqua;
        width: auto;
    }
    .header {
        width: 100%;
        position: fixed;
        z-index: 3;
        background-color: #345168;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        border-bottom: 3px solid rgb(5, 54, 56);
    }

    .headerLogo {
        width: 40px;
    }
    
    .grow {
        flex-grow: 1;
    }

    .headerItem {
        color: white !important;
        font-weight: 600 !important;
        text-decoration: none;
        font-style: none;
    }

    .headerItem:last-of-type {
        margin-right: 10px;
        cursor: pointer;
    }

    .spacer {
        height: 90px;
    }

    a {
        font-size: inherit;
        font-weight: inherit;
        font-style: none;
    }


</style>