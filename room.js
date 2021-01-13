var firebaseConfig = {
  apiKey: "AIzaSyBmbIkIypHo-xanP-kN2YrCygSvfEZnqSo",
  authDomain: "let-s-chat-3bfe2.firebaseapp.com",
  databaseURL: "https://let-s-chat-3bfe2-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-3bfe2",
  storageBucket: "let-s-chat-3bfe2.appspot.com",
  messagingSenderId: "354901244148",
  appId: "1:354901244148:web:b8f919d7386ba7209186a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user = localStorage.getItem("User");
document.getElementById("user_name").innerHTML = "Welcome " + user + " !!";

function get_data() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending_rooms").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;

  console.log("Room name is = " + Room_names);
  column = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("trending_rooms").innerHTML += column;
});});}
get_data();

function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    Purpose: "adding room name"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "chat_page.html";
}

function redirect(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("User Name");
  localStorage.removeItem("Room_name");
  window.location.replace("index.html"); 
}