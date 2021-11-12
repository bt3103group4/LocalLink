<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <Back/>
    <body>
    <div class="wrapper">
    <div class ="articletext">
        <h1> Top 5 expert tips for safe travel during Covid-19</h1><br>
        <img id ="img" src="../images/travel1.jpg" alt="travelling with covid" /><br><br>
        <p>Travelling during Covid-19 is quite different to what we were used to. 
            There are additional steps that we have to go through such as testing and mandatory quarantine 
            as part of the precautions for the virus.It is crucial that travellers are regularly updating 
            themselves with the latest COVID-restriction updates to ensure safe travel. 
            Here are some of the tips from experts on how you can safely travel during these difficult times.</p><br>

        <h2> Know the Covid-19 rate in your destination </h2>
        <p>Even if you are already vaccinated, it’s still crucial to assess COVID-19 levels in the area and 
            country you are travelling to. If these are high, this puts you at a greater risk of contracting 
            COVID-19, and while you may have protection from the virus, your friends and family may not.</p><br>

        <h2> Know the restrictions </h2>
        <p> While you’re at your destination, there will be local restrictions on activities that may differ 
            from where you have travelled from. This ranges from whether you have to wear a mask to whether the 
            local bars and restaurants are open.</p><br>

        <h2> Plan ahead when testing</h2>
        <p> There is still a lot of confusion about what tests are needed to travel, depending on the destination. 
            This can range from whether they accept passengers who have been vaccinated, or require a PCR or 
            Antigen fit to fly test.To find an area’s Covid-19 test positivity rate and test requirements, 
            visit the website of its local public health department. This allows you to plan your Covid tests 
            ahead of time, reduce anxiety and save on fees from last-minute testing.</p><br>

        <h2>Stay safe when flying</h2>
        <p> Because of how air is filtered and circulates on aeroplanes, the Covid-19 virus does not spread 
            easily on flights. However, crowded flights can make social distancing difficult so it’s important 
            to limit contact and wear a face-covering during the flight and when boarding and leaving the aircraft.
            Instead of using traditional boarding passes or handing them to staff for inspection, opt for an 
            electronic or mobile pass which you can put on the scanner and display yourself.</p><br>

        <h2> Choose safe activities</h2>
        <p> While in enclosed places such as indoor bars or restaurants may be legal at a destination you visit, 
            they carry a significantly greater risk of contracting Covid-19. On entering and leaving any facility 
            or any place for that matter, you should always wash your hands thoroughly for at least 20 seconds 
            using soap and water.</p>
    </div>
    <div class="credits">
        <img id ="authorimg" src="../images/author1.jpg" alt="author" /><br>
        <h4> By TravelDailyMedia</h4>
        <h5> Authored by Kristin Mariano </h5>
    </div> 
    </div> 
    </body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import Back from '@/components/Back.vue'

export default ({
    name: "TipsCovid",
    components: {NavBar,Logo,SettingsButton,Back}
})
</script>

<style scoped>
body{
    width:100%;
}
.wrapper {
    padding: 20px;
}

.articletext{

    top:50px;
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

h1{
    position: relative;
    top:-30px;
    font-size: 50px;
}
.credits{
    top:150px;
    right:40px;
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
</style>
