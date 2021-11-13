<template>
    <NavBar/>
    <Logo/>
    <SettingsButton/>
    <head><link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link href="./main.css" rel="stylesheet" />
        <title>Document</title><link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
    </head>
    <body>
        <UserInfo/>
      <div class="listingComp" style="height:100%">
        <ul class = "tabs">
          <li data-tab-target="#listings" class="active tab">Listings </li>
          <li data-tab-target="#newReview" class="tab"> Reviews </li>
        </ul>

        <div class="tabcontent">
          <div id = "listings" data-tab-content class="active">
            <div class = "grid">
            <div v-if="tours == []"> You have no tours yet!</div>
            <div v-else class="col my-col" v-for="tour in tours" :key="tour.tour_name">
                  <div class="card-group">
                    <div class="card">
                    <img class="card-img-top" :src="tour.image" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title" style="display: inline;">{{tour.tourname}}</h5>
                    <button id="deletelisting" @click="deleting(tour.tour_id)"></button>
                    <button id="editlisting" @click="editing(tour.tour_id)"></button>
                    <p class="card-text"> Available from: {{tour.start}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
          <div id = "newReview" data-tab-content>
              <ReviewList/>
            </div>
          </div>
        </div>

        <button id="editprofilebtn" @click="$router.push('/editUserProfile')"> </button>
        

    <div class="name"></div>
    <button class="uploadbtn" @click="$router.push('/newtour')">New Tour</button>
    <button class="newreview" @click="$router.push('/newreview')">Review</button>
    </body>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/Logo.vue'
import ReviewList from '../components/ReviewList.vue'
import firebase from 'firebase';
import { db} from "../main.js";

export default {
    name: "TourGuideProfile",
    data(){
        return{
            tours:[],
            currentUser: "",
            componentkey:0
        }
    },
        mounted(){

          //showing tabs
          let tabs = document.querySelectorAll('[data-tab-target]')
          let tabContents = document.querySelectorAll('[data-tab-content]')

          tabs.forEach(tab => {
            tab.addEventListener('click', ()=> {
              const target = document.querySelector(tab.dataset.tabTarget)
              tabContents.forEach(tabContent => tabContent.classList.remove('active'))
              tabs.forEach(tab=> tab.classList.remove('active'))
              target.classList.add('active')
              tab.classList.add('active')
            })
          })
          this.display();
    },
    components: { UserInfo,Logo,SettingsButton, NavBar,ReviewList},
    methods:{
      //getting tours
      async display(){
        const self = this;
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
        if (user){
          let fbuser = auth.currentUser.email;
          self.currentUser=fbuser
          if (fbuser){
          self.currentUser = fbuser
          db.collection("listings").where("email","==",fbuser)
          .get()
          .then(z => {
            z.forEach(doc => {
            const data = doc.data()
            if (!(data["tour_name"]== null || data["start_date"] == null)){
                let tour = {
                    tourname : data["tour_name"],
                    start : data["start_date"],
                    image: data["tour_photo"],
                    review: "4", //to make dynamic too KIV
                    tour_id: String(data.email + ", " + data.tour_name)
                }
                self.tours.push(tour)
                }
                })
              })}
              }
          })
      },

       editing(tour_id) {
        this.$router.push({
            name: 'EditTour',
            params:{
                tour_id: tour_id
            }
        })
    },
    async deleting(tour_id) {
      alert("Deleting listing")
      await db.collection("listings").doc(tour_id).delete();
      window.location.reload()
      this.display()
      },
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
    position: absolute;
    top: 120px;
    left:30px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:40px;
}
.card{
  width:300px;
  height:300px;
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

#deletelisting {
  width: 20px;
  height: 20px;
  background: url("~@/images/delete.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: none;
  float: right;
}

.listingComp{
  position:relative;
  top:-1475px;
  right:-600px;
  width:800px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
}
body {
  width: 100%;
  height:1500px;
  background: rgba(242,238,238,1);
  opacity: 1;
}
.uploadbtn {
  width: 120px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 150px;
  left: 1130px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  text-align:left;
}
.newreview {
  width: 120px;
  height: 48px;
  background: rgba(63,163,184,1);
  opacity: 1;
  position: absolute;
  top: 130px;  
  left: 1250px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  color: rgba(255,255,255,1);
  font-family: Ubuntu;
  font-weight: Regular;
  opacity: 1;
  text-align: center;
}

.v207_66 {
  width: 118px;
  color: rgba(63,163,184,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Roboto;
  font-weight: Black;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v207_69 {
  width: 118px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 149px;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v207_82 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 432px;
  left: 664px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v208_58 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 748px;
  left: 664px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v208_59 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 748px;
  left: 1022px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v207_106 {
  width: 215px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 425px;
  left: 1022px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.name {
  color: #fff;
}
.v218_79 {
  width: 255px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 187px;
  left: 619px;
  font-family: Roboto;
  font-weight: Medium;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.uploadbtn {
  color: rgba(255,255,255,1);
  position: absolute;
  top:130px;
  font-family: Ubuntu;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: center;
}
.name {
  color: #fff;
}

#editprofilebtn {
    width: 30px;
    height: 30px;
    position : absolute;
    left: 440px;
    top : 565px;
    margin: 30px;
    background: url("~@/images/edit.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: none;
}
.tabs{
  position: absolute;
  top: 10px;
  left: 20px;
  display : flex;
  color:rgba(0, 0, 0, 0.75);
  list-style-type: none;
  border-bottom: 2px solid black;
  background-color : rgba(242,238,238,1);
  font-size: 23px;
  font-weight: 700;
  width:750px;
  text-align: left;
}
.tab{
  cursor: pointer;
  padding: 25px;
  padding-bottom: 10px;
}
.tab:hover{
  background-color: #AAA;
}
.tab.active{
  border-bottom: rgba(63,163,184,1) 5px solid;
}
[data-tab-content]{
  display: none;
}
.active[data-tab-content]{
  display: block;
}

</style>