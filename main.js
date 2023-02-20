// VARIABLES
// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// 1 y 2. alert();
// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;
// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
const booleano1 = true;
const booleano2 = false;
// Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14159265359;
console.log(PI);
// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;
console.log(TAU);
// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Adrian"
// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 33;
// Crea una variable de tipo booleano
const arbitro = true;
// Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);
// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav);
// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}.`)
// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase())
// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
console.log("Hola soy un crack".substring(0, 4));
// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miNumeroFav2 = miNumeroFav.toString();
console.log(typeof miNumeroFav2);
// Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.
const variable1 = 33;
const vartem = (`Me gusta el numero ${variable1}`)
console.log(vartem);
// Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI.toFixed(2))
// ARRAYS
// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = []
// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arrayNumeros);
