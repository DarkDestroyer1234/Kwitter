//COLOCA LAS CREDENCIALES DE FIREBASE
var  firebaseConfig = {
  apiKey: "AIzaSyA_bi3yyEL83nAhZO_hurYV1KG_UkvJpzw",
  authDomain: "kwitter-ce9ad.firebaseapp.com",
  databaseURL: "https://kwitter-ce9ad-default-rtdb.firebaseio.com",
  projectId: "kwitter-ce9ad",
  storageBucket: "kwitter-ce9ad.appspot.com",
  messagingSenderId: "519075115449",
  appId: "1:519075115449:web:59c3840c086c50f9d4c668"
};
   
   firebase.initializeApp(firebaseConfig);




   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


  
  document.getElementById("user_name").innerHTML = "Hello " + user_name + "!";



 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }



function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

   

      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


      });});}



getRoom();




function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


