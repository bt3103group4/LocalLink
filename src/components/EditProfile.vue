<template>
  <head>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    />
  </head>
  <body>
    <v-layout row class="profilePicture">
      <v-flex md6 offset-sm3>
        <div>
          <div>
            <input
              type="file"
              ref="input1"
              style="display: none"
              @change="previewImage"
              accept="image/*"
            />
          </div>

          <br />
        </div>
      </v-flex>
    </v-layout>

    <div class="infodetails">
      <div class="row">
        <div class="col-md-4">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <p id="loading" v-if="uploaded == false" >Please wait while your image loads... </p>
            <img
              v-if="profilepic != ''"
              class="profilepicture"
              :src="profilepic"
              width="90"
            />
            <img class="profilepicture" v-else src="~@/images/unknown.jpeg" />
            <br />
            <span class="font-weight-bold">{{ firstname }} {{ lastname }}</span>
            <span class="text-black-50">{{ email }}</span>
          </div>
          <button id="choosephoto" @click="click1">Edit photo</button>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Edit your profile</h4>
            </div>
            <div class="name">
              <div class="col-md-6">
                <label class="labels">First Name</label>
                <input
                  type="text"
                  id="names"
                  class="form-control"
                  placeholder="First name"
                  v-model="firstname"
                />
                <label id ="lastname" class="labels">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id ="lastname" 
                  placeholder="Last name"
                  v-model="lastname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Language</label>
                <input
                  type="text"
                  class="form-control"
                  id="langtextbox"
                  v-model="lang"
                  placeholder="Input the languages you speak!"
                /><br />
              </div>
              <div class="col-md-12">
                <label class="labels">Biography</label>
                <input
                  type="text"
                  class="form-control"
                  id="biotextbox"
                  v-model="bio"
                  placeholder="Summarise your interests and hobbies!"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button
                @click="saveEdits(), $router.go(-1)"
                class="btn btn-primary profile-button"
                type="button"
              >
                Save Profile
              </button>
              <button
                @click="deleteProfile()"
                class="btn btn-danger profile-button-danger"
                type="button"
              >

              <span v-if="!askedForDeleteConfirmation">
                Delete Profile
              </span>
              <span v-else>
                Confirm Delete?
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import firebase from "firebase";
import { db } from "../main.js";

export default {
  name: "EditProfile",
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      bio: "",
      lang: "",
      email: "",
      profilepic: "",
      uploaded:true
    };
  },
  mounted() {
    const self = this;
    async function display() {
      const auth = firebase.auth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          let fbuser = auth.currentUser.email;
          if (fbuser) {
            db.collection("users")
              .doc(String(fbuser))
              .get()
              .then((doc) => {
                if (doc.exists) {
                  const data = doc.data();
                  self.firstname = data["firstname"];
                  self.lastname = data["lastname"];
                  self.username = data["username"];
                  self.email = data["email"];

                  if (data["bio"] != null) {
                    self.bio = data["bio"];
                  }
                  if (data["lang"] != null) {
                    self.lang = data["lang"];
                  }
                  if (data["profilepic"] != null) {
                    self.profilepic = data["profilepic"];
                  }
                } else {
                  console.log("no such document");
                }
              });
          }
        }
      });
    }
    display();
  },

  methods: {
    saveEdits() {
      const self = this;
      const auth = firebase.auth();
      auth.onAuthStateChanged((user) => {
        if (user) {
          let fbuser = auth.currentUser.email;
          console.log(fbuser);
          if (fbuser) {
            db.collection("users").doc(String(fbuser)).update({
              firstname: self.firstname,
              lastname: self.lastname,
              username: self.username,
              bio: self.bio,
              lang: self.lang,
              email: self.email,
              profilepic: self.profilepic,
            });
            console.log(self.profilepic);
          } else {
            console.log("no such document");
          }
        }
      });
      alert("Edit successfully saved!");
    },
    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.profilepic = null;
      this.uploaded=false;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      let self = this;
      self.profilepic = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            self.profilepic = url;
            console.log("Picture");
            console.log(this.profilepic);
            self.uploaded=true;
          });
        }
      );
    },
  },
};
</script>

<style scoped>
body {
  zoom: 130%;
}
.profilepicture {
  height: 300px;
  width: 300px;
  border-radius: 1000px;
  object-fit: cover;
}
.form-control {
  font-size: 12px;
  padding: 15px;
}
#choosephoto {
  position: absolute;
  top: 180px;
  left: 140px;
}
#choosephoto:hover {
  cursor: pointer;
}
.form-control:focus {
  box-shadow: none;
  border-color: rgba(63, 163, 184, 1);
}
#loading{
  position: absolute;
  top:220px;
  left:90px;
  font-size: 12px;
  font-style: italic;

}
.profile-button {
  background: rgba(63, 163, 184, 1);
  box-shadow: none;
  border: none;
  margin: 10px;
}

.profile-button-danger {
  box-shadow: none;
  border: none;
  margin: 10px;
}

.name{
  position: relative;
  left:-15px;
  width:600px;
  height:50px;
}
#lastname{
  position: relative;
  top: -62px;
  width:300px;

  left:300px;
}
#langtextbox {
  width: 600px;
}
#uploadImage {
  top: 300px;
  width: 200px;
  position: absolute;
  left: 210px;
  align-content: center;
}
#biotextbox {
  height: 150px;
  width: 600px;
}
#names {
  width: 290px;
}

.profile-button:hover {
  background: rgba(63, 163, 184, 1);
}

.profile-button:focus {
  background: rgba(63, 163, 184, 1);
  box-shadow: none;
}

.profile-button:active {
  background: rgba(63, 163, 184, 1);
  box-shadow: none;
}

.back:hover {
  color: rgba(63, 163, 184, 1);
  cursor: pointer;
}

.labels {
  font-size: 11px;
}
.infodetails {
  position: absolute;
  top: 100px;
  left: 50px;
}
.add-experience:hover {
  background: rgba(63, 163, 184, 1);
  color: #fff;
  cursor: pointer;
  border: solid 1px rgba(63, 163, 184, 1);
}

</style>