//Variables y constantes 
/* tipos de datos:
    variable = "Camila" -> cadena de caracteres
    variable = 20 -> numérico, no necesita comillas
    variable = false -> booleano, true/false
    variable = [] -> es un array, arreglo
    variable = {} -> es un objeto
*/
/* para crear variables y constantes:
    let = define variables en versiones modernas de JS (JavaScrpit)
    var = define variables en versiones antiguas (se está volviendo obsoleta, ahora se usa solo el let)
    const = define una constante
*/
/*  Propiedad = es esta atribución de alguna característica en una variable
    Método = alguna acción que puede realizar una variable*/
let nombre = "Camila"; //let es un nombre reservado para otorgar a una variable, "nombre" es el nombre de la variable let y "Camila" es el valor que le estoy otorgando a esta variable
console.log(nombre); //aqui pedimos que por la consola nos imprima el contenido de la variable nombre
console.log(nombre.length); //aqui decimos que use la consola para imprimirme el numero de caractéres de la variable

//usamos en una función el llamar los datos generales de un usuario
function datos(nombre1, apellido, edad){ //estos son los argumentos
    console.log("Mi nombre es " + nombre1 + " " + apellido + " y tengo " + edad + " años."); //con esta forma estoy encadenando los datos, o sea se van ligando
    console.log(`Mi nombre es ${nombre1} ${apellido} y tengo ${edad} años.`); //con los backticks `` hago una sintais más cómoda 
    console.log("Mi nombre es", nombre1, apellido, "y tengo", edad, "años.");
}

// Pedimos los datos y los pasamos como argumentos
let nombre1 = prompt("¿Cuál es tu nombre?"); //con el prompt se permite que el usuario meta información a una variable
let apellido = prompt("¿Cuál es tu apellido?");
let edad = prompt("¿Cuál es tu edad?");
datos(nombre1, apellido, edad); //llamamos a la función para que se ejecute
