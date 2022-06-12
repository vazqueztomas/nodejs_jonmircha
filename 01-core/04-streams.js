/*
    Streams
        'CHORROS' de informacion que se transmite en pequeños pedazos (chunks)
        3 tipos de stream: lectura/escritura/duplex
        Instancias de eventEmitter
        Acceso asíncrono
        Es raro crear streams directamente
        Muchos recursos nos ofrecen esta interfaz
        Están detrás de muchos mecanismos de nodejs
            stdin/stdout
            request de http
            sockets
            manipulación de fichero/imágenes
*/

"use strict";

const fs = require("fs");
// leemos el archivo nombres.txt
const readStream = fs.createReadStream("./assets/nombres.txt");
// creamos un stream , un archivo txt llamado nombres_copy.txt
const writeStream = fs.createWriteStream("./assets/nombres_copy.txt");

// pipe necesita como parametro un destino, y lo que va a ejecutar
// me permite abrir el proceso de escritura/lectura de archivos

readStream.pipe(writeStream);

// el .on me permite realizar cosas mientras se realiza la accion
// si le pasamos el parametro data, es que mientras haya datos, se realzia lo que hay en la función.
readStream.on('data', function(chunk){
    console.log(chunk);
})
// si le pasamos el parametro end, cuando termine de leer ejecutaría lo que hay en la funcion
readStream.on('end', function(){
    console.log('Terminamos de leer el archivo!')
})

