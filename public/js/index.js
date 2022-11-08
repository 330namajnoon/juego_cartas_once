import { CrateElement } from "./abzarha.js";

const socket = io();

let rabetekarbari;

function RabeteKarbari() {
    this.body = document.querySelector("body");
    this.paszamine = CrateElement({name:"div",class:"paszamine"});
    this.file = CrateElement({name:"input",type:"file"});
    this.imgDiv = CrateElement({name:"div",class:"imgDiv"});
    this.img = CrateElement({name:"img"})
}

rabetekarbari = new RabeteKarbari();