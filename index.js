var cadenas = require('./cadena');

cad="oiras orar a rosario";

console.log("La cadena a comprobar es: "+cad);
console.log("¿Es palíndromo? "+cadenas.p(cad));
console.log("El número de palabras es: "+cadenas.l(cad));
console.log("Tiene "+cadenas.t(cad)+" letras,");
console.log(cadenas.v(cad)+" vocales");
console.log("y "+cadenas.c(cad)+" consonantes.");