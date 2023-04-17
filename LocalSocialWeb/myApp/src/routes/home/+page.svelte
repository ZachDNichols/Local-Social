<script>
    import { authStore, userNameF, userNameL } from "../../store/store";
    import TextBox from "../../components/+textBox.svelte";
    import { auth, db } from "../../lib/firebase/firebase";
    import { collection, getDocs, setDoc, query, orderBy, limit } from "firebase/firestore";
    import { onMount } from "svelte";

    $: loading = true;
    $: loading2 = true;
    $: mainContArray = []


    
    onMount(()=>{
        async function retrieveContent(){
            const q = query(collection(db, "mainPosts"), orderBy("date"), limit(10))
            const data = await getDocs(q);
            
            try {
                data.forEach((doc) => {
                    mainContArray = [...mainContArray, doc.data()];
                    
                    return
                });
            } catch {
                console.log('No Data to Display')
            }
        }
        retrieveContent().then(() => {
            loading2 = false
        })
    })

    $: if($authStore.user && !loading2){
                loading = false
            }
    


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