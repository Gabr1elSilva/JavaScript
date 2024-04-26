// const min = 1;
// const max = 100;

// let rand = random(min, max);

// function random(min, max) {
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// function divideNumero(num) {
//     if (Number(num)) {
//         if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
//         else if (num % 3 === 0) return 'Fizz';
//         else if (num % 5 === 0) return 'Buzz';
//         else return num;
//     }
// }

// console.log(divideNumero(rand));

function fizzBuzz(n) {
    if (typeof n != 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'Buzz';
    else if (n % 3 === 0) return 'Fizz';
    else if (n % 5 === 0) return 'Buzz';
    return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}