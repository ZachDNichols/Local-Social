<script>
    export let userName = "Anonymous";
    export let description = "";
    export let imageSrc
</script>

<style>
.card {
    color: white;
    width: 62%;
    border: 0px white solid;
    border-radius: 25px;
    background-color: hsl(185, 42%, 40%);
    margin-top: 30px ;
    margin-left: 2%;
    margin-right: 2%;
    padding: 2%;
    box-shadow: 0px 0px .7em rgb(179, 179, 179);
}

.card:hover {
    box-shadow: 0px 0px 1.4em rgb(179, 179, 179); 
    transition: .2s;
}
.card:not(:hover) {
    transition: .2s;
}

.image {
    width: 100%;
    border-radius: 15px;
}

.nameElement{
    padding-left: 2%;
}

.descriptionElement {
    font-style: italic;
}

</style>
<main>
    <div class="card">
        <img src="{imageSrc}" alt="" class="image">
        <h3 class="nameElement">{userName}</h3>
        <p class="descriptionElement">{description}</p>
    </div>
</main>