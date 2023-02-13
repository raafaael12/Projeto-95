userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem vindo(a)" +userName+ "!"

function addRoom(){
    roomName = document.getElementById("roomName").value;

    firebase.database().ref('/').child(roomName).update({
        nomeSala:"adicionar nome de sala",
    })
}

function getData(){
    firebase.database().ref("/").on("value", function(snapchat){
        document.getElementById("output").innerHTML = " ";
        snapchat.forEach(function (childSnapchat){
            childKey = childSnapchat.key;
            roomNames = childKey;
            row ="<div class='roomName' id=" +roomNames +" onclick='redirectToRoomName(this.id)' >#" +roomNames +"</div><hr>"
            document.getElementById("output").innerHTML += row;
        });
    })
}
getData();