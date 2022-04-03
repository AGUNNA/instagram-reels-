import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase"
// import { firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDq-zESnWdamAXwcryXGFvfjZH32U6RWqc",
    authDomain: "instagram-reels-ca074.firebaseapp.com",
    databaseURL: "https://instagram-reels-ca074.firebaseio.com",
    projectId: "instagram-reels-ca074",
    storageBucket: "instagram-reels-ca074.appspot.com",
    messagingSenderId: "753816765053",
    appId: "1:753816765053:web:2f86cee92caf62be282714",
    measurementId: "G-1K12NL4RLQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;