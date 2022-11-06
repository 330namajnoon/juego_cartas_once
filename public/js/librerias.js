function CrearObjeto(name = "cartas", val = []) {
    let objeto = {};
    objeto[name] = val;
    return objeto;
}

function crearCartas() {
    let cartas = [];
    for (let index1 = 1; index1 <= 4; index1++) {
        for (let index2 = 1; index2 <= 13; index2++) {
            cartas.push({ numero: index2, tipo: index1 });

        }
    }
    return cartas;
}


let caja = CrearObjeto("cartas", crearCartas());
console.log(caja);

function reparterCartas(caja, cartas = [4, 4, 4]) {
    let cartasDeJuego = [];
    cartas.forEach(e => {
        let cartasDePersonas = [];
        for (let index1 = 0; index1 < e; index1++) {
            let test = false;
            while (test == false) {
                let numeroRandomDeTipo = Math.floor(Math.random() * 4) + 1;
                let numeroRandomDeCart = Math.floor(Math.random() * 13) + 1;
                for (let index2 = 0; index2 < caja.cartas.length; index2++) {
                    let cart = caja.cartas[index2]
                    if (cart.numero == numeroRandomDeCart && cart.tipo == numeroRandomDeTipo) {
                        cartasDePersonas.push(cart);
                        caja.cartas.splice(index2, 1);
                        test = true;
                    }

                }
            }

        }
        cartasDeJuego.push(cartasDePersonas);
    })
    return cartasDeJuego;
}
let cartasDePersonas = reparterCartas(caja, [4, 4, 4]);
console.log(cartasDePersonas);
console.log(caja);



let yo = CrearObjeto("cartas", cartasDePersonas[0]);
let misGanancias = CrearObjeto("cartas", []);
let tu = CrearObjeto("cartas", cartasDePersonas[1]);
let mesa = CrearObjeto("cartas", cartasDePersonas[2]);

// yo.cartas = [{ numero: 11 }, { numero: 1 }, { numero: 6 }, { numero: 3 }];
// mesa.cartas = [{ numero: 2 }, { numero: 1 }, { numero: 1 }, { numero: 1 }];

console.log(yo)
console.log(mesa);
console.log(misGanancias);




