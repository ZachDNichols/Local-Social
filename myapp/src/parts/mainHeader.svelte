<script>

</script>
<style>
    body{
        margin: 0px;
        padding: 0px;
    }
    .navBar {
        width: 100%;
        height: 2em;
        background-color: hsl(185, 24%, 48%);
    }
    .navList {
        text-decoration: none;
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: center;
    }
    .grow{
        flex-grow: 1;
    }
</style>
<main>
    <body>
        <div class="navBar">
            <ul class="navList">
                <li class="navItem">Logo</li>
                <li class="navItem grow"></li>
                <li class="navItem">some info</li>
                <li class="navItem">some more info</li>
            </ul>
        </div>
    </body>
</main>