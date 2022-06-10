let fs = require('fs')
console.log('Abriendo el archivo')

const imprimir = (error, content) => {
    console.log(content)
}

let content = fs.readFile('archivo.txt', 'utf-8', imprimir)

console.log("haciendo otra cosa")