function ContarCartas(cartaJugada = 2, misCartas = {}, cartasDeMesa = {}, misGanancias = {}) {
    let cartNo = misCartas.cartas[cartaJugada].numero;
    let test = false;
    if(misCartas.cartas[cartaJugada].numero < 11) {
        for (let index1 = 0; index1 < cartasDeMesa.cartas.length; index1++) {

            if (misCartas.cartas[cartaJugada].numero < 11 &&
                cartasDeMesa.cartas[index1].numero < 11 &&
                misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero == 11) {
                misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                misCartas.cartas.splice(cartaJugada, 1);
                cartasDeMesa.cartas.splice(index1, 1);
                test = true;
                index1 = cartasDeMesa.cartas.length
            } else {
                for (let index2 = 0; index2 < cartasDeMesa.cartas.length; index2++) {

                    if (misCartas.cartas[cartaJugada].numero < 11 &&
                        cartasDeMesa.cartas[index1].numero < 11 &&
                        cartasDeMesa.cartas[index2].numero < 11 &&
                        misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero == 11 &&
                        index2 !== index1) {

                        misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                        misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                        misGanancias.cartas.push(cartasDeMesa.cartas[index2]);
                        misCartas.cartas.splice(cartaJugada, 1);
                        cartasDeMesa.cartas.splice(index1, 1,"");
                        cartasDeMesa.cartas.splice(index2, 1,"");
                        test = true;
                        index1 = cartasDeMesa.cartas.length
                        index2 = cartasDeMesa.cartas.length;
                    } else {
                        for (let index3 = 0; index3 < cartasDeMesa.cartas.length; index3++) {

                            if (misCartas.cartas[cartaJugada].numero < 11 &&
                                cartasDeMesa.cartas[index1].numero < 11 &&
                                cartasDeMesa.cartas[index2].numero < 11 &&
                                cartasDeMesa.cartas[index3].numero < 11 &&
                                misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero + cartasDeMesa.cartas[index3].numero == 11 &&
                                index2 !== index1 && index3 !== index2 && index3 !== index1) {

                                misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                                misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                                misGanancias.cartas.push(cartasDeMesa.cartas[index2]);
                                misGanancias.cartas.push(cartasDeMesa.cartas[index3]);
                                misCartas.cartas.splice(cartaJugada, 1);
                                cartasDeMesa.cartas.splice(index1, 1, "");
                                cartasDeMesa.cartas.splice(index2, 1, "");
                                cartasDeMesa.cartas.splice(index3, 1, "");

                                test = true;
                                index1 = cartasDeMesa.cartas.length
                                index2 = cartasDeMesa.cartas.length;
                                index3 = cartasDeMesa.cartas.length;
                            } else {
                                for (let index4 = 0; index4 < cartasDeMesa.cartas.length; index4++) {

                                    if (misCartas.cartas[cartaJugada].numero < 11 &&
                                        cartasDeMesa.cartas[index1].numero < 11 &&
                                        cartasDeMesa.cartas[index2].numero < 11 &&
                                        cartasDeMesa.cartas[index3].numero < 11 &&
                                        cartasDeMesa.cartas[index4].numero < 11 &&
                                        misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero + cartasDeMesa.cartas[index3].numero + cartasDeMesa.cartas[index4].numero == 11 &&
                                        index2 !== index1 && index3 !== index2 && index3 !== index1 && index4 !== index3 && index4 !== index2 && index4 !== index1) {
                                        console.log(cartasDeMesa.cartas)
                                        misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                                        misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                                        misGanancias.cartas.push(cartasDeMesa.cartas[index2]);
                                        misGanancias.cartas.push(cartasDeMesa.cartas[index3]);
                                        misGanancias.cartas.push(cartasDeMesa.cartas[index4]);
                                        misCartas.cartas.splice(cartaJugada, 1);
                                        cartasDeMesa.cartas.splice(index1, 1, "");
                                        cartasDeMesa.cartas.splice(index2, 1, "");
                                        cartasDeMesa.cartas.splice(index3, 1, "");
                                        cartasDeMesa.cartas.splice(index4, 1, "");
                                        test = true;
                                        index1 = cartasDeMesa.cartas.length
                                        index2 = cartasDeMesa.cartas.length;
                                        index3 = cartasDeMesa.cartas.length;
                                        index4 = cartasDeMesa.cartas.length;
                                    } else {

                                    }

                                }

                            }

                        }
                    }

                }
            }
        }
    }

    if (cartNo == 11) {
        for (let index1 = 0; index1 < cartasDeMesa.cartas.length; index1++) {
            if(cartasDeMesa.cartas[index1].numero < 11) {
                misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                cartasDeMesa.cartas.splice(index1,1,"");
            }
            
        }
        misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
        misCartas.cartas.splice(cartaJugada,1,"");

    }

    if(cartNo == 12 || cartNo == 13) {
        for (let index = 0; index <  cartasDeMesa.cartas.length; index++) {
            if (cartasDeMesa.cartas[index].numero == cartNo) {
                misGanancias.cartas.push(cartasDeMesa.cartas[index]);
                cartasDeMesa.cartas.splice(index,1,"");
                misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                misCartas.cartas.splice(cartaJugada,1,"");
            }
            
        }
       
    }


    if (test == false) {
        cartasDeMesa.cartas.push(misCartas.cartas[cartaJugada]);
        misCartas.cartas.splice(cartaJugada, 1)
    }

   

    
    let cartas_ = [];
    cartasDeMesa.cartas.forEach(e => {
        if(e !== "") cartas_.push(e);
    })
    cartasDeMesa.cartas = cartas_;

}

let test = false;

while(caja.cartas.length > 0) {

let yo_m2 = "yo:"
yo.cartas.forEach(e => {
    yo_m2 += e.numero + "--";
})
console.log(yo_m2);
let mesa_m2 = "mesa: "
mesa.cartas.forEach(e => {
    mesa_m2 += e.numero + "--";
})
console.log(mesa_m2);

console.log(ContarCartas(Number(prompt()), yo, mesa, misGanancias));
let g_m2 = "g: "
misGanancias.cartas.forEach(e => {
    g_m2 += e.numero + "--";
})
console.log(g_m2);
yo_m2 = "yo: "
yo.cartas.forEach(e => {
    yo_m2 += e.numero + "--";
})
console.log(yo_m2);
mesa_m2 = "mesa: "
mesa.cartas.forEach(e => {
    mesa_m2 += e.numero + "--";
})
console.log(mesa_m2);

if (yo.cartas.length == 0) {

    cartasDePersonas = reparterCartas(caja, [4, 4]);
    yo = CrearObjeto("cartas", cartasDePersonas[0]);
}
if (caja.cartas.length <= 0 && yo.cartas.length <= 0) {
    test = true;
    alert("final")
}

}