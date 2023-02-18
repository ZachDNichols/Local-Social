<!--
    Must add database to add and delete likes from clients account
-->

<script>
    export let userName = "";
    export let description = "";
    export let imageSrc;
    export let userId;
    export let liked = false;
    export let saved = false;

    function like() {
        liked = !liked;
    }

    function save(){
        saved = !saved
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
    transition: .15s;
    cursor: pointer;
}

.nameElement:not(:hover) {
    color: rgb(255, 255, 255);
    transition: .15s;
}

.growElement {
    flex-grow: 1;
}




#buttonElement {
    border: 0px solid;
    background-color: transparent !important;
    margin: 0px;
    padding: 0px .5rem 0px 0px;
    cursor: pointer;
    transition: .1s;
    padding-right: 1.5em;
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


#likedContentSaved {
    margin-top: 8px;
    color: hsl(0, 100%, 77%);
    transform: scale(220%) rotate(180deg);
}

#notLikedContentSaved {
    margin-top: 8px;
    color: rgb(255, 255, 255);
    transform: scale(220%);
}

#notLikedContentSaved:hover {
    margin-top: 8px;
    color: hsl(0, 100%, 77%);
    transform: scale(220%) rotate(180deg);
    transition: .2s;
}

#notLikedContentSaved:not(:hover) {
    transition: .2s ease-out;
    transform: scale(205%) rotate(180deg);
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
            <button type="button" id="buttonElement" on:click={save}>
                {#if saved}
                <div id="likedContentSaved">&#9751;</div>
                {:else}
                <div id="notLikedContentSaved">&#9750;</div>
                {/if}
            </button>
            
            <button type="button" id="buttonElement" on:click={like}>
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
