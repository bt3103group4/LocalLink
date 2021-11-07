<template>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"  crossorigin="anonymous">
</head>
        <div v-if="savedTours.length != 0"  class = "grid">
            <div class="col my-col" v-for="tour in savedTours" :key="tour.tourname">
                  <div class="card-group">
                    <div class="card">
                    <img class="card-img-top" :src="tour.image" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title" style="display: inline;">{{tour.tourname}}</h5>
                    <p class="card-text"> Available from: {{tour.start}}</p>
                    <button class="button-id" @click="$router.push('/ConfirmationPage');saveToBookedListings(tour.tourname,tour.email)">Book Now </button>
                    <p class="card-text"> Review: {{tour.review}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p id="noListings" v-else> No saved bookings yet! </p>
</template>

<script>
import firebase from 'firebase';
import { db} from "../main.js";

export default {
    name: "UserSavedListings",
    emit: ["tourname"],
    data(){
        return{
            savedTours:[]
        }
    },
        mounted(){
            const self = this;
            async function display(){
                const auth = firebase.auth();
                auth.onAuthStateChanged(user => {
                if (user){
                    let fbuser = auth.currentUser.email;
                    if (fbuser){
                    db.collection("users").doc(fbuser) //to get saved listings in user
                    .get()
                    .then(z => {
                        const data = z.data()
                        let savedtour = data["saved_listings"]
                       if (savedtour != null){
                            savedtour.forEach(tour => {
                            db.collection("listings").doc(tour).get()
                            .then(tourdata => {
                                const data = tourdata.data()
                                let tour = {
                                    tourname : data["tour_name"],
                                    review : data["review"],
                                    start : data["start_date"],
                                    image: data["tour_image"],
                                    email:data["email"]
                                }
                                self.savedTours.push(tour)
                            })

                        })
                       }
                    
                    })}
                    }
                })
                
            }
        display();
    },
    
    methods: {
        saveToBookedListings(tour_name,email){
            const auth = firebase.auth();
            auth.onAuthStateChanged(user => {
            if (user){
                let fbuser = auth.currentUser.email;
                if (fbuser){
                    db.collection("users").doc(fbuser) 
                    .update({
                        bookings: firebase.firestore.FieldValue.arrayUnion(email +", " + tour_name )
                    }) 
                }
            }
            })
  
    }   ,
        isUserAccount() {
            //TODO: Check this is users account if they want to edit info
        }, 
    editing(tour_name) {
        console.log(tour_name)
        this.$emit("tourname", tour_name)
        this.$router.push('/edittour')
    }
    }
}


</script>


<style scoped>
#noListings{
    font-size: 30px;
    font-weight:700;
    font-style: italic;
    color: grey;
    position:absolute;
    top:100px;
    left:20px;
}
#listings{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 275px;
  left: 664px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:400px
}
.card-group:hover{
    cursor: pointer;
}
.button-id{
    border:none;
    background-color:rgba(63,163,184,1) ;
    color:white;
    padding:5px;
    padding-left: 10px;
    padding-right:10px;
    font-weight: bold;
    border-radius: 10px;
}
.button-id:hover{
    cursor: pointer;
    background-color: grey;
}
.grid{
    size:50%;
    position: absolute;
    top: 120px;
    left:30px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:40px
}

</style>