<script>
    import { authStore } from "../store/store";
    import { db, storage } from "../lib/firebase/firebase";
    import { doc,setDoc } from "firebase/firestore";
    import { getDownloadURL, ref } from "firebase/storage";

    
    
    export let name = 'Anonymous';
    export let profileImg = 'blankProfile.webp';
    export let body = 'A basic description';
    export let likes = [];
    export let user = "";
    export let tag = ""
    let likedHeart = false
    const pathReference = ref(storage, `images/${user}`)

    getDownloadURL(pathReference).then((image) => {
    profileImg = image
    }).catch((error) => {
    switch (error.code) {
      case 'storage/object-not-found':
        console.log("storage/object-not-found error")
        break;
      case 'storage/unauthorized':
        console.log("storage/unauthorized error")
        break;
      case 'storage/canceled':
        console.log("storage/calceled error")
        break;
      case 'storage/unknown':
        console.log("storage/unknown error")
        break;
    }})


    if (likes.includes($authStore.user.uid)){
        likedHeart = true
    }

    let ref2 = doc(db, "mainPosts", tag)

    async function likeHeartFunc(){
        likedHeart = !likedHeart;
        if (likedHeart){
            await setDoc(ref2, {likes: [...likes, $authStore.user.uid]}, {merge: true})
            likes = [...likes, $authStore.user.uid]
        } else {
            await setDoc(ref2, {likes: likes.filter((val) => {
                if(val != $authStore.user.uid){
                    return val
                }}
                )}, {merge: true})
            likes.pop()
            likes = likes
        }
    }

    let visable = true;


</script>

<div class="headerPush"></div>

{#if visable}
<div class="mainContent">
    <div class="header">
        <img src={profileImg} alt="Profile Img" class="profileImg">
        <p class="profileName">{name}</p>
    </div>
    <div class="body">
        <p>{body}</p>
    </div>
    <div class="footer">
        {#if likes != 0}
        <span class="likeCount">{likes.length} {likes.length == 1 ? "Like" : "Likes"}</span>
        {/if}
        <span class={likedHeart ? "likedHeart" : "likeHeart"} on:click={likeHeartFunc} on:keydown={() => {}}>
            &#9829
        </span>
    </div>
</div>
{/if}

<style>

    .mainContent {
        width: 98%;
        min-width: 300px;
        background: #345168;
        border: none;
        border-radius: 15px;
        box-shadow: 0 0 2rem #00000063;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 12px;
        font-weight: 500;
        font-size: 1.9rem;
        color: white;
    }

    .body {
        font-size: 1.25rem;
        font-weight: 400;
        width: 100%;
        background: #486983;
        padding: 10px;
        color: white;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        width: 100%;
        padding: 0px 15px;
        text-align: right;
        color: white;
        font-size: 2.25rem;
    }

    .likeHeart {
        color: rgb(255, 255, 255);
        cursor: pointer;
    }

    .likedHeart {
        color: rgb(248, 142, 216);
        cursor: pointer;
    }

    .profileImg {
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    .likeCount {
        color: white;
        font-size: 1.3rem;
        font-weight: 300;
    }

</style>