<template>
    <NavBar/>
    <Logo/>
    <Back/>
    <SettingsButton/>
    <body>
    <div class="wrapper">
        <div class="article-text">
        <h1 id="title"> Bucket List Travel: The Top 10 Places In The World</h1><br>
        <img id ="img" src="../images/travel2.jpg" alt="top destinations" /><br><br>
        <p> What's on your travel bucket list? If you're like most people, the more you travel, 
            the more places you add to your bucket list. So when the editors of the website Big 7
             Travel announced the list of the world's top 10 bucket list destinations, we stopped 
            in our tracks and started checking off the boxes.</p> <br>

        <p> The website surveyed its 1.5 million-strong social audience in order to determine the best 
            bucket list places around the world. According to Sarah Clayton-Lea, head of content with Big 7 
            Travel, this is the first time the site has assembled this list. "Bucket list travel was a
            trend that popped up again and again in previous surveys when asking our readers what sort
            of travel content they most enjoyed consuming," says Clayton-Lea. "So, our curiosity got the better 
            of us and we wanted to know which destinations people are dreaming of for 2019/2020."</p>

        <p> The results of the world’s top 50 bucket list destinations include some of the most beautiful places on earth.
             "White sandy beaches are still a must-visit for many, with vibrant cities also making an appearance 
             on a lot of people’s bucket lists," says Clayton-Lea. Countries with naturally beautiful scenery 
             and world-famous landmarks came out on top: 22% of the destinations on the list have white sandy beaches,
              while 52% are iconic cities.</p> <br>

        <h1> These are the people's top 10 destinations. </h1>  <br>   

        <h2>1. Bali, Indonesia </h2>
        <p> You’ll find beaches, volcanoes, Komodo dragons and jungles sheltering elephants, orangutans and tigers. 
            Basically, it’s paradise. It’s likely you’ve seen an image of Bali on social media at least once in the past 
            seven days, as it’s such a popular bucket list destination for 2019.</p><br>

        <h2>2. New Orleans </h2>
        <p> The lively city known for its street music, festive vibe and a melting pot of French, African and American 
            cultures is well worth the trip. NOLA is a city packed with adventures at every turn and should be on everyone’s
            must-visit list.</p><br>

        <h2>3. Kerry, Ireland </h2>
        <p>  All the way west in Ireland is one of the country’s most scenic counties. Kerry’s mountains, lakes and coasts 
            are postcard-perfect, and that’s before you add in Killarney National Park. The unique small towns such as Dingle
             add to its charm.</p><br>

        <h2>4. Marrakesh, Morocco </h2>
        <p> This ancient walled city is home to mosques, palaces and lush gardens. It’s known as The Red City thanks to the 
            color of the brick walls surrounding the city. The medina is a UNESCO World Heritage Centre.</p><br>

        <h2>5. Sydney </h2>
        <p> Sydney is known around the world as one of the greatest and most iconic cities on the planet. Amazing things to 
            do aren’t hard to find; the city has gorgeous beaches, great cafes and world-class entertainment on offer wherever 
            you look.</p><br>
        
        <h2>6. The Maldives</h2>
        <p> This tropical nation in the Indian Ocean is made up of more than 1,000 coral islands. It’s home to some of the 
            world’s most luxurious hotel resorts, with white sandy beaches, underwater villas and restaurants and bright 
            blue waters.</p><br>

        <h2> 7. Paris, France </h2>
        <p> One of the most iconic cities in the world, Paris tops many people’s bucket lists. You’ll see so many famous 
            landmarks here: the Eiffel Tower, Arc de Triomphe, Notre Dame cathedral—the list is never-ending.</p><br>

        <h2>8. Cape Town, South Africa </h2>
        <p> Cape Town is a dream location to visit: endless natural beauty and clifftop views, pastel pink neighborhoods 
            and turquoise waters.</p><br>  

        <h2>9. Dubai, U.A.E. </h2>
        <p> The high-flying city of the U.A.E, Dubai is one of the most glamorous destinations you’ll ever visit, and 
            is particularly popular with Big 7 Travel readers."  </p><br>   

        <h2>10. Bora Bora, French Polynesia </h2>
        <p> Bora Bora is Tahiti's most famous island. How do overwater bungalows and underwater adventures sound 
            to you? To us, it’s everything we could want from a bucket list destination. </p><br>   

        </div>
    <div class="credits">
        <img id ="authorimg" src="../images/author2.png" alt="author" /><br>
        <h4> Adapted from Forbes</h4>
        <h5> Authored by Laura Begley Bloom</h5>
    </div>   
    </div> 
    </body>
    
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Back from '@/components/Back.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default ({
    name: "TopDestinations",
    components: {NavBar,Logo,Back, SettingsButton}
})
</script>

<style scoped>
body{
    width:100%;
}
.wrapper {
    padding: 20px;
}
.article-text{
    top:10px;
    left:100px;
    padding-right:100px;
    padding-bottom: 100px;
    border-right:2px black solid;
    width: 80%;
    float: left;
    padding: 40px;
}
#img{
    width:700px;
    position: relative;
    object-fit: cover;
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
}
.credits{
    top:150px;
    right:10px;
    width: 20%;
    float: left;
    padding: 40px;
}
#authorimg{
    width:200px;
    border-radius: 100px;
    border: 5px solid lightgrey;
    object-fit:cover;
    position: relative;
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
}
#title{
    font-size:50px;
}
</style>