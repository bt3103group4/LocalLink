<template>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"  crossorigin="anonymous">
</head>
        <div class = "grid">
            <div id="noListings" v-if="$reviews == null"> No reviews yet!</div>
            <div class="col my-col" v-else v-for="review in reviews" :key="review.tourname">
                  <div class="card-group">
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title" style="display: inline;">{{review.tourname}}</h5>
                    <p class="card-text"> Rating: {{review.rating}} / 5</p>
                    <p class="card-text"> {{review.reviews}}</p>
                    <p class="card-text" style="font-style:italic;">  Reviewed by: {{review.reviewer}}</p>
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
    name: "ReviewList",
    data(){
        return{
            reviews:[]
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
                    db.collection("Reviews").where("email","==",fbuser)
                    .get()
                    .then(z => {
                        z.forEach(doc => {
                        const data = doc.data()
                        console.log("below is data")
                        console.log(data)
                        let newreview ={
                            reviewer : data["my_email"],
                            rating: data["ratings"],
                            reviews: data["reviews"],
                            tourname: data["tourname"]
                        }
                        self.reviews.push(newreview)
                        console.log(newreview);
                        })
                    
                    })}
                    }
                })
                
            }
        display();
    },
    
}


</script>


<style scoped>
#noListings{
    font-size: 30px;
    font-weight:700;
    font-style: italic;
    color: grey;
    padding-left: 10px;
}
#listings{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 275px;
  left: 700px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:400px;
}
.grid{
    position: absolute;
    top: 120px;
    right:20px;
    width: 770px;
}

</style>