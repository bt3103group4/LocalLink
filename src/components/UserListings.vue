<template>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"  crossorigin="anonymous">
</head>
        <div class = "grid">
            <div class="col my-col" v-for="tour in tours" :key="tour.tour_name">
                  <div class="card-group">
                    <div class="card">
                    <img class="card-img-top" src="..\images\v225_74.png" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title" style="display: inline;">{{tour.tourname}}</h5>
                    <button id="editlisting" v-if="isUserAccount" @click="editing(tour.tourname)"></button>
                    <p class="card-text"> Available from: {{tour.start}}</p>
                    <button class="button-id">Book Now </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { db} from "../main.js";

export default {
    name: "UserListings",
    emit: ["tourname"],
    data(){
        return{
            tours:[]
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
                    console.log(fbuser)
                    db.collection("listings").where("email","==",fbuser)
                    .get()
                    .then(z => {
                        z.forEach(doc => {
                        const data = doc.data()
                        let tour ={
                            tourname : data["tour_name"],
                            start : data["start_date"],
                            image: "image",
                            review: "4", //to make dynamic too KIV
                        }
                        self.tours.push(tour)
                        console.log(tour);
                        })
                    
                    })}
                    }
                })
                
            }
        display();
    },
    
    methods: {
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
#listings{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 265px;
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
    top: 250px;
    right:130px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:65px
}

#editlisting {
    width: 20px;
    height: 20px;
    background: url("~@/images/edit.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: none;
    float: right;
}

</style>