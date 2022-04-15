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
console.log('Sobre el ejercicio de separar una cadena de texto separada por comas y generar un array de ello:');

let ciudades = 'Valencia,Barcelona,Sevilla,Granada,Gandia,Chicago,Tokio'

console.log(`\nLa lista de ciudades es: ${ciudades}`)

const getCiudadesOrdenada = (cadena) => {
    const comas = []
    const resultado = []
    for (let i = 0; i < cadena.length; i++) { //Este bucle for saca las posiciones de las comas
        if (cadena.substring(i, (i + 1)) === ',') {
            comas.push(i + 1)
        }
    }
    for (let i = 0; i < comas.length; i++) { //De este bucle calculamos la posicion y dimension de las ciudades y se guardan en el array correcto
        if (i === 0) {
            resultado.push(cadena.substring(0, ((comas[i] - 1))))
        } else {
            resultado.push(cadena.substring(comas[(i - 1)], (comas[i] - 1)))
        }
    }
    return resultado
}

console.log(`\nEl array resultante de realizar esto es el siguiente:`)
console.log(getCiudadesOrdenada(ciudades));
console.log(next);


// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
//      Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
console.log('Sobre el ejercicio de los palindromos:');

const esPalindromo = (palabra) => { //Aquí se compara y te devuelve el resultado
    if ((typeof(palabra) !== 'string') || (palabra === "")) {
        return `Lo siento, ${palabra} no es un formato correcto`
    } else if (palabra === inversorDePalabras(palabra)) {
        return `La palabra ${palabra} es un palindromo`
    } else {
        return `La palabra ${palabra} no es un palindromo :(`
    }
}
const inversorDePalabras = (palabra) => { //Esta funcion invierte la palabra
    return palabra.split("").reverse().join("");
}

console.log(`Si le pasamos el valor 69, el resultado que nos da es:\n${esPalindromo(69)}`)
console.log(`\nSi le pasamos un string vacio, el resultado que nos da es:\n${esPalindromo("")}`)
console.log(`\nSi le pasamos el valor 'aguacate', el resultado que nos da es:\n${esPalindromo("aguacate")}`)
console.log(`\nSi le pasamos el valor 'arañara', el resultado que nos da es:\n${esPalindromo("arañara")}`)
console.log(next);


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
//      Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
console.log('Sobre el ejercicio de los precios:');

const getPrecioMostrar = (precio) => {
    if (typeof(precio) === 'number') {
        return `${precio.toFixed(2)} €`
    } else {
        return `Lo siento, ${precio} no es un formato correcto`
    }
}

console.log(`Si le pasamos el valor 'aguacate' nos devuelve:\n${getPrecioMostrar('aguacate')}`)
console.log(`\nSi le pasamos el valor 2 nos devuelve:\n${getPrecioMostrar(2)}`)
console.log(`\nSi le pasamos el valor 2.5 nos devuelve:\n${getPrecioMostrar(2.5)}`)
console.log(next);


// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
console.log('Sobre el ejercicio de la division:');

const division = (num1, num2) => {
    return num1 / num2
}

console.log(`En el caso de que le pasemos los valores de 5 y 2 nos devuelve: ${division(5,2)}`)
console.log(`En el caso de que le pasemos los valores de 1 y 3 nos devuelve: ${division(1,3)}`)
console.log(`En el caso de que le pasemos los valores de 100000000 y 80 nos devuelve: ${division(100000000,80)}`)
console.log(next);


//  Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
console.log('Sobre el ejercicio de saber si un numero es par:');

const esPar = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(`En el caso de que pasemos el numero 2 sale: ${esPar(2)}`)
console.log(`En el caso de que pasemos el numero 5 sale: ${esPar(5)}`)
console.log(`En el caso de que pasemos el numero 88 sale: ${esPar(88)}`)
console.log(next);


// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
console.log('Sobre el ejercicio de devolver un array ordenado de mayor a menor:');

const ordenarArray2 = (arr) => {
    arr = arr.sort((a, b) => a - b)
    return arr.reverse()
}

console.log(`En el caso de pasarle el parametro [10, 53, 81, 1, 99, 10000000] nos devuelve:\n[${ordenarArray2([10, 53, 81, 1, 99, 10000000])}]`)
console.log(`\nEn el caso de pasarle el parametro [50, 87, 1, 66484, 22] nos devuelve:\n[${ordenarArray2([50,87,1,66484,22])}]`)
console.log(`\nEn el caso de pasarle el parametro [1, 11, 111, 1111, 11111] nos devuelve:\n[${ordenarArray2([1, 11, 111, 1111, 11111])}]`)
console.log(next);


// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
console.log('Sobre el ejercicio de devolver un array con los numero impares:');

const obtenerImpares = (nums) => {
    const impares = []
    for (const num of nums) {
        if (num % 2 !== 0) {
            impares.push(num)
        }
    }
    return impares

}

console.log(`Si añadimos el array [10, 53, 81, 1, 99, 10000000] nos devuelve:\n[${obtenerImpares([10, 53, 81, 1, 99, 10000000])}]`)
console.log(`\nSi añadimos el array [50, 87, 1, 66484, 22] nos devuelve:\n[${obtenerImpares([50, 87, 1, 66484, 22])}]`)
console.log(`\nSi añadimos el array [1, 11, 111, 1111, 11111] nos devuelve:\n[${obtenerImpares([1, 11, 111, 1111, 11111])}]`)
console.log(next);

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
console.log('Sobre el ejercicio de devolver la suma de un array:');

