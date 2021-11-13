import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB_J3W2iX0B3usVAh8PN9o_-6Z5MB6MhwY",
  authDomain: "locallink-4d9cd.firebaseapp.com",
  projectId: "locallink-4d9cd",
  storageBucket: "locallink-4d9cd.appspot.com",
  messagingSenderId: "33199670957",
  appId: "1:33199670957:web:e99731c62c6a364dfd2824"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();
createApp(App).use(router).mount('#app')
