
<script>
    import { onMount } from "svelte";
    import { auth, db } from "../lib/firebase/firebase";
    import { doc, getDoc, getDocFromServer, setDoc } from "firebase/firestore"
    import { authStore } from "../store/store"


    const nonAuthRoutes = ["/"]

    onMount(() => {
        console.log('Mounting')
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = '/';
                return
            }

            if (user && currentPath === "/") {
                window.location.href = '/home'
                return
            }

            if (!user) {
                return
            }


            let dataToSetToStore;
            const docRef = doc(db, "user", user.uid);
            const docSnap = await getDocFromServer(docRef);
            if (!docSnap.exists()) {

                const userRef = doc(db, "user", user.uid);
                dataToSetToStore = {email: user.email, firstName: "", lastName: "", posts: [1,3], friends: [],};
                await setDoc(userRef, dataToSetToStore, {merge: true})

            } else {
                const userData = docSnap.data()
                dataToSetToStore = userData
            }
            authStore.update((curr) => {
                return {
                    ...curr,
                    user,
                    data: dataToSetToStore,
                    loading: false,
                }
            })
        })
        return unsubscribe;
    })
</script>

<div class="mainCont">

    <slot />

</div>

<style>

    .mainCont {
        background: #477d96;
    }

</style>