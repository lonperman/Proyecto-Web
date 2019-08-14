let numeroEstudiantes:number;
numeroEstudiantes = 35;
console.log('numeroEstudiantes', numeroEstudiantes);

let cursoIniciado = true;

let nombreCurso: string = 'Angular desde Cero';
let contenidoCurso: string = `
    Herramientas de Desarrollo
    Introduccion a TypeScript
    Introduccion a Angular
`;
console.log('nombreCurso:', nombreCurso);
console.log('contenidoCurso: ', contenidoCurso);


let bienvenida:string = `Bienvenidos al curso ${nombreCurso}`;
console.log('bienvenidos', bienvenida);

let arregloA:number[] = [1,2,3,4];
console.log('arrgloA', arregloA);
let arregloB: Array<string>;
arregloB = ['a','b','c'];
console.log('arregloB: ',arregloB);

//TypeScript Enums
enum DiaCurso {Martes,Viernes};
enum DiaSemana {Lunes,Martes,Miercoles,Jueves,Viernes};

let primerDia: DiaCurso;
primerDia = DiaCurso.Martes;
console.log('PrimerDia',primerDia);
console.log('primerDia(string): ',DiaCurso[0]);
console.log('primerDia(string): ', DiaCurso[DiaCurso.Martes]);

// No es recomendado.
let miVariable:any;
miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;

const PI = 3.14;


let persona:any = {
    nombre: 'Luis',
    curso: 'Angular'
};


const PERSONA:any = {
    nombre: 'Luis',
    curso: 'Angular'
};

console.log('PERSONA: ',PERSONA);

PERSONA.nombre = 'Juan';
PERSONA.curso = 'AngularJS';
console.log('PERSONA: ',PERSONA);

function holaMundo(): string{
    return 'Hola Mundo';
}

//Procedimiento
function saludar(mensaje: string): void {
      console.log('saludo: ', mensaje);           
}

saludar('Me gusta TypeScript');
