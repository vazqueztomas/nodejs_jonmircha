"use strict";

const stdin = process.stdin,
  stdout = process.stdout,
  person = {
    name: null,
    age: 0,
  };

function saveAge(age) {
  person.age = age;

  person.age >= 18
    ? stdout.write(`${person.name} es mayor de edad, tiene ${person.age} años`)
    : stdout.write(`${person.name} es menor de edad, tiene ${person.age} años`)

  process.exit();
}

function saveName(name) {
  person.name = name;

  let question = `Hola ${person.name}. ¿Que edad tenes?`;
  quiz(question, saveAge);
}

function quiz(question, callback) {
  stdin.resume();
  stdout.write(question + ": ");

  stdin.once("data", function (res) {
    callback(res.toString().trim());
  });
}

stdin.setEncoding("utf-8");
quiz("¿Como te llamas?", saveName);