const sumarArray = (arr) => {
    let count = 0;
    for (const num of arr) {
        count += num
    }
    return count
}

console.log(`Si añadimos el array [10, 53, 81, 1, 99, 10000000] nos devuelve:\n${sumarArray([10, 53, 81, 1, 99, 10000000])}`)
console.log(`\nSi añadimos el array [50, 87, 1, 66484, 22] nos devuelve:\n${sumarArray([50, 87, 1, 66484, 22])}`)
console.log(`\nSi añadimos el array [1, 11, 111, 1111, 11111] nos devuelve:\n${sumarArray([1, 11, 111, 1111, 11111])}`)
console.log(next);

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
console.log('Sobre el ejercicio de devolver la multiplicacion de un array:');

const multiplicarArray = (arr) => {
    let count = 1
    for (const num of arr) {
        count *= num
    }
    return count
}

console.log(`Si añadimos el array [10, 53, 81, 1, 99, 10000000] nos devuelve:\n${multiplicarArray([10, 53, 81, 1, 99, 10000000])}`)
console.log(`\nSi añadimos el array [50, 87, 1, 66484, 22] nos devuelve:\n${multiplicarArray([50, 87, 1, 66484, 22])}`)
console.log(`\nSi añadimos el array [1, 11, 111, 1111, 11111] nos devuelve:\n${multiplicarArray([1, 11, 111, 1111, 11111])}`)
console.log(next);


// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
const masDe5 = (arr) => {
    const count = []
    for (const num of arr) {
        if (num > 5) {
            count.push(num)
        }
    }
    return count
}

console.log(`Si añadimos el array [10, 7, 3, 2, 1, 25, 6] nos devuelve:\n[${masDe5([10, 7, 3, 2, 1, 25, 6])}]`)
console.log(next);


// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
//      Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
console.log('****IMPORTANTE****\n\nEl ejercicio de los numero primos me devuelve error, ya que la funcion "promp" no la reconoce nodeJS, de ahi el error que vereis al final de la ejecucion.\n\nPara probar el funcionamiento del Promp teneis que abrir el idex.html, igualmente os dejo aquí algunos ejemplos:')
const esPrimo = (num) => {
    let respuesta = true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            respuesta = false
        }
    }
    return respuesta
}

console.log(`Si le pasamos a la funcion 'esPrimo()' el valor de 5, nos devuelve: ${esPrimo(5)}`)
console.log(`Si le pasamos a la funcion 'esPrimo()' el valor de 10, nos devuelve: ${esPrimo(10)}`)
console.log(`Si le pasamos a la funcion 'esPrimo()' el valor de 991, nos devuelve: ${esPrimo(991)}`)
console.log(next);


// Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
console.log('****IMPORTANTE****\n\nEl ejercicio de la contraseña me devuelve error, ya que la funcion "promp" no la reconoce nodeJS, de ahi el error que vereis al final de la ejecucion.\n\nPara probar el funcionamiento del Promp teneis que abrir el idex.html.')

const checkPassword = (pass) => {
    for (let i = 0; i < 3; i++) {
        let passTry = prompt("Introudce tu contraseña")
        if (passTry == pass) {
            alert("Enhorabuena")
            i = 2
        } else {
            alert(`Contraseña incorrecta, intento: ${(i+1)}/3`)
        }
    }
}

console.log(next);


// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
//      +: suma los dos operadores.
//      -: resta los operandos.
//      *: multiplica los operandos.
//      /: divide los operandos, este debe dar un resultado con decimales (double)
//      ^: 1o operando como base y 2o como exponente.
//      %: módulo, resto de la división entre operando1 y operando2.


const operaciones = { //Libreria de las operaciones requeridas
    suma: (num1, num2) => {
        return num1 + num2
    },
    resta: (num1, num2) => {
        return num1 - num2
    },
    multiplicar: (num1, num2) => {
        return num1 * num2
    },
    dividir: (num1, num2) => {
        return num1 / num2
    },
    exponer: (num1, num2) => {
        return num1 ^ num2
    },
    resto: (num1, num2) => {
        return num1 % num2
    },
}



// Esto es para ejecutar el ejercicio de numeros primos
alert('Dale a siguiente para iniciar el script de numeros primos =>')
let preguntaNumero = prompt("Dime un numero y te dire si es primo:")
alert(esPrimo(preguntaNumero))


// Esto es para ejecutar el ejercicio de la contraseña
alert('Dale a siguiente para iniciar el script de contraseñas =>')
let passOriginal = prompt("Por favor, introduce la contraseña que deseas")
checkPassword(passOriginal)


//Esto es para ejecutar el ejercicio de la calculadora
alert('Dale a siguiente para iniciar el script de la calculadora =>')
let firstNum = prompt('Introduce tu numero')
let secondNum = prompt('Segundo numero')

firstNum = parseInt(firstNum)
secondNum = parseInt(secondNum)

let operacion = prompt('Introduce el tipo de operacion que quieres realizar:')

switch (operacion) {
    case "+":
        alert(operaciones.suma(firstNum, secondNum));
        break;
    case "-":
        alert(operaciones.resta(firstNum, secondNum));
        break;
    case "*":
        alert(operaciones.multiplicar(firstNum, secondNum));
        break;
    case "/":
        alert(operaciones.dividir(firstNum, secondNum));
        break;
    case "^":
        alert(operaciones.exponer(firstNum, secondNum));
        break;
    case "%":
        alert(operaciones.resto(firstNum, secondNum));
        break;
    default:
        alert `El valor introducido no es valido`
}