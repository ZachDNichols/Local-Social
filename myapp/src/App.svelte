<script>
    import MainHeader from './parts/mainHeader.svelte';
    import rightSideBar from './parts/rightSideBar.svelte';
    import textCard from './parts/textCard.svelte';
    import NormalCard from './parts/normalCard.svelte';
    import Profile from './parts/profile.svelte';

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

    let user =  {
        imageProfile: "https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_960_720.jpg",
        userName: "Ethan",
        userId: 1234
    }
    
</script>
<main>
    <MainHeader {...user}/>
    <NormalCard {...user1}/>
    <NormalCard {...user2}/>
    <NormalCard {...user3}/>       
</main> 
<style>
    main {
        margin: 0px;
        background-color: hsl(0, 0%, 17%);
    }
</style>
