
/*
    ===== Código de TypeScript =====
*/

/* 
    Funcion que utiliza tipo generico 
    Atencion a <T> que indica que es un tipo 
    generico en la funcion y a <number> 
    en la llamada a la funcion.
*/

 function queTipoSoy<T>(argumento: T){
    return argumento;
 }

 let soyString = queTipoSoy("Hola mundo");
 let soyNumero = queTipoSoy( 100 );
 let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);
 
 // llamada con el tipo generico
 let soyExplicito = queTipoSoy<number>( 100 );
