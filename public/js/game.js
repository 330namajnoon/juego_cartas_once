import { CrateElement } from "./abzarha.js";
import { crearCartas, reparterCartas, ContarCartas, BuscarCart ,Sira} from "./librerias.js";

let socket = io();
let rabetekarbari;
let myData;
let roomData;
let tipoDeCartas = ["", "gishniz", "khaj", "khesht", "del"];
let link = CrateElement({ name: "a", atriviuts: [{ name: "href", value: "./users.html" }] });
document.querySelector("body").appendChild(link);

function Cart(cartData) {
    this.data = cartData;
    this.paszamine = CrateElement({ name: "div", class: "cartPaszamine" });
    this.numero1 = CrateElement({ name: "h3", class: "cartNumero1", inerhtml: this.data.numero });
    this.img = CrateElement({ name: "img", src: `../images/${tipoDeCartas[this.data.tipo]}.png` });
    this.numero2 = CrateElement({ name: "h3", class: "cartNumero2", inerhtml: this.data.numero });

    this.Crate();

    this.paszamine.addEventListener("click", (e) => {
        
        if(e.composedPath()[2].id == "paszamine" && roomData.users[roomData.nobat].id == myData.id ){

            socket.emit(`ersaleCart`,this.data,roomData.roomName);
            setTimeout(timer,2000);
            let data = this.data;
            function timer (){
                roomData.users.forEach(e => {
                    if(e.id == myData.id) {
                        Sira(roomData);
                        ContarCartas(BuscarCart(e.cartas.cartas,data.numero,data.tipo),e.cartas,roomData.cartasDeMesa,e.ganancias);
                        socket.emit(`contarCaratas`,roomData,roomData.roomName);
                    }
                })
            }
            this.paszamine.remove();
        }
        
    })
}
Cart.prototype.Crate = function () {
    this.paszamine.appendChild(this.numero1);
    this.paszamine.appendChild(this.img);
    this.paszamine.appendChild(this.numero2);
    if (this.data.tipo <= 2) {
        this.paszamine.style.backgroundColor = "#D40000";
        this.numero1.style.color = "#000000";
        this.numero2.style.color = "#000000";
    } else {
        this.paszamine.style.backgroundColor = "#000000";
        this.numero1.style.color = "#D40000";
        this.numero2.style.color = "#D40000";
    }
    switch (this.data.tipo) {
        case 1:
            this.img.style.width = "68px";
            break;
        case 2:
            this.img.style.width = "122px";
            break;
        case 3:
            this.img.style.width = "78px";
            break;

        default:
            this.img.style.width = "74px";
            break;
    }
    switch (this.data.numero) {
        case 1:
            this.numero1.innerHTML = "A";
            this.numero2.innerHTML = "A";
            break;
        case 11:
            this.numero1.innerHTML = "J";
            this.numero2.innerHTML = "J";
            break;
        case 12:
            this.numero1.innerHTML = "Q";
            this.numero2.innerHTML = "Q";
            break;
        case 13:
            this.numero1.innerHTML = "K";
            this.numero2.innerHTML = "K";
            break;
    }
}



function Heder(users) {
    this.usersData = users;
    this.paszamine = CrateElement({ name: "div", class: "headerPaszamine" });
    this.userPaszamine1 = CrateElement({ name: "div", class: "userPaszamine1" });
    this.userImage1 = CrateElement({ name: "img" });
    this.userName1 = CrateElement({ name: "h3" });
    this.vs = CrateElement({ name: "img", src: "../images/vs.jpg" });
    this.userPaszamine2 = CrateElement({ name: "div", class: "userPaszamine2" });
    this.userImage2 = CrateElement({ name: "img" });
    this.userName2 = CrateElement({ name: "h3" });

    this.Crate();
}
Heder.prototype.Crate = function () {
    this.paszamine.appendChild(this.userPaszamine1);
    this.userPaszamine1.appendChild(this.userImage1);
    this.userPaszamine1.appendChild(this.userName1);
    this.paszamine.appendChild(this.vs);
    this.paszamine.appendChild(this.userPaszamine2);
    this.userPaszamine2.appendChild(this.userName2);
    this.userPaszamine2.appendChild(this.userImage2);
    this.usersData.forEach(e => {
        if (e.id == myData.id) {
            this.userImage1.src = `../images/${e.img}`;
            this.userName1.innerHTML = e.username;
        } else {
            this.userImage2.src = `../images/${e.img}`;
            this.userName2.innerHTML = e.username;
        }
    })
    this.sira();
}
Heder.prototype.sira = function () {
    let colors = { c_1: "#33FF00", c_2: "#FF0000" };
    let sira = roomData.users[roomData.nobat].username;
    if (myData.username == sira) {
        this.userName1.style.color = colors.c_1;
        this.userPaszamine1.style.borderBottom = `solid  3px  ${colors.c_1}`;
        this.userImage1.style.boxShadow = `1px 1px 30px 1px ${colors.c_1}`;
        this.userName2.style.color = colors.c_2;
        this.userPaszamine2.style.borderBottom = `solid  3px  ${colors.c_2}`;
        this.userImage2.style.boxShadow = `1px 1px 30px 1px ${colors.c_2}`;
    } else {
        this.userName1.style.color = colors.c_2;
        this.userPaszamine1.style.borderBottom = `solid  3px  ${colors.c_2}`;
        this.userImage1.style.boxShadow = `1px 1px 30px 1px ${colors.c_2}`;
        this.userName2.style.color = colors.c_1;
        this.userPaszamine2.style.borderBottom = `solid  3px  ${colors.c_1}`;
        this.userImage2.style.boxShadow = `1px 1px 30px 1px ${colors.c_1}`;
    }
}


