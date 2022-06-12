/*
Buffers
    Tira de bytes (datos binarios)
    Es similar a un array de enteros
    Tienen un tamaño fijo
    Dentro de un búffer, se pueden manipular datos directamente como :
        Los Sockets
        Los Stream
        Implementar protolos complejos
        Manipulación de ficheros/imágenes
        Criptografía
*/

'use strict'

const buff = new Buffer.alloc(100),
    buff2 = new Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buff.write('abcd', 0, 4, 'ascii')
// console.log(buff, buff.toString('ascii'))

let i = 0;

for (let i = 0; i < buff2.length; i++){
    buff2[i] = i + 97
    // console.log(buff2[i])
}
console.log(buff2.toString('ascii'))