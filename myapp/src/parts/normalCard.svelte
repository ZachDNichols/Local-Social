<!--
    Must add database to add and delete likes from clients account
-->

<script>
    export let userName = "";
    export let description = "";
    export let imageSrc;
    export let userId;
    export let liked = false;
    let allowedLike = true;

    function like() {
        if (allowedLike){
            liked = !liked;        
        }
    }

</script>

<style>

* {
    font-size: large;
}

.card {
    width: 70%;
    color: rgb(255, 255, 255);
    background-color: hsl(0, 0%, 40%);
    border: 0px black solid;
    border-radius: 10px;
    margin: 1em 2em;
    padding: 1.25em;
    box-shadow: 0px 0px .7em rgb(34, 34, 34);
}

.card a {
    color: rgb(255, 255, 255);
    text-decoration: none;
}

.image {
    width: 100%;
    border-radius: 7px;
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
    transition: .1s;
}
.nameElement:not(:hover){
    transition: .1s;
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
    color: hsl(0, 100%, 77%);
    transform: scale(270%);
}

#notLikedContent {
    color: rgb(255, 255, 255);
    transform: scale(240%);
}

.descriptionElement {
    font-style: italic;
    margin: 0px;
}

#notLikedContent:hover {
    color: hsl(0, 100%, 77%);
    transform: scale(270%);
    transition: .2s;
}

#notLikedContent:not(:hover) {
    transition: .2s ease-out;
    transform: scale(240%);
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
