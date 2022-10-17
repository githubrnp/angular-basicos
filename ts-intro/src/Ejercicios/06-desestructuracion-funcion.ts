
/*
    ===== Código de TypeScript =====
*/

import { TypeFormatFlags } from "typescript";

export interface Producto {
    desc: string;
    precio: number;
}

// Creamos 2 productos segun la interface Producto
const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: "Aipad air",
    precio: 350
}

// Funcion sin desestructurar
/*
    -- INICIO
function calculaISV( productos: Producto[]) {
    let total = 0;
    productos.forEach( (producto) => {
        total += producto.precio;
    })
    return total * 0.15;
}
    -- FIN
*/

// Funcion desestructurada
/* 
    -- INICIO
const articulos = [telefono, tableta];
const isv = calculaISV(articulos);

function calculaISV(productos: Producto[]) {
    let total = 0;
    productos.forEach( ({ precio }) => {
        total += precio;
    } )

    return total * 0.15
}
console.log('ISV: ', isv);
    -- FIN
*/

// Funcion desestructurada

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach( ({ precio }) => {
        total += precio;
    } )

    return [total, total * 0.15]
}

console.log('Total: ', total);
console.log('ISV: '  , isv  );