<script>
import { authHandlers, userNameF, userNameL, authStore } from "../store/store"

    let firstName = "";
    let lastName = "";

    let passwordWrong = false;
    
    let email;
    let password;
    let reenterPassword;
    let error = false;
    let logIn = true;
    let authenticating = false;
    

    $: if(password !== reenterPassword && logIn == false)
        {
            passwordWrong = true;
        } else {
            passwordWrong = false;
        }

    async function handleAuth(){
        
        error = false;
        if (authenticating){
            return
        }
        if (!email || !password || (!logIn && !reenterPassword)) {
            error = true;
        }
        

        authenticating = true;
        
        try {
            if (logIn) {
                await authHandlers.login(email, password)
            } else {
                await authHandlers.signup(email, password)

            }
        } catch (err) {
            console.log("The was an auth error", err)
            error = true
            authenticating = false;
        }
         
    }

    function logInChange() {
        logIn = !logIn
    }

</script>



<main>
    <div class="flex"></div>
    <img src="localSocialHorizontal.svg" alt="" class="logoImg">
    <div class="flex2"></div>
    <div class="logInBlock">
        <div class="header">
            {#if logIn}
            <h1>Login</h1>        
            {:else}
            <h1>Register</h1>            
            {/if}
        </div>
        <div class="body">
            <form>
                {#if error}
                        <p><span class="errorMessage">The email or password is incorrect</span></p>
                {/if}
                <label for="">
                    <input type="email" name="" id="email" placeholder="Email" bind:value={email}>
                </label>
                <label for="">
                    <input type="password" name="" id="password" placeholder="Password" bind:value={password} on:keydown={(button) => {if(button.key == "Enter"){handleAuth()}}}>
                </label>
                {#if !logIn}
                    <label for="">
                        <input type="password" name="" id="" placeholder="Re-enter Password" bind:value={reenterPassword} on:keydown={(button) => {if(button.key == "Enter"){handleAuth()}}}>
                    </label>
                {/if}
                {#if passwordWrong}
                    <p class="regError">The passwords don't match.</p>
                {/if}
                <button type="button" on:click={handleAuth} id="submitButton">
                    {#if authenticating}
                    <i class="fa-solid fa-spinner spin loadingSpinner"/>
                    {:else}
                        Submit
                    {/if}
                </button>
            </form>
            {#if logIn}
                <p>Don't have an account? <span class="changeLog" on:click={logInChange} on:keydown={() => {}}>Register</span></p>
            {:else}
                <p>Already have an account? <span class="changeLog" on:click={logInChange} on:keydown={() => {}}>Login</span></p>
            {/if}
        </div>
    </div>
    <div class="flex3"></div>
</main>


<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        min-height: 100vh;
        gap: 10px;
    }
    
    .logInBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #345168;
        gap: 18px;
        width: 65%;
        max-width: 500px;
        filter: drop-shadow(0 0 .5rem rgba(0, 0, 0, 0.519));
        border-radius: 20px;
        padding: 20px;
        filter: drop-shadow(0 0 1.5rem rgba(0,0,0,.4));
    }
    .logInBlock h1 {
        font-size: 2.3rem;
        font-weight: 600;
        color: rgb(255, 255, 255);
        letter-spacing: 0.1rem;
    }

    .logInBlock p {
        padding: 10px 0 0 5px;
        font-size: .9rem;
        color: white;
        font-weight: 500;
    }

    form {
        display: flex;
        gap: 8px;
        flex-direction: column;
        margin: 0px;
        padding: 0px;
    }

    .errorMessage {
        color: #fd9737 !important;
        font-weight: 700;
    }

    .changeLog {
        color: #14bbbb;
        font-weight: 600;
        cursor: pointer;
    }

    .changeLog:hover {
        color: #0e9292;
    }
    
    .body {
        width: 100%;
    }

    .body input{
        padding: 10px 10px;
        width: 100%;
        background: none;
        border: none;
        color: white;
    }
    
    form label {
        border-radius: 10px;
        border: 2px solid rgb(255, 255, 255);
    }

    form label:focus-within {
        border: 2px solid #11a5a5;
    }

    .body input:focus {
        border: none;
        outline: none;

    }

    .body button{
        background: #11aaaa;
        width: none;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .body button:hover{
        background:#0e9292;
    }

    .flex {
        flex: 1;
    }

    .flex2 {
        flex: .5;
    }

    .flex3 {
        flex: 3;
    }

    .logoImg {
        filter: invert();
        width: 65%;
        max-width: 700px;
    }

    .regError {
        color: #fdae37 !important;
    }

    .loadingSpinner {
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>