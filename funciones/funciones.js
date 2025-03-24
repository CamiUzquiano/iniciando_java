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
let nombre = "Camila"; //let es un nombre reservado para otorgar a una variable, "nombre" es el nombre de la variable let y "Camila" es el valor que le estoy otorgando a esta variable
console.log(nombre); //aqui pedimos que por la consola nos imprima el contenido de la variable nombre
console.log(nombre.length); //aqui decimos que use la consola para imprimirme el numero de caractéres de la variable
let nombre1, apellido, edad;
nombre1 = prompt("¿Cuál es tu nombre?") //con el prompt se permite que el usuario meta información a una variable
apellido = prompt("¿Cuál es tu apellido?")
edad = prompt("¿Cuál es tu edad?")
console.log("Mi nombre es "+nombre1+apellido+" y tengo "+edad+" años."); //con esta forma estoy encadenando los datos, o sea se van ligando
console.log(`Mi nombre es ${nombre1} ${apellido} y tengo ${edad} años.`); //con los backticks `` hago una sintais más cómoda 
console.log("Mi nombre es", nombre1, apellido, "y tengo", edad, "años.");