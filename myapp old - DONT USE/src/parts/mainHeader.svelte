<script>

</script>
<style>
    * {
        position: relative;
        left: 0px;
        top: 0px;
    }

    .navBar {
        width: 100%;
        height: 2em;
        background-color: rgb(88, 247, 194);
    }
    .navList {
        text-decoration: none;
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: center;
    }
    .navItem {
        flex: auto;
    }
    .grow{
        flex-grow: 2;
    }
</style>
<main>
    <div class="navBar">
        <ul class="navList">
            <li class="navItem">Logo</li>
            <li class="navItem grow"></li>
            <li class="navItem">some info</li>
            <li class="navItem">some more info</li>
        </ul>
    </div>
</main>