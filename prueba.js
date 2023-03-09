
//scope de function
/* function sumar(a, b){
    var suma= a+b
    console.log(suma)
}



/* sumar(2,4)

//scope
if(true){
    var numero = 5;
}
console.log(numero) //output: 5 -> se sale del bloque. 

*/

/* const numero = 1;
numero = 5;
console.log(numero)  // variable no puede ser reasignada
 */

/*onst persona = {
    nombre: "Carlos",
    apellido: "Soto"
}

persona = "Hola"; // no se puede cambiar lo que es, pero si los valores internos del "objeto"

console.log(persona)

*/

/*
var nombre;
console.log(nombre)
nombre = "Carlos"; // var hace hoisting / elevación sólo de la declaración de la variable, pero no su asignación.

*/

/*
sumar(3,5)

function sumar(a,b){
    console.log(a+b)
}

*/
const sumar = (a,b) => {
    console.log(a+b)
}

sumar(3,5)