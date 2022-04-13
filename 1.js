//Presentacion:
console.clear();
const next = ("\n-----------------------------------------------\n")
console.log('He probado este tipo de resolucion, no se si es mejor o peor, pero espero vuestro feedback para saber si seguir haciendolo así.')
console.log(next);

// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
console.log('Se muestran por consola los numeros del 4 al 9:');
for (let i = 4; i <= 9; i++) {
    console.log(`-${i}`)
}
console.log(next)

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
console.log('Se muestran por consola los numero impares del 3 al 17:');
for (let i = 3; i <= 17; i++) {
    if ((i % 2) !== 0) {
        console.log(`-${i}`)
    }
}
console.log(next);

// Utiliza la siguiente array para resolver los próximos ejercicios: 
let gente = [{
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];
console.log('La gente pasada en el array sobr el que trabajar es:');
for (const persona of gente) {
    console.log(persona);
}
console.log(next);

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
console.log('Sobre el array pasado, seleccinamos a los mayores de 25 años:');
const masDe25 = []
for (const persona of gente) {
    if (persona.edad >= 25) {
        masDe25.push(persona.nombre);
        console.log(`-${persona.nombre} se ha añadido al array de mayores de 25 porque tiene ${persona.edad} años.`)
    }
}

console.log(`\nEntoces los mayores de 25 son:`);
for (const persona of masDe25) {
    console.log(`-${persona}`);
}
console.log(next);

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
console.log('Sobre el array pasado seleccionamos quien empieza por J:');

const empiezaPorJ = []

for (const persona of gente) {
    if (persona.nombre.substring(0, 1) === 'J') {
        empiezaPorJ.push(persona.nombre);
        console.log(`-${persona.nombre} ha sido añadido al array de los que empiezan por 'J'.`)
    }
}

console.log("\nEntonces quienes empiezan por 'J' son:");
for (const persona of empiezaPorJ) {
    console.log(`-${persona}`)
}
console.log(next);

// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
console.log('Sobre el array pasado seleccionamos los que tienen 4 letras:');

const tienen4letras = []


for (const persona of gente) {
    if (persona.nombre.length === 4) {
        tienen4letras.push(persona.nombre);
        console.log(`-${persona.nombre} se ha añadido al array de los que tienen 4 letras.`)
    }
}

console.log("\nEntonces los que tienen 4 letras en su nombre son:");
for (const persona of tienen4letras) {
    console.log(`-${persona}`)
}
console.log(next);

// Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
console.log("Sobre el array pasado seleccionamos los que empiecen por 'J' y tengan menos de 40 años:");

const menoresDe40ConJ = []

for (const persona of gente) {
    if ((persona.nombre.substring(0, 1) === 'J') && (persona.edad < 40)) {
        menoresDe40ConJ.push(persona.nombre)
        console.log(`-${persona.nombre} empeza por 'J' y tiene menos de 40 años.`)
    }
}

console.log("\nEntonces los que empiezan por 'J' y tienen menos de 40 años son:");

for (const persona of menoresDe40ConJ) {
    console.log(`-${persona}`)
}
console.log(next);

//Despedida

console.log(`Gracias por verlo, espero vuestro feedback, si os gusta trataré de hacerlos mas veces así ^^`);