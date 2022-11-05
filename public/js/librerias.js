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
let cartasDePersonas = new reparterCartas(caja, [4, 4, 4]);
console.log(cartasDePersonas);
console.log(caja);



let yo = CrearObjeto("cartas", cartasDePersonas[0]);
let misGanancias = CrearObjeto("cartas", []);
let tu = CrearObjeto("cartas", cartasDePersonas[1]);
let mesa = CrearObjeto("cartas", cartasDePersonas[2]);

console.log(yo)
console.log(mesa);
console.log(misGanancias);




function ContarCartas(cartaJugada = 2, misCartas = {}, cartasDeMesa = {}, misGanancias = {}) {
    let test = false;
    for (let index1 = 0; index1 < cartasDeMesa.cartas.length; index1++) {
        let faltaNumero1 = 11 - (misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero);
        if (misCartas.cartas[cartaJugada].numero < 11 &&
            cartasDeMesa.cartas[index1].numero < 11 &&
            misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero == 11) {
            misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
            misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
            misCartas.cartas.splice(cartaJugada, 1);
            cartasDeMesa.cartas.splice(index1, 1);
        } else {
            for (let index2 = 0; index2 < cartasDeMesa.cartas.length; index2++) {
                let faltaNumero2 = 11 - (misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero);
                if (misCartas.cartas[cartaJugada].numero < 11 &&
                    cartasDeMesa.cartas[index1].numero < 11 &&
                    cartasDeMesa.cartas[index2].numero < 11 &&
                    misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero == 11 &&
                    index2 !== index1) {
                    misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                    misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                    misGanancias.cartas.push(cartasDeMesa.cartas[index2]);
                    misCartas.cartas.splice(cartaJugada, 1);
                    cartasDeMesa.cartas.splice(index1, 1);
                    cartasDeMesa.cartas.splice(index2, 1);
                    test = true;
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
                            cartasDeMesa.cartas.splice(index1, 1);
                            cartasDeMesa.cartas.splice(index2, 1);
                            cartasDeMesa.cartas.splice(index3, 1);
                            test = true;
                        } else {
                            for (let index4 = 0; index4 < cartasDeMesa.cartas.length; index4++) {

                                if (misCartas.cartas[cartaJugada].numero < 11 &&
                                    cartasDeMesa.cartas[index1].numero < 11 &&
                                    cartasDeMesa.cartas[index2].numero < 11 &&
                                    cartasDeMesa.cartas[index3].numero < 11 &&
                                    cartasDeMesa.cartas[index4].numero < 11 &&
                                    misCartas.cartas[cartaJugada].numero + cartasDeMesa.cartas[index1].numero + cartasDeMesa.cartas[index2].numero + cartasDeMesa.cartas[index3].numero + cartasDeMesa.cartas[index4].numero == 11 &&
                                    index2 !== index1 && index3 !== index2 && index3 !== index1 && index4 !== index3 && index4 !== index2 && index4 !== index1) 
                                {
                                    misGanancias.cartas.push(misCartas.cartas[cartaJugada]);
                                    misGanancias.cartas.push(cartasDeMesa.cartas[index1]);
                                    misGanancias.cartas.push(cartasDeMesa.cartas[index2]);
                                    misGanancias.cartas.push(cartasDeMesa.cartas[index3]);
                                    misGanancias.cartas.push(cartasDeMesa.cartas[index4]);
                                    misCartas.cartas.splice(cartaJugada, 1);
                                    cartasDeMesa.cartas.splice(index1, 1);
                                    cartasDeMesa.cartas.splice(index2, 1);
                                    cartasDeMesa.cartas.splice(index3, 1);
                                    cartasDeMesa.cartas.splice(index4, 1);
                                    test = true;
                                }

                            }
                        }

                    }
                }

            }
        }
    }
    if(test == false) {
        cartasDeMesa.cartas.push(misCartas.cartas[cartaJugada]);
        misCartas.cartas.splice(cartaJugada,1)
    }
}

let yo_m2 = ""
yo.cartas.forEach(e => {
    yo_m2 += e.numero+"--";
})
console.log(yo_m2);
let mesa_m2 = ""
mesa.cartas.forEach(e => {
    mesa_m2 += e.numero+"--";
})
console.log(mesa_m2);

console.log(ContarCartas(prompt(), yo, mesa, misGanancias));
let g_m2 = ""
yo.cartas.forEach(e => {
    g_m2 += e.numero+"--";
})
console.log(g_m2);
yo_m2 = ""
yo.cartas.forEach(e => {
    yo_m2 += e.numero+"--";
})
console.log(yo_m2);
mesa_m2 = ""
mesa.cartas.forEach(e => {
    mesa_m2 += e.numero+"--";
})
console.log(mesa_m2);