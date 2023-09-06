
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCmFqn-hVaE5uot9gcPcGZ3GiIWk1QOBko",
      authDomain: "kwitter-a1489.firebaseapp.com",
      databaseURL: "https://kwitter-a1489-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1489",
      storageBucket: "kwitter-a1489.appspot.com",
      messagingSenderId: "875984947937",
      appId: "1:875984947937:web:5307799be62df75e6dc5a0"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
