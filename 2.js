console.clear()
const next = "\n-----------------------------------------------\n"

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

console.log(next);
console.log('↓↓↓↓↓ *PRIMER BLOQUE* ↓↓↓↓↓')
console.log(next);

console.log('Mi respuesta:');
const ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: [, "touchPad"],
    almacenamiento: {
        discos: [, "HDD"],
        maestro: 0,
    },
}

console.log(ordenador)

console.log('\nTests:');

// TEST 1
if (typeof ordenador === "object") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 2
if (ordenador.marca === "La pava") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'
console.log(next);
console.log('↓↓↓↓↓ *SEGUNDO BLOQUE* ↓↓↓↓↓')
console.log(next);

console.log('Mi respuesta:');

const obj = {
    a: {
        b: true,
        c: [, 69],
    },
    d: 6,
    f: 'pato',
}

console.log(obj)



console.log('\nTests:');
// TEST 1
if (typeof obj === "object") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 2
if (typeof obj.a.b === "boolean") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 7
if (obj.f.length === 4) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'

console.log(next);
console.log('↓↓↓↓↓ *TERCER BLOQUE* ↓↓↓↓↓')
console.log(next);

console.log('Mi respuesta:');

const arr = [{
    name: 'pepito',
    age: 25,
}, {
    name: 'pepito',
    age: 19,
}, {
    name: 'Juan',
    age: 16,
}]

console.log(arr)

console.log('\nTests:');


// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 5
if (arr.length === 3) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 8
if (arr[0].age === 25) {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("[V] apruebas");
} else {
    console.log("[X] suspendes");
}