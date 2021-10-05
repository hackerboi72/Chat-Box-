
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var  firebaseConfig = {
  apiKey: "AIzaSyA-BgM_M3cv-P0DWn96t_wdtZQ7r_BtZlc",
  authDomain: "chat-box-16dd6.firebaseapp.com",
  projectId: "chat-box-16dd6",
  storageBucket: "chat-box-16dd6.appspot.com",
  messagingSenderId: "241827665908",
  appId: "1:241827665908:web:52539af3f1cee6d91bcba1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
