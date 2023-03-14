<!--
    Must add database to add and delete likes from clients account
-->

<script>
    export let userName = "Anonymous";
    export let description = "";
    export let imageSrc;
    export let userId;
    export let liked = false;

    function addLike() {
        liked = true;
        //send data to database to like
    }

    function removeLike() {
        liked = false;
        //send data to database to remove like
    }
</script>

<style>

* {
    font-size: large;
}

.card {
    width: 62%;
    color: white;
    background-color: hsl(185, 24%, 48%);
    border: 0px black solid;
    border-radius: 25px;
    margin: 2em 1em;
    padding: 1.25em;
    box-shadow: 0px 0px .7em rgb(149, 149, 149);
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
    color: hsl(185, 35%, 20%);
    transition: .3s;
}
.nameElement:not(:hover){
    transition: .3s;
}

.growElement {
    flex-grow: 1;
}

.likeButtonElement {
    border: 0px solid;
    background-color: transparent !important;
    font-size: 2.5rem;
    margin: 0px;
    padding: 0px .5rem 0px 0px;
    cursor: pointer;
}

.likeColor {
    color: hsl(185, 35%, 20%);
}
.likeColor:active {
    color: white;
    transition: .3s;
}

.unlikeColor {
    color: white;
}
.unlikeColor:active {
    color: hsl(185, 35%, 20%);
    transition: .3s;
}

.descriptionElement {
    font-style: italic;
    margin: 0px;
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
            {#if liked}
            <button type="button" class="likeButtonElement likeColor" on:click={removeLike}>
                &#9825
            </button>
            {:else}
            <button type="button" class="likeButtonElement unlikeColor" on:click={addLike}>
                &#9825
            </button>
            {/if}
        </div>
        <p class="descriptionElement">{description}</p>
    </div>
</main>