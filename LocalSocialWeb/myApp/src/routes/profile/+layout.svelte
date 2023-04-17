<script>
    import { page } from "$app/stores"
    $: url = $page.url;
    import Header from "../../components/+header.svelte";
    import { authStore } from "../../store/store";
    import TextBox from "../../components/+textBox.svelte";
    import { db } from "../../lib/firebase/firebase";
    import { getDoc, doc, query, collection, getDocs, where } from "firebase/firestore";
    import { onMount } from "svelte";

    $: loading = true;
    $: loading2 = true;
    $: userPosts = []
    let user;
    let userName;
    
    

    onMount(()=>{
        async function retrieveContent(){
            user = url.searchParams.get('user');

            const q = query(collection(db, "mainPosts"), where("user", "==", `${user}`));
            let data = await getDocs(q);
            
            try {
                data.forEach((doc) => {
                    userPosts = [...userPosts, doc.data()]
                })
            } catch {
                console.log('No Data to Display')
            }

            userName = await getDoc(doc(db, "user", user))
            userName = userName.data()
            userName = userName.firstName + " " + userName.lastName
            
        }
        retrieveContent().then(() => {
            loading2 = false
        })
    })

    $: if($authStore.user && !loading2){
                loading = false
            }

</script>
<Header friendList={true}/>

<main>
    {#if !loading}
    <div class="header">
        <h1>{userName}</h1>
        <h2>User Code - {user}</h2>
    </div>
    <div class="mainContent">
        {#if userPosts.length != 0}
        <div class="textBoxes">
            {#each userPosts as post}
                <TextBox {...post} />
            {/each}
        </div>
        {:else}
        <div class="noPosts">
            <p>No Posts to Display</p>
        </div>
        {/if}
        <div class="rightMenu">

        </div>

    </div>
    {/if}
</main>
<style>
    .noPosts {
        color: white;
        text-align: center;
        padding: auto;
    }

    .header {
        color: white;
        text-align: center;
        width: 80%;
    }

    h1, h2{
        padding-bottom: 10px;
        font-weight: 400;
    }

    main {
        padding: 1%;
    }

    .mainContent {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .textBoxes {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .rightMenu {
        flex: 1;
    }
</style>



<slot />
