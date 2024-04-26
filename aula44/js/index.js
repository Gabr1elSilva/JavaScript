// try {
//     console.log(n);
// } catch (e) {
//     console.log('N nao existe');
// }

// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números.');
//     }

//     return x + y;
// }

// try {
//     console.log(soma(2, 3));
//     console.log(soma('1', 3));
// } catch (e) {
//     // console.log(e);
//     console.log('Penis na vagina')
// }

// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');

//     try {
//         console.log(b);
//     } catch (erro) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Pgui');
//     }
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('Fechei o arquivo');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Nao grada')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: 'false'
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    console.log(e);
} finally {
    console.log('Pgui grada');
}
