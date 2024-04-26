const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i of numeros) {
//     if (i === 2 || i === 5) {
//         console.log(`Pulei o ${i}`);
//         continue;
//     }

//     if (i === 7) {
//         console.log('Saindo do laço');
//         break;
//     }

//     console.log(i);
// }

let i = 0;
do {
    if (i === 2 || i === 5) {
        console.log(`Pulei o ${i}`);
        i++;
        continue;
    }

    if (i === 7) {
        console.log('Saindo do laço');
        i++;
        break;
    }

    console.log(i);
    i++;
} while (i < numeros.length);