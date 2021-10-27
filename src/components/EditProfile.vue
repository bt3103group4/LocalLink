<template>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
</head>	
<body>
   <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"><br>
                <span class="font-weight-bold">{{firstname}} {{lastname}}</span>
                <span class="text-black-50">{{email}}</span>
    </div>
        </div>
        <div class="col-md-5">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Edit your profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels" >First Name</label>
                    <input type="text"  id="names" class="form-control" placeholder="First name" v-model="firstname"></div>
                    <div class="lastname">
                        <label class="labels">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" v-model="lastname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Language</label>
                    <input type="text" class="form-control" id ="langtextbox" v-model="lang" placeholder="Input the languages you speak!"><br></div>
                    <div class="col-md-12"><label class="labels">Biography</label>
                    <input type="text" class="form-control" id="biotextbox" v-model="bio" placeholder="Summarise your interests and hobbies!"></div>
                </div>
                <div class="mt-5 text-center"><button @click="saveEdits()" class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
    </body>
</template>

<script>

import firebase from 'firebase';
import { db} from "../main.js";

export default {
    name: "EditProfile",
        data(){
      return{
        username: "",
        firstname: "",
        lastname: "",
        bio: "",
        lang:"",
        email:""
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
            db.collection("users").doc(String(fbuser))
            .get()
            .then(doc => {
            if (doc.exists){
            const data = doc.data()
            self.firstname = data["firstname"]
            self.lastname = data["lastname"]
            self.username = data["username"]
            self.about = data["about"]
            self.bio = data["bio"]
            self.lang = data["lang"]
            self.email=data["email"]
            }
            else{
                console.log("no such document")
            }
            })
        } 
        }
    })
    }
        display();
        },

    methods: {
        saveEdits() {
        const self = this;
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
        if (user){
            let fbuser = auth.currentUser.email;
            if (fbuser){
            db.collection("users").doc(String(fbuser))
            .update({
                firstname :self.firstname,
                lastname : self.lastname,
                username : self.username,
                bio : self.bio,
                lang : self.lang,
                email : self.email
                })
            
            }
            else{
                console.log("no such document")
            }
        }
        })
        alert("Edit successfully saved!")
        }
    }
}

</script>

<style scoped>
body {
    background: rgba(63,163,184,1);
    zoom:130%;
}
.form-control{
    font-size: 12px;
    padding:15px;

}

.form-control:focus {
    box-shadow: none;
    border-color: rgba(63,163,184,1);
}

.profile-button {
    background:rgba(63,163,184,1);
    box-shadow: none;
    border: none
}
.lastname{
    position:absolute;
    top: 101px;
    right:0px;
    left:340px;
    width: 290px;
}

#langtextbox{
    width:600px;    
}
#biotextbox{
    height: 150px;
    width:600px;
}
#names{
    width:290px;
}

.profile-button:hover {
    background: rgba(63,163,184,1)
}

.profile-button:focus {
    background: rgba(63,163,184,1);
    box-shadow: none
}

.profile-button:active {
    background: rgba(63,163,184,1);
    box-shadow: none
}

.back:hover {
    color: rgba(63,163,184,1);
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: rgba(63,163,184,1);
    color: #fff;
    cursor: pointer;
    border: solid 1px rgba(63,163,184,1)
}

</style>