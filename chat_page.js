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

  user_name = localStorage.getItem("User Name");
    Room_name = localStorage.getItem("Room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            likes:0
      });
      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}