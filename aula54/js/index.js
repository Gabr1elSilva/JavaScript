function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;

    return Math.floor(num);
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1(function() {
//     f2(function(){
//         f3(function(){
//             console.log('Gabriel Silva!!')
//         })
//     });
// });

f1(f1Callbeck);

function f1Callbeck() {
    f2(f2Callbeck);
}

function f2Callbeck() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Gabriel Silva!');
}