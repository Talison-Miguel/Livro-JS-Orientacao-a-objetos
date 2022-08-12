//CONTRUTORES
//é uma funçao usada com o operador new para criar um objeto
//sempre começa com letra maiuscula

function Person() {
    //intencionalmente vazia
}

let perso1 = new Person();

console.log(perso1 instanceof Person)
console.log(perso1.constructor === Person)