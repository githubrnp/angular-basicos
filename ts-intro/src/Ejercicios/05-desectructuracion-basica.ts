import { createUnparsedSourceFile } from "typescript";

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
/*
    INI Desectructura los objetos
*/

const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

/*
console.log("El volumen actual es:", volumen);
console.log("El segundo actual es:", segundo);
console.log("La canción actual es:", cancion);
console.log("El autor es: "        , autor  );

    FIN Desectructura los objetos
*/

/*
    INI Desectructurar arrays
*/
const dbz: string [] = ['Goku', 'Vegeta','Trunks'];
const [p1, p2, p3] = dbz;

// Pinta con nombres del array
console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

// Ahora pinta con el array desectructurado
console.log('Personaje 1: ', p3);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p1);
/*
    FIN Desectructurar arrays
*/




