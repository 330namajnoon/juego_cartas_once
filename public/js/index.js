import { CrateElement } from "./abzarha.js";

const socket = io();

let rabetekarbari;

function RabeteKarbari() {
    this.body = document.querySelector("body");
    this.paszamine = CrateElement({name:"div",class:"paszamine"});
    this.imgDiv = CrateElement({name:"div",class:"imgDiv"});
    this.file = CrateElement({name:"input",type:"file"});
    this.img = CrateElement({name:"img"})

    this.nameDiv = CrateElement({name:"div",class:"nameDiv"});
    this.nameInput = CrateElement({name:"input",atriviuts:[{name:"placeholder",value:"Nombre"}]});
    this.nameLine = CrateElement({name:"div"});

    this.button = CrateElement({name:"input",type:"button",value:"ENTRAR"});

    this.Crate();
    this.imgDiv.addEventListener("click",()=> {
        this.file.click();
    })
    this.img.addEventListener("change",()=> {
        this.uploadImage();
    })
}
RabeteKarbari.prototype.Crate = function() {
    this.paszamine.appendChild(this.imgDiv);
    this.paszamine.appendChild(this.file);
    this.paszamine.appendChild(this.img);
    this.nameDiv.appendChild(this.nameInput);
    this.nameDiv.appendChild(this.nameLine);
    this.paszamine.appendChild(this.nameDiv);
    this.paszamine.appendChild(this.button);
    this.body.appendChild(this.paszamine);
}
RabeteKarbari.prototype.uploadImage = function() {
    let 
}

rabetekarbari = new RabeteKarbari();