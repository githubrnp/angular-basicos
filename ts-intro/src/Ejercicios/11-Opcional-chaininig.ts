
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = 
{
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
}

/* 
    En la funcion se objeba que es un parametro opcional.
    cuando se pone hijos?.lenght || 0 en realida se hace un 
    if undefined entonces 0
 */

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos);
}

imprimeHijos( pasajero1 );


