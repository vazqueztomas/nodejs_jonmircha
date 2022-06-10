// single Thread
// Modulo process -> Método que pertenece a eventEmiter;
'use strict'

function singleThread () {

    process.argv[2] = 'Estamos aprendiendo node.js'

    console.log("Id del proceso.............." + process.pid)
    console.log("Titulo......................" + process.title)
    console.log("Directorio de node.........." + process.execPath)
    console.log("Directorio actual..........." + process.cwd())
    console.log("Version del proceso........." + process.version)
    console.log("Version dependencias........" + process.versions)
    console.log("Plataforma del proceso......" + process.platform)
    console.log("Arquitectura del proceso...." + process.arch)
    console.log("Tiempo activo de Node......." + process.uptime())
    console.log("Argumentos del proceso......" + process.argv)

    let key = 0
    for (key in process.argv){
        console.log(process.argv[key]);
    }

    // console.log(process.argv[0], 'parametro cero')
    // console.log(process.argv[1], 'parametro uno')
}



singleThread();
