<script>
    import { authHandlers, authStore} from "../store/store";
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { db } from "../lib/firebase/firebase";
    import AddFriends from "./AddFriends.svelte";
    export let friendList = true;
    let allowedShowFriend = false;

    let newFriendNumber;
    let friendAddShow = false;
    let friends = [];
    authStore.subscribe((curr) => {
        friends = curr.data.friends;
    });
    allowedShowFriend = true

    function friend(){
        friendAddShow = !friendAddShow
    }

    async function AddFriend(){
        const docref = doc(db, "user", $authStore.user.uid)
        console.log($authStore.user.uid)
        let friendRef = await getDoc(doc(db, 'user', newFriendNumber))
        if (friendRef.exists()){
            allowedShowFriend = false
            let userData = friendRef.data()
            await setDoc(docref, {friends: [...$authStore.data.friends, {id: newFriendNumber, name: userData.firstName}]}, {merge: true})
            $authStore.data.friends = [...$authStore.data.friends, {id: newFriendNumber, name: userData.firstName}]
            allowedShowFriend = true
        }
        
        friendAddShow = !friendAddShow
        newFriendNumber = ""
    }
    

</script>

{#if !$authStore.loading}
<div class="header">
    <a href="/home"><img src="LogoSmall.png" alt="" class="headerLogo"></a>
    <span class="grow"></span>
    <span><p><a href="/createPost" class="headerItem">Create Post</a></p></span>
    <span><p><a data-sveltekit-preload-data="hover" target="_self" href="/profile?user={$authStore.user.uid}" class="headerItem">My Profile</a></p></span>
    <span on:click={authHandlers.logOut} on:keydown={(button) => {if (button == "Enter"){authHandlers.logOut}}} class="headerItem"><p>Log Out</p></span>
</div>
<div class="spacer"></div>
{#if friendList}
<main>
    <div class="mainCont">
        {#if !friendAddShow}
        <div class="title">
            <div>Friends</div>
            <div class="grow"></div>
            <div class="AddFriend" on:click={friend}>+</div>
        </div>
            {#if allowedShowFriend}
            <div class="list">
                {#each friends as friend}
                <span><a data-sveltekit-preload-data="hover" target="_self" href="profile/?user={friend.id}">{friend.name}</a></span>
                {/each}
            </div>
            {/if}
            {:else}
            <div class="title">
                <div>Add Friend</div>
                <div class="grow"></div>
                <div class="AddFriend2" on:click={friend}>X</div>
            </div>
            <div class="newFriend">
                <input type="text" name="" id="" placeholder="Enter User's ID" bind:value={newFriendNumber} class="newFriendField">
                <input type="button" value="Add Friend" on:click={AddFriend} class="addButton">
            </div>
            {/if}
    </div>
</main>
{/if}
{/if}


<slot />

<style>
    a{
        color: white;
        text-decoration: none;
    }

    .mainCont {
        position: fixed;
        top: 80px;
        right: 1%;
        width: 19%;
        padding: 10px;
        padding-left: 1%;
        color: white;
        background-color: #345168;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        border: 2px solid rgb(5, 54, 56);
        z-index: 2;
    }

    .grow{
        flex-grow: 1;
    }
    .title {
        font-weight: 600;
        width: 100%;
        font-size: 1.1em;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .newFriendField{
        width: 100%;
        background: transparent;
        border: 2px solid rgb(5, 54, 56);
        padding: 3px;
        border-radius: 4px;
        outline: none;
        color: white;
    }

    .addButton{
        display: flex;
        width: auto;
        padding: 3px;
        margin: auto;
        margin-top: 10px;
        align-self: center;
        outline: none !important;
        cursor: pointer;
        border: 2px solid rgb(5, 54, 56);
        border-radius: 7px;
        background-color: white;
        font-weight: 500;
        font-style: 1.2rem;
    }

    button:hover{
        outline: none;
        border: 2px solid rgb(5, 54, 56);
        border-radius: 7px;

    }

    .AddFriend{
        font-size: larger;
        cursor: pointer;
    }

    .AddFriend2{
        cursor: pointer;
        font-size:medium;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap:  4px;
        cursor: pointer;
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