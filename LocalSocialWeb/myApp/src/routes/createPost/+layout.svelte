<script>
    let authenticating = false;
    let text = "";

    import { updateDoc, collection, setDoc, doc, Timestamp} from "firebase/firestore"
    import { db } from "../../lib/firebase/firebase";
    import { authStore } from "../../store/store";

    async function handleCreate(){
        let tag = `${$authStore.user.uid + $authStore.data.posts.length}`

        let ref = doc(db, "mainPosts",`${tag}`)
        let ref2 = doc(db, "user", $authStore.user.uid)

        await setDoc(ref, {
            body: text,
            date: Timestamp.fromDate(new Date()),
            name: $authStore.data.firstName + " " + $authStore.data.lastName,
            likes: [],
            user: $authStore.user.uid,
            tag: tag
        })
        await setDoc(ref2, {posts: [...$authStore.data.posts, tag]}, {merge: true})
        $authStore.data.posts = [...$authStore.data.posts, tag]


        window.location.href = '/home';
    }


</script>



<main>
    <div class="flex"></div>
    <img src="localSocialHorizontal.svg" alt="" class="logoImg">
    <div class="flex2"></div>
    
    <div class="logInBlock">
        <div class="header">
            <div>Create a Post</div>
        </div>
        <div class="body">
            <form>
                <label for="">
                    <textarea name="" id="" cols="30" rows="10" bind:value={text}></textarea>
                </label>
                <!-- 
                    <input type="file" accept=".jpg, .jpeg, .png" required>
                -->
                
        
                <button type="button" on:click={handleCreate}>
                    {#if authenticating}
                    <i class="fa-solid fa-spinner spin loadingSpinner"/>
                    {:else}
                        Create Post
                    {/if}
                </button>
            </form>
        </div>
    </div>
    <div class="flex3"></div>
</main>


<style>
    .chan {
        color: white;
        padding: 6px;
        font-size: .8rem;
        width: 100% !important;
        cursor: pointer;
    }

    textarea {
        background-color: transparent;
        border: #345168;
        border-radius: 10px;
        width: 100%;
        outline: none;
        padding: 10px;
        color: white;
    }

    .header {
        color: white;
        font-size: 2rem;
        font-weight: 500;
        display: flex;
        flex-direction: row;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        min-height: 100vh;
        gap: 10px;
    }
    
    .logInBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #345168;
        gap: 10px;
        width: 65%;
        max-width: 500px;
        filter: drop-shadow(0 0 .5rem rgba(0, 0, 0, 0.519));
        border-radius: 20px;
        padding: 20px;
        filter: drop-shadow(0 0 1.5rem rgba(0,0,0,.4));
    }

    form {
        display: flex;
        gap: 8px;
        flex-direction: column;
        margin: 0px;
        padding: 0px;
    }
    
    .body {
        width: 100%;
    }

    .body input{
        padding: 10px 10px;
        width: 100%;
        background: none;
        border: none;
        color: white;
    }
    
    form label {
        border-radius: 10px;
        border: 2px solid rgb(255, 255, 255);
    }

    form label:focus-within {
        border: 2px solid #11a5a5;
    }

    .body input:focus {
        border: none;
        outline: none;

    }

    .body button{
        background: #11aaaa;
        width: none;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .body button:hover{
        background:#0e9292;
    }

    .flex {
        flex: 1;
    }

    .flex2 {
        flex: .5;
    }

    .flex3 {
        flex: 3;
    }

    .logoImg {
        filter: invert();
        width: 65%;
        max-width: 700px;
    }

    .loadingSpinner {
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>