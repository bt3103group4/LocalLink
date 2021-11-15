<template>

<body>
    <NavBar/>
    <Logo/>
    <Back/>
    <SettingsButton />

<div class="faq_area section_padding_130" id="faq">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-8 col-lg-6">
                <!-- Section Heading-->
                <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                    <h2 style="width:700px;font-size:50px;position:absolute;top:-100%;left:-15%"><span>Frequently </span> Asked Questions</h2><br><br>
                    <h4 style="position:relative; left:-55%"> For Tourists </h4>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <!-- FAQ Area-->

            <div class="col-12 col-sm-10 col-lg-8">
                <div class="accordion faq-accordian" id="faqAccordion">
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingOne">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne" 
                            aria-expanded="true" aria-controls="collapseOne">How do i book a trip? <span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p> You can book a trip by clicking on the 'See More' button on our listings page.
                                    Bookings will not be charged yet until the tour guides confirm the trip.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingTwo">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" 
                            aria-expanded="true" aria-controls="collapseTwo">How do i make payment?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Once a tour has been reserved, the tour guide will contact you for trip customisations (if any). Once confirmed,
                                    the tour guide will send you further payment details.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" 
                            aria-expanded="true" aria-controls="collapseThree"> I am still considering to book the trip, can i reserve the trip first? <span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Yes! Listings can be saved and viewed in the 'Account' section after clicking on the 'Save' icon 
                                    in the tour information page. When you are ready to book, simply click on the 'Book' button of the saved listing 
                                    under your 'Saved' tab.
                                </p>
                            </div>
                        </div>                   
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour" 
                            aria-expanded="true" aria-controls="collapseFour"> What happens if the tour guide does not get back to me after i have reserved the booking?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseFour" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>For conflicts and situations of no shows, please contact us through our email and our friendly 
                                    administrators will assist you. At Local Link, we value accountability and will penalise any user
                                    who abuses our platform.
                                </p>
                            </div>
                        </div>
                    </div><br><br>
                    
                    <h4> For Guides </h4>
                       <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFive" 
                            aria-expanded="true" aria-controls="collapseFive"> How do i make a new listing? <span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseFive" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>Listings can be made by clicking on the 'New Tour' button on your account. 
                                    Remember to describe your tour clearly so your tourists can understand more about the experience
                                    you will be bringing them on!
                                </p>
                            </div>
                        </div>
                    </div>
                        <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSix" 
                            aria-expanded="true" aria-controls="collapseSix"> What happens when a user books a trip?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseSix" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p>You will be able to see the contact details of the tourist who booked your trip. 
                                    Contact them via email and prepare to understand more about any customisations they wish to do!
                                    When confirmed, send them details of the payment methods you accept (eg Paylah!, Paynow, Bank Transfer)
                                    to confirm the trip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseSeven" 
                            aria-expanded="true" aria-controls="collapseSeven"> What happens if the tourist who has booked the trip 
                            becomes uncontactable?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseSeven" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p> For conflicts and situations of no shows, please contact us through our email and our friendly 
                                    administrators will assist you. At Local Link, we value accountability and will penalise any user
                                    who abuses our platform.
                                </p>
                            </div>
                        </div>
                    </div><br><br>

                    <h3> General </h3>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseEight" 
                            aria-expanded="true" aria-controls="collapseEight"> How do i review a user?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseEight" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p> On your 'Account' page, click on the 'New Review' button. Select the tour you want to
                                    leave a review for, followed by your tour guide's /tourist's email that is found on the
                                    listing's tour information.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseNine" 
                            aria-expanded="true" aria-controls="collapseNine"> Can i change my booking after confirmation?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseNine" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p> Changing of tours are only allowed if the opposite party is agreeable to your plans.
                                    If the opposing party cannot accomodate your proposed changes, you will still have to pay the full tour cost.
                                    Hence, please be certain of your plans before reserving a tour. Cancellation and no-shows will incur 
                                    a penalty and may result in termination of your account.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="card-header" id="headingThree">
                            <h6 class="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTen" 
                            aria-expanded="true" aria-controls="collapseTen"> What if i am not able to attend the tour?<span class="lni-chevron-up"></span></h6>
                        </div>
                        <div class="collapse" id="collapseTen" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                <p> Cancellation of tours are not allowed by tourists or tour guides after confirmation.
                                </p>

                                <p> If a tour guide does not show up for the tour, his account will be terminated with immediate effect
                                    with a $250 fine.</p>
                                   <p> If a tourist would like to cancel the trip, the full amount for the tour will not be refunded.
                                    If a tourist has cancelled more than 3 times, his account will be terminated.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Support Button-->
                <div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                    <i class="lni-emoji-sad"></i>
                    <p class="mb-0 px-2">Can't find your answers? Email us at bt3103grp4@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import Back from '@/components/Back.vue'
import SettingsButton from '@/components/SettingsButton.vue'

export default {
    name: "Help",
    components: {NavBar,Logo,Back, SettingsButton}
}
</script>
<style scoped>

body{
    width:100%;
}
.section_padding_130 {
    padding-top: 130px;
    padding-bottom: 130px;
}
.faq_area {
    position: relative;
    z-index: 1;
    background-color: rgba(242,238,238,1)
}

.faq-accordian {
    position: relative;
    z-index: 1;
}
.faq-accordian .card {
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;
}
.faq-accordian .card:last-child {
    margin-bottom: 0;
}
.faq-accordian .card .card-header {
    background-color: #ffffff;
    padding: 0;
    border-bottom-color: #ebebeb;
}
.faq-accordian .card .card-header h6 {
    cursor: pointer;
    padding: 1.75rem 2rem;
    color: #3f43fd;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.faq-accordian .card .card-header h6 span {
    font-size: 1.5rem;
}
.faq-accordian .card .card-header h6.collapsed {
    color: #070a57;
}
.faq-accordian .card .card-header h6.collapsed span {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
}
.faq-accordian .card .card-body {
    padding: 1.75rem 2rem;
}
.faq-accordian .card .card-body p:last-child {
    margin-bottom: 0;
}

@media only screen and (max-width: 575px) {
    .support-button p {
        font-size: 14px;
    }
}

.support-button i {
    color: #3f43fd;
    font-size: 1.25rem;
}
@media only screen and (max-width: 575px) {
    .support-button i {
        font-size: 1rem;
    }
}

.support-button a {
    text-transform: capitalize;
    color: #2ecc71;
}
@media only screen and (max-width: 575px) {
    .support-button a {
        font-size: 13px;
    }
}
</style>