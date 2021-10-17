
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD8bdZWjLJEmCcgl3yFo-GBph_RMLitkgo",
  authDomain: "chat-box-d5bda.firebaseapp.com",
  databaseURL: "https://chat-box-d5bda-default-rtdb.firebaseio.com",
  projectId: "chat-box-d5bda",
  storageBucket: "chat-box-d5bda.appspot.com",
  messagingSenderId: "922185412767",
  appId: "1:922185412767:web:6a2fc5a469451644e9b2aa"
}
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}