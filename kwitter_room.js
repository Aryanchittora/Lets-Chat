var user = localStorage.getItem("User");
document.getElementById("user_name").innerHTML = user;

var firebaseConfig = {
    apiKey: "AIzaSyDMtXhKPev5KnJzJVLnpyVdm40UYBsR35A",
    authDomain: "let-s-chat-75004.firebaseapp.com",
    databaseURL: "https://let-s-chat-75004-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-75004",
    storageBucket: "let-s-chat-75004.appspot.com",
    messagingSenderId: "789594658470",
    appId: "1:789594658470:web:95090b126cf31b4c10c667"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);