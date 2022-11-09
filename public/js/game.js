import { CrateElement } from "./abzarha.js";

let socket = io();
let rabetekarbari;
let myData;
let roomData;
let link = CrateElement({name:"a",atriviuts:[{name:"href",value:"./users.html"}]});
document.querySelector("body").appendChild(link);



function RabeteKarbari() {
    this.body = document.querySelector("body");
    this.paszamine = CrateElement({name:"div",class:"paszamine"});
    this.Crate();
}
RabeteKarbari.prototype.Crate = function() {
    this.body.appendChild(this.paszamine);
}









if(localStorage.getItem("userData") && localStorage.getItem("roomData")) {
    myData = JSON.parse(localStorage.getItem("userData"));
    roomData = JSON.parse(localStorage.getItem("roomData"));
    rabetekarbari = new RabeteKarbari();
    if (roomData.adminId == myData.id) {
        socket.emit("roomLoad",roomData.roomName);
    }
    
}else {
    link.click();
}

socket.on(`roomLoad${roomData.roomName}`,(roomName)=> {
    alert(roomName);
})



