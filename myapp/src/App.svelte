<script>
    import MainHeader from './parts/mainHeader.svelte';
    import rightSideBar from './parts/rightSideBar.svelte';
    import textCard from './parts/textCard.svelte';
    import NormalCard from './parts/normalCard.svelte';
    import Profile from './parts/profile.svelte';

    let user1 = {
        imageSrc: "https://www.lukas-petereit.com/wp-content/uploads/2017/10/Rakotzbr%C3%BCcke-Bridge-Rakotz-Kromlau-Lake-Sun-Sunrise-Landscape-Reflection-Germany-Saxony-Travel-Photography-Nature-Photo-Spreewald-2.jpg",
        userName: "Ethan Henrickson",
        userId: 1,
        description: "A nice photo that I captured last summer in the lost city of Atlantis. Its probably one of my favorite photos",
        liked: false
    }

    let user2 = {
        imageSrc: "https://www.kabino.com/wp-content/uploads/2020/08/NW-Stays-Aug-2020-blog-Waterfalls.jpg",
        userName: "Zach Nickolas",
        userId: 2,
        description: "An awesome photo of a waterfall I got up in the Pacific Northwest!",
        liked: true
    }

    let user3 = {
        imageSrc: "https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-a58e6c53fee218623cb26ba39786d1e5.jpg?resize=1&w=1920",
        userName: "Random Dude",
        userId: 3,
        description: "I love mountains!",
        liked: false
    }

    let user =  {
        mainImageProfile: "",
        mainUserName: "EthanHenrickson",
    }
    
</script>
<main>
    <MainHeader {...user}/>
    <div class="space"></div>
    <NormalCard {...user1}/>
    <NormalCard {...user2}/>
    <NormalCard {...user3}/>
    <div class="space"></div>      
</main> 
<style>
    main {
        margin: 0px;
        background-color: hsl(0, 0%, 17%);
    }

    .space {
        background-color: hsl(0, 0%, 17%);
        width: 100%;
        height: 3.75em;
    }
</style>
