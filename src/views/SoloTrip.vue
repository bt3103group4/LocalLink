<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <Back/>
    <body>
    <div class="credits">
        <img id ="authorimg" src="../images/author3.jpg" alt="author" /><br>
        <h4> By Ciara Travel Blog</h4>
        <h5> Authored by Ciara</h5>
    </div>       
    <div class ="articletext">
        <h1> 7 Essential Tips for taking your first solo trip</h1><br>
        <img id ="img" src="../images/travel3.jpg" alt="solo trip" /><br><br>
        <p>So, you want to travel solo? I’ve spent the past few years traveling the world solo and I’ve had 
            the most incredible experiences along the way. However, I still remember how frightening it was to 
            take my first solo trip. After all, solo travel is quite different from traveling with loved ones. 
            When it came to planning, I had no idea where to start. </p>

        <p>What kind of place should I book? </p><br>
        <p>How would I get from the airport to my accommodation? </p><br>
        <p>Should I plan everything out or go with the flow?  </p><br>
        <p>Let’s just say, I didn’t know the first thing about planning a successful solo trip. 
            Thankfully, I’ve picked up plenty of tips along the years to make my solo travels go alot smoother! 
            If you’re ready to give it a go, then there are 12 essential tips for taking your first solo trip:  </p><br>

        <h2> 1. Plan Out Your First Few Days </h2>
        <p> Your first solo trip will feel extremely intimidating. It's one thing to arrive in a foreign country 
            but it’s a completely different thing to arrive in a foreign country all alone. </p> <br>
        <p> Where do you even start? Where should you go? Who should you talk to? It's going to feel overwhelming in 
            the beginning, so it's important to plan out your first few days. Book your accommodation, arrange a few tours,
             schedule your airport pickup, do plenty of research, and take the necessary steps to make things easy on yourself
              in the beginning.</p><br>

        <h2> 2. Utilize Technology  </h2>
        <p> Solo travel is all about self-reliance, but that shouldn't stop you from using every resource you have. Don't be afraid 
            to utilize technology when necessary. There’ nothing wrong with pulling out your phone in times of need.
            If you struggle with directions(like me), then use Google Maps. You can even use these maps offline when you
             don't have wifi/service</p><br>

        <p> If you struggle with the local language, then use Google Translate. You can download the offline version!</p><br>

        <p> If you struggle with converting currency, then use XE Currency.  You can download the offline version of this app too! </p><br>

        <p> You’ll save yourself alot of time and stress by taking advantage of every resource at your fingertips! </p><br>

        <h2> 3. Research As Much As Possible</h2>
        <p> Solo travelin' ain't easy, so it's important to research before you go. You'll feel more prepared and 
            less overwhelmed if you have an idea of what to expect. Scour blogs, articles, books, and Facebook groups for 
            'need to know' info on your anticipated destination. It’s easy to overlook key details when you’re planning everything 
            by yourself. Here are some things you should research before your trip: </p><br>
            <ul>
                <li>Passport, visa, and travel document requirements</li>
                <li>How to get to and from the airport</li>
                <li>What to wear, including culturally appropriate clothing </li>
                <li>Best and safest neighborhoods to stay in </li>
                <li>Common scams</li>
                <li>How to stay safe as a solo female traveler</li>
                <li>What to do when you arrive! </li>
            </ul> <br> 

            <p> Check out Lonely Planet, Culture Trip, Trip Advisor, Destination specific websites, Instagram, and 
                personal blogs are great resources. Google is my go-to resource!Ask for advice in travel-focused Facebook 
                Groups - Girls Love Travel, Women Who Travel, and Solo Female Traveler Network are great resources for 
                first-hand knowledge. </p><br>

        <h2>4. Set Intentions</h2>
        <p> Honestly, anything could go down during your first solo trip. In order to make the most of it, set intentions or goals. 
            Ask yourself what you want out of the experience! What do you want to learn? When you set intentions, 
            you set the pace and direction for your trip. You’ll start your trip with more clarity and purpose. 
            As a result, you’re more likely to have a successful first solo trip - whatever that may look like to you.  </p><br>

        <h2> 5. Sleep In Social Accommodation</h2>
        <p> It’s no secret that the scariest part of solo travel is the SOLO aspect. It’s easy to be alone when you’re out
             having fun during the day, but the world seems to get quieter at nighttime. If you want to meet people, 
             go out, and be in a social setting, then consider booking a hostel or private room in an Airbnb. Hostels aren’t for everyone,
              but they’re the easiest way to meet people as a solo traveler. Hostels usually host day tours, pub crawls, family dinners, 
              and other events to keep up a social atmosphere!  Check reviews on Hostel World! </p><br>

        <h2> 6. Choose Your Location Wisely</h2>
        <p> It's crucial that you choose the right location for YOU. You're more likely to be pleased if you visit a 
            location that suits your interests. Avoid beaches if you find yourself bored after a few days of lounging in the sand. 
            Avoid big cities if crowds overwhelm you.</p> <br>

        <h2> 7. Let Go Of Expectations</h2>
        <p> Like I said somewhere above, anything could go down during your first solo trip. ANYTHING!
             Try to go in with no expectations, while doing your best to stay positive. There's no way to predict 
             what will happen or what a certain destination will be like, so a positive mindset is crucial. </p>                
    </div>
    </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import Back from '@/components/Back.vue'

export default ({
    name: "SoloTrip",
    components: {NavBar,Logo,SettingsButton,Back}
})
</script>

<style scoped>
body{
    width:100%;
}
.articletext{
    width:1050px;
    position:relative;
    top:50px;
    left:100px;
    padding-right:100px;
    padding-bottom: 100px;
    border-right:2px black solid;
}
#img{
    width:700px;
    position: relative;
    left:100px;
}
h1{
    position: relative;
    top:-30px;
    font-size: 50px;
}
.credits{
    position: absolute;
    top:150px;
    right:40px;
}
#authorimg{
    width:200px;
    height:200px;
    border-radius: 1000px;
    object-fit:cover;
    border: 5px solid lightgrey;
}
ul{
    position: relative;
    left:100px;
}
</style>
