"use strict";
var numeroEstudiantes;
numeroEstudiantes = 35;
console.log('numeroEstudiantes', numeroEstudiantes);
var cursoIniciado = true;
var nombreCurso = 'Angular desde Cero';
var contenidoCurso = "\n    Herramientas de Desarrollo\n    Introduccion a TypeScript\n    Introduccion a Angular\n";
console.log('nombreCurso:', nombreCurso);
console.log('contenidoCurso: ', contenidoCurso);
var bienvenida = "Bienvenidos al curso " + nombreCurso;
console.log('bienvenidos', bienvenida);
var arregloA = [1, 2, 3, 4];
console.log('arrgloA', arregloA);
var arregloB;
arregloB = ['a', 'b', 'c'];
console.log('arregloB: ', arregloB);
//TypeScript Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["Martes"] = 0] = "Martes";
    DiaCurso[DiaCurso["Viernes"] = 1] = "Viernes";
})(DiaCurso || (DiaCurso = {}));
;
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
})(DiaSemana || (DiaSemana = {}));
;
var primerDia;
primerDia = DiaCurso.Martes;
console.log('PrimerDia', primerDia);
console.log('primerDia(string): ', DiaCurso[0]);
console.log('primerDia(string): ', DiaCurso[DiaCurso.Martes]);
// No es recomendado.
var miVariable;
miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;
var PI = 3.14;
var persona = {
    nombre: 'Luis',
    curso: 'Angular'
};
var PERSONA = {
    nombre: 'Luis',
    curso: 'Angular'
};
console.log('PERSONA: ', PERSONA);
PERSONA.nombre = 'Juan';
PERSONA.curso = 'AngularJS';
console.log('PERSONA: ', PERSONA);
function holaMundo() {
    return 'Hola Mundo';
}
//Procedimiento
function saludar(mensaje) {
    console.log('saludo: ', mensaje);
}
saludar('Me gusta TypeScript');
