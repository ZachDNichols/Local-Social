<script>
    import MainHeader from './parts/mainHeader.svelte';
    import rightSideBar from './parts/rightSideBar.svelte';
    import textCard from './parts/textCard.svelte';
    import NormalCard from './parts/normalCard.svelte';

    let user1 = {
        imageSrc: "https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg",
        userName: "Ethan Henrickson",
        userId: 1,
        description: "A nice photo that I captured last summer in the lost city of Atlantis. Its probably one of my favorite photos",
        liked: false
    }

    let user2 = {
        imageSrc: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440,f_auto/50491001_kupidw.png",
        userName: "Zach Nickolas",
        userId: 2,
        description: "I love rats. They are cool.",
        liked: true
    }

    let user3 = {
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        userName: "Random Dude",
        userId: 3,
        description: "I hate rats. They suck!",
        liked: false
    }
    
</script>
<main>
    <MainHeader />
    <NormalCard {...user1}/>
    <NormalCard {...user2}/>
    <NormalCard {...user3}/>
</main> 
<style>
    * {
        background-color: hsl(185, 42%, 90%);
    }
</style>
