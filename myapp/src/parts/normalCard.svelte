<!--
    Must add database to add and delete likes from clients account
-->

<script>
    import { blur } from 'svelte/transition';
    export let userName = "Anonymous";
    export let description = "";
    export let imageSrc;
    export let userId;
    export let liked = false;
    const org = liked;

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    function like() {
        liked = !liked;
        console.log(liked)
        
    }
</script>

<style>

* {
    font-size: large;
}

.card {
    width: 62%;
    color: white;
    background-color: hsl(0, 0%, 47%);
    border: 0px black solid;
    border-radius: 25px;
    margin: 2em 1em;
    padding: 1.25em;
    box-shadow: 0px 0px .7em rgb(132, 132, 132);
}

.card a {
    color: white;
    text-decoration: none;
}

.image {
    width: 100%;
    border-radius: 15px;
}

.nameHeader {
    display: flex;
}

.nameElement{
    padding-left: .75em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nameElement:hover {
    color: hsl(0, 100%, 77%);
    transition: .3s;
}
.nameElement:not(:hover){
    transition: .3s;
}

.growElement {
    flex-grow: 1;
}

#likeButtonElement {
    border: 0px solid;
    background-color: transparent !important;
    margin: 0px;
    padding: 0px .5rem 0px 0px;
    cursor: pointer;
    transition: .1s;
}

#likedContent {
    transform: scale(270%);
    color: hsl(0, 100%, 77%);
    transition: color 2s ease-out;
}

#notLikedContent {
    transform: scale(240%);
    color: white;
    transition: color 2s ease-out;

}

.descriptionElement {
    font-style: italic;
    margin: 0px;
}

#notLikedContent:hover {
    transform: scale(270%);
    transition: .2s;
}

#notLikedContent:not(:hover) {
    transform: scale(240%);
    transition: .2s;
}


</style>
<main>
    <div class="card">
        <img src="{imageSrc}" alt="" class="image">
        <div class="nameHeader">
            <a href="www.localsocial.com/user/{userId}.html">
                <h3 class="nameElement">{userName}</h3>
            </a>
            <div class="growElement"></div>
            <button type="button" id="likeButtonElement" on:click={like}>
                {#if liked}
                    <div id="likedContent" >&#9829;</div>
                {:else}
                    <div id="notLikedContent" >&#9825;</div>
                {/if}
            </button>
        </div>
        <p class="descriptionElement">{description}</p>
    </div>
</main>
