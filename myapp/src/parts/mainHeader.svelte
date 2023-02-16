<script>

</script>
<style>
    body{
        margin: 0px;
        padding: 0px;
    }
    .navBar {
        height: 4em;
        background-color: hsl(0, 0%, 82%);
        border-radius: 0px 0px 10px 10px;
    }
    .navList {
        text-decoration: none;
        list-style: none;

        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: center;

        margin: 0px;
    }
    .grow{
        flex-grow: 1;
    }

    #logo {
        margin-top: .5em;
    }
</style>
<main>
    <body>
        <div class="navBar">
            <ul class="navList">
                <li class="navItem">
                    <a href=".">
                        <img src="localSocialHorizontal.svg" alt="" height="45em" id="logo">
                    </a>
                </li>
                <li class="navItem grow"></li>
                <li class="navItem">some info</li>
                <li class="navItem">
                    <a href=".">
                        <img src="" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </body>
</main>