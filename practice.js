
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBHyrM1kvZB45s8mUQDE8enTCb2wMh3DG4",
    authDomain: "twitterbutwithnocancelculture.firebaseapp.com",
    databaseURL: "https://twitterbutwithnocancelculture-default-rtdb.firebaseio.com",
    projectId: "twitterbutwithnocancelculture",
    storageBucket: "twitterbutwithnocancelculture.appspot.com",
    messagingSenderId: "174073921773",
    appId: "1:174073921773:web:161c35d4c87e29373fcce4",
    measurementId: "G-ZC30Y7H5RT"
  };

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }