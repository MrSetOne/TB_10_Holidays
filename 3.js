console.clear()
const next = "\n-----------------------------------------------\n"


// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
//      Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
console.log('Sobre el ejercicio de pasar de number a string:');

const toString = (number) => {
    number = String(number)
    return number;
}

let toStringValue = 69

console.log(`Antes de ejecutar la funcion el valor es de tipo ${typeof(toStringValue)}`);

toStringValue = toString(toStringValue)

console.log(`Despues de ejecutar la funcion el valor es de tipo ${typeof(toStringValue)}`)

console.log(next);


// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
//      Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
//      Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log('Sobre el ejercicio de obtener la primera letra de un string:');

const caracterInicial = (texto) => {
    if (typeof(texto) !== 'string') {
        return 'Debo ser ejecutado con un string'
    } else if (texto.length === 0) {
        return 'Debo ser ejecutada con un string no vacio'
    } else {
        return texto.substring(0, 1)
    }
}

console.log(`Si se ejecuta la funcion con el valor 19, te devuelve:\t${caracterInicial(19)}`)
console.log(`Si se ejecuta la funcion con el valor "", te devuelve:\t${caracterInicial("")}`)
console.log(`Si se ejecuta la funcion con el valor "aguacate", te devuelve:\t${caracterInicial("aguacate")}`)
console.log(next);


// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
//      Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
//      Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log('Sobre el ejercicio de obtener la ultima letra de un string:');

const ultimoCaracter = (texto) => {
    if (typeof(texto) !== 'string') {
        return 'Debo ser ejecutado con un string'
    } else if (texto.length === 0) {
        return 'Debo ser ejecutada con un string no vacio'
    } else {
        return (texto.substring((texto.length - 1), texto.length))
    }
};

console.log(`Si se ejecuta la funcion con el valor 19, te devuelve:\t${ultimoCaracter(19)}`)
console.log(`Si se ejecuta la funcion con el valor "", te devuelve:\t${ultimoCaracter("")}`)
console.log(`Si se ejecuta la funcion con el valor "aguacate", te devuelve:\t${ultimoCaracter("aguacate")}`)
console.log(next);



// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
//      Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
console.log('Sobre el ejercicio de obtener la longitud del string:');

const cuentaCaracteres = (texto) => {
    if (typeof(texto) !== 'string') {
        return 'Debo ser ejecutado con un string'
    } else {
        return texto.length
    }
}

console.log(`Si se ejecuta la funcion con el valor 19, te devuelve:\t${cuentaCaracteres(19)}`)
console.log(`Si se ejecuta la funcion con el valor "aguacate", te devuelve:\t${cuentaCaracteres("aguacate")}`)
console.log(next);


// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

let ciudades = 'a,b,c,d,e,f,g'

const getCiudadesOrdenada = (cadena) => {
    const comas = []
    const resultado = []
    for (let i = 0; i < cadena.length; i++) { //Este bucle for saca las posiciones de las comas
        console.log(cadena.substring(i, (i + 1)))
        if (cadena.substring(i, (i + 1)) === ',') {
            console.log(`Se ha añadido al string la ',' que esta situada en la posicion ${i+1}`)
            comas.push(i + 1)
        }
    }
    for (let i = 0; i < comas.length; i++) {
        if (i === 0) {
            resultado.push(cadena.substring(0, (comas[i])))
        } else {
            resultado.push(cadena.substring(comas[(i - 1)], comas[i]))
        }
    }

    console.log(comas.length)
    console.log(comas)
    console.log(resultado) //Devuelve una coma de mas...
}

console.log(getCiudadesOrdenada(ciudades))

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
//      Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
//      Si la función no recibe un número debería devolver devolver 'no es un formato correcto'


// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división


//  Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar


// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor


// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares


// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6


// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24


// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]


// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
//      Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


// Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).


// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
//      +: suma los dos operadores.
//      -: resta los operandos.
//      *: multiplica los operandos.
//      /: divide los operandos, este debe dar un resultado con decimales (double)
//      ^: 1o operando como base y 2o como exponente.
//      %: módulo, resto de la división entre operando1 y operando2.