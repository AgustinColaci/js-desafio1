/*  Ejemplos en clase

var saludo = "Hola Coders!";
var numeroA = 5;
var numeroB = 15;

console.log ("Camada 8695")
console.info ("Otro texto.")
console.warn ("Advertencia!")
console.error ("Error")
*/

/* Variante 1 */

var username = prompt('Ingrese un nombre de usuario:');
alert("Hola " + username + "!"); 

/* Variante 2 */

var inputNumber = prompt("Ingrese un numero:");
var savedNumber = 7;

var resultNumber = parseInt(inputNumber) + savedNumber;

console.log(resultNumber);

/* Variante 3*/

var text1 = prompt ("Ingrese su Nombre:");
var text2 = prompt ("Ingrese su Apellido:");

alert ("Hola " + text1 + " " + text2);