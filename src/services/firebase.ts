import firebase from "firebase";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBMC-7UdkYoV30d06Rkb7_xlWCzqHEoDqg",
  authDomain: "fatec-tickets-mobile.firebaseapp.com",
  databaseURL: "https://fatec-tickets-mobile-default-rtdb.firebaseio.com",
  projectId: "fatec-tickets-mobile",
  storageBucket: "fatec-tickets-mobile.appspot.com",
  messagingSenderId: "198404853570",
  appId: "1:198404853570:web:f5886d571f10d1b80842db",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const database = firebase.database();
const auth = firebase.auth();

export { firebase, firestore, database, auth };
