//Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {

        const valRandom = Math.floor(Math.random() * 10);
        if (valRandom < 5) {
            resolve('Descuento aplicado');
        } else {
            reject('No se puede aplicar descuento');
        }
        
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});


const descargarUsuarios = cantidad => new Promise((resolve,reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamada ajax
    const xhr = new XMLHttpRequest();

    //abrir conexión
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();
});

descargarUsuarios(5).then(
        resultado => console.log(resultado),
        error => console.log(error)
    ).catch( error => {
        console.log(error);
    });