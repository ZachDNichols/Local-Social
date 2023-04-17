<script>
import { authStore } from "../store/store"
import { doc,setDoc } from "firebase/firestore";
import { db } from "../lib/firebase/firebase";
import { storage } from "../lib/firebase/firebase";
import { uploadBytes, getStorage, ref } from "firebase/storage";
console.log($authStore.user.uid)
const storageRef = ref(storage, `images/${$authStore.user.uid}/`)
let uploadedImage;

let firstName = "";
let lastName = "";
let authenticating = false;
    
    async function handleImageUpload(e) {
        const image = (e.target)?.files?.[0];
        if (!image) return;
    // URL.createObjectURL() creates a temporary URL for the image we can use as src for an img tag
        uploadedImage = image
        console.log(uploadedImage,typeof(uploadedImage))
    }

    async function handleAuth(){
        authenticating = true;
        const docref = doc(db, "user", $authStore.user.uid)
        await setDoc(docref, {firstName: firstName, lastName: lastName}, {merge: true})
        uploadBytes(storageRef, uploadedImage).then(() => {
            console.log("Upload Succsesful")
        })
        $authStore.data.firstName = firstName
        $authStore.data.lastName = lastName
        console.log($authStore.data.firstName)
        console.log($authStore.data.lastName)

    }



</script>



<main>
    <div class="flex"></div>
    <img src="localSocialHorizontal.svg" alt="" class="logoImg">
    <div class="flex2"></div>
    <div class="logInBlock">
        <div class="header">
            <h1>Enter Name</h1>
        </div>
        <div class="body">
            <form>
                <label for="">
                    <input type="text" name="" id="" placeholder="First Name" bind:value={firstName}>
                </label>
                <label for="">
                    <input type="text" name="" id="" placeholder="Last Name" bind:value={lastName}>
                </label>
                <div for="" id="fileAdd">
                    <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg" on:change={handleImageUpload}/>
                    <p class="fileAddText">Enter a Profile Image is desired.</p>
                </div>
                <button type="button" on:click={handleAuth}>
                    {#if authenticating}
                    <i class="fa-solid fa-spinner spin loadingSpinner"/>
                    {:else}
                        Submit
                    {/if}
                </button>
            </form>
        </div>
    </div>
    <div class="flex3"></div>
</main>


<style>
    .fileAddText {
        color:#0e9292;
        font-size: .8rem;
        padding-left: 5px;
    }

    #fileAdd {
        display: flex;
        flex-direction: column;
    }

    #fileAdd input{
        width: 100%;
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
        gap: 18px;
        width: 65%;
        max-width: 500px;
        filter: drop-shadow(0 0 .5rem rgba(0, 0, 0, 0.519));
        border-radius: 20px;
        padding: 20px;
        filter: drop-shadow(0 0 1.5rem rgba(0,0,0,.4));
    }
    .logInBlock h1 {
        font-size: 2.3rem;
        font-weight: 600;
        color: rgb(255, 255, 255);
        letter-spacing: 0.1rem;
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