function RabeteKarbari() {
    this.body = document.querySelector("body");
    // this.paszamine = CrateElement({name:"div",class:"paszamine"});
    this.header = new Heder(roomData.users);
    this.paszamine1 = CrateElement({ name: "div", class: "paszamine" });
    this.paszamine2 = CrateElement({ name: "div", class: "paszamine" });
    this.paszamine3 = CrateElement({ name: "div", class: "paszamine" ,id:"paszamine"});

    this.Crate();
}
RabeteKarbari.prototype.Crate = function () {
    this.body.appendChild(this.header.paszamine);
    this.body.appendChild(this.paszamine1);
    this.body.appendChild(this.paszamine2);
    this.body.appendChild(this.paszamine3);
}
RabeteKarbari.prototype.pakhshCartha = function () {
    this.paszamine1.innerHTML = "";
    this.paszamine2.innerHTML = "";
    this.paszamine3.innerHTML = "";
    roomData.users.forEach(e => {
        if (e.id == myData.id) {
            e.cartas.cartas.forEach(e => {
                let cart = new Cart(e);
                this.paszamine3.appendChild(cart.paszamine);
            })
        }
    })
    roomData.cartasDeMesa.cartas.forEach(e => {
        let cart = new Cart(e);
        this.paszamine2.appendChild(cart.paszamine);
    })
}









if (localStorage.getItem("userData") && localStorage.getItem("roomData")) {
    myData = JSON.parse(localStorage.getItem("userData"));
    roomData = JSON.parse(localStorage.getItem("roomData"));
    if (roomData.adminId == myData.id) {
        socket.emit("roomLoad", roomData.roomName);
        socket.on(`roomLoad${roomData.roomName}`, (roomName) => {
            roomData.caja.cartas = crearCartas();
            let cartas = reparterCartas(roomData.caja, [4, 4, 4]);
            roomData.users[0].cartas.cartas = cartas[0];
            roomData.users[1].cartas.cartas = cartas[1];
            roomData.cartasDeMesa.cartas = cartas[2];
            socket.emit(`pakhsheCartha${roomData.roomName}`, roomData);
        })
    }
    socket.on(`pakhsheCartha${roomData.roomName}`, (roomData_) => {
        roomData = roomData_;
        
        rabetekarbari = new RabeteKarbari();
        rabetekarbari.pakhshCartha()
       
    })
    socket.on(`ersaleCart${roomData.roomName}`,(cartData)=> {
        rabetekarbari.paszamine1.innerHTML = "";
        let cart = new Cart(cartData);
        rabetekarbari.paszamine1.appendChild(cart.paszamine);

    })
    socket.on(`contarCaratas${roomData.roomName}`, (roomData_) => {
        roomData = roomData_;
        
        if (roomData.users[0].cartas.cartas.length !== 0 || roomData.users[1].cartas.cartas.length !== 0) {
            rabetekarbari.pakhshCartha();
            rabetekarbari.header.sira();
            
        }else {
            roomData.caja.cartas = crearCartas();
            let cartas = reparterCartas(roomData.caja, [4,4]);
            roomData.users[0].cartas.cartas = cartas[0];
            roomData.users[1].cartas.cartas = cartas[1];
            socket.emit(`contarCaratas`,roomData,roomData.roomName);
        }
    })

} else {
    link.click();
}






