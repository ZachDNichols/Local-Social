<script>
    export let imageProfile = "";
    export let userName = "";
    export let userId = "";

    let show = false;
    let showLog = false;

    if (imageProfile === ""){
        imageProfile = "blankProfile.webp"
    }

    if (userName === ""){
        userName = "Anonymous";
        showLog = true;
    }

    function displayLogInSecOn(){
        show = true;
    }

    function displayLogInSecOff(){
        show = false;
    }

</script>
<style>

@media (max-width: 600px) {
    #profileImage {
        opacity: 0%;
        width: 0px !important;
        margin-right: 0px;
        transition: .2s;
        padding-right: 0px;
    }
}
    body{
        margin: 0px;
        padding: 0px;
    }

    .navBar {
        height: 4em;
        background-color: hsl(0, 0%, 40%);
        border-radius: 0px 0px 10px 10px;
    }

    .navItem {
        color: white;
        padding-right: 1em;
    }
    
    a {
        color: white;
        text-decoration: none;
        font-style: none;
    }

    .navList {
        text-decoration: none;
        list-style: none;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        margin: 0px;
    }

    .grow{
        flex-grow: 1;
    }

    #logo {
        height: 3.2em;
        filter: invert();

    }

    #profileImage {
        border-radius: 50%;
        border: 2px solid rgb(255, 255, 255);
        margin-right: 1em;
        width: 3em;
        transition: .2s;
    }

    img {
        margin-top: .4em;
    }

    #logIn {
        display: block;
        z-index: 2;
        position: fixed;
        top: 4.5em;
        right: .75em;
        color: white;
        background-color: hsl(0, 0%, 40%);
        text-align: right;
        border-radius: 10px;
        padding: 7px 7px;
    }

    #transparent {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0px;
        right: 4em;
        background-color: none;
        height: 4.5em;
        width: 200px;
        z-index: 2;
        padding: 0px 10px;
    }

    #textInfo {
        padding: 2px .75em;
        font-size: larger;
        cursor: pointer;
        border-radius: 5px;
        border: 1px none;
    }

    #textInfo:hover{
        background-color: hsl(0, 0%, 30%);
    }

    #gap{

    }



</style>
<main>
    <body>
        <div class="navBar">
            <ul class="navList">
                <li class="navItem">
                    <a href=".">
                        <img src="localSocialHorizontal.svg" alt="" id="logo">
                    </a>
                </li>
                <li class="navItem grow"></li>
                <li class="navItem" style="font-size: 20px; cursor:pointer;" on:mouseenter={displayLogInSecOn}>{userName}</li>
                <li class="navItem">
                    <a href=".">
                        <img src="{imageProfile}" alt="" id="profileImage">
                    </a>
                </li>
            </ul>
        </div>
        {#if show}
        <div on:mouseleave={displayLogInSecOff}>
            <div id="transparent" ></div>
            <div id="logIn">
                {#if !showLog}
                <div id="textInfo">My Profile</div>
                <div id="textInfo">My Location</div>
                <div id="gap"></div>
                <div id="textInfo">Log Out</div>
                {:else}
                <div id="textInfo">Log In / Sign Up</div>
                {/if}
            </div>
        </div>
        {/if}
    </body>
</main>