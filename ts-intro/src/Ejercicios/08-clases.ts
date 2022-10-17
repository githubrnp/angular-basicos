
/*
    ===== Código de TypeScript =====
*/

 /*
    Forma 1
    Forma poco habial por menos eficiente que la forma 2
 */ 

class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string)
    {}
}


class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    constructor( alterEgo: string) {
        this.alterEgo = alterEgo;
    }
}

const ironman = new Heroe('IronMan');
console.log(ironman);

/*
    Forma 2 
    Forma mas eficente con menos lineas de codiogo y mas habitual
*/

class HeroeMejor extends PersonaNormal{
    
    constructor(
        public alterEgo: string,
        public edad:number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York USA');
    }
}

const IronManMejor = new HeroeMejor('IronManMejor', 45, 'Tony');
console.log(IronManMejor);

