//CONTRUTORES
//é uma funçao usada com o operador new para criar um objeto
//sempre começa com letra maiuscula
//sempre usar o new para o this nao ser global

function Person(name) {
    this.name = name
    this.sayName = function() {
        console.log(this.name)
    }
}

let perso1 = new Person();

console.log(perso1 instanceof Person)
console.log(perso1.constructor === Person)

let perso2 = new Person("Talison")
let perso01 = new Person("Miguel")
console.log(perso2.name)
perso01.sayName()