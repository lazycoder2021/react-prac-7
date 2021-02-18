import firebase from "firebase"; 


var firebaseConfig = {
    apiKey: "AIzaSyBu1G1pQ-4HNMa_rQ9QAcQ-J0-RNX_rGRc",
    authDomain: "fire-base-crud-b376a.firebaseapp.com",
    databaseURL: "https://fire-base-crud-b376a-default-rtdb.firebaseio.com",
    projectId: "fire-base-crud-b376a",
    storageBucket: "fire-base-crud-b376a.appspot.com",
    messagingSenderId: "55795977722",
    appId: "1:55795977722:web:c7fb553245894bb7fbe843"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref(); 













// JavaScript source code
