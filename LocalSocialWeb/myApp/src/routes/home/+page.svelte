<script>
    import { authStore } from "../../store/store";
    import TextBox from "../../components/+textBox.svelte";
    import { auth, db } from "../../lib/firebase/firebase";
    import { collection, getDocs, setDoc, query, orderBy, limit } from "firebase/firestore";
    import { onMount } from "svelte";

    $: loading = true;
    $: mainContArray = []

    let jack;



    onMount(()=>{
        async function retrieveContent(){
            const q = query(collection(db, "mainPosts"), orderBy("date"), limit(10))
            const data = await getDocs(q);
            data.forEach((doc) => {
                mainContArray = [...mainContArray, doc.data()];
                
            });
            return
        }
        retrieveContent().then(() => {
            loading = false
        })
    })
    authStore.subscribe((curr) => {
        jack = curr.data.posts;
    });


</script>

<main>
    {#if !loading}
    <div class="mainContent">
        <div class="textBoxes">
            {#each mainContArray as post}
                <TextBox {...post} />
            {/each}
        </div>
        <div class="rightMenu">

        </div>

    </div>
    {/if}
</main>

<style>
    main {
        min-height: 100vh;
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