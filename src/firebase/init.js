// Your web app's Firebase configuration
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB-n_LzT6IEfEX1JQ0ZKzvLV1DWCJszj8I",
    authDomain: "ninja-geo-ce3eb.firebaseapp.com",
    databaseURL: "https://ninja-geo-ce3eb.firebaseio.com",
    projectId: "ninja-geo-ce3eb",
    storageBucket: "",
    messagingSenderId: "82657578309",
    appId: "1:82657578309:web:695d7d432ae69756"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()