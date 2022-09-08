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



console.log("__________________")
//Protótipo
//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
//Tipo uma receita para o objeto

let book = {
    title: "Livro js"
}

console.log('title' in book)
console.log(book.hasOwnProperty("title"))
console.log('hasOwnProperty' in book)
console.log(book.hasOwnProperty("hasOwnProperty"))
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'))


//Verificar uma propiedade de prototipo
function hasPrototypeProperty(object, name) {
    return name in object && !object.hasOwnProperty(name)
}

console.log(hasPrototypeProperty(book, 'title'))
console.log(hasPrototypeProperty(book, 'hasOwnProperty'))



console.log("__________________")
//A propiedade prototype

//verifica se o prototype é generico e vazio
let obj = {};
let prototyp = Object.getPrototypeOf(obj)
console.log(prototyp === Object.prototype)


//verifica se o prototypo é usado
console.log(Object.prototype.isPrototypeOf(obj))



console.log(obj.toString())
obj.toString = function() {
    return '[objetc custom]'
}
console.log(obj.toString())

//apaga  a propiedade propia
delete obj.toString;
console.log(obj.toString())


console.log("__________________")
//Prototypos com construtores

function pessoa(name) {
    console.log(this.name)
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

let pesso1 = new Person("Nicholas")
let pesso2 = new Person("Greg")

console.log(pesso1.name)
console.log(pesso2.name)

pesso1.sayName()
pesso2.sayName()



console.log("__________________")
//Prototypos com construtores 2

function pssoa(name) {
    this.name
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

Person.prototype.favorites = [];

let peso1 = new Person("Nicola")
let peso2 = new Person("Greg")

peso1.favorites.push("pizza")
peso2.favorites.push("quinoa")

console.log(peso1.favorites)
console.log(peso2.favorites)


console.log("__________________")
//Alterando os protótipos

function Persor(name) {
    this.name = name;
}

Persor.prototype = {
    constructor: Persor,

    sayName: function() {
        console.log(this.name)
    },
    toString: function() {
        return "[Person " + this.name + "]"
    }
}

let pss1 = new Persor("Nicholas")
let pss2 = new Persor("Miguel")

console.log("sayHi" in pss1)
console.log("sayHi" in pss2)

Persor.prototype.sayHi = function() {
    console.log("Oi")
}

pss1.sayHi()
pss2.sayHi()


console.log("__________________")
//Protótipos de objetos prontos
//Adicionar um novo metodo em tal funçao ja definida

Array.prototype.sum = function() {
    //passa por todo array somando o numero com o proximo
    return this.reduce(function(antes, depois) {
        return antes + depois
    })
}

let numbers = [1, 2, 3, 4, 5, 6]
let result  = numbers.sum()

console.log(result)


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1)
}

let msg = "hello word"
console.log(msg.capitalize())




console.log("__________________")
//Resumo
//Os construtores sao apenas funçoes normais chamas pelo operador new
//definir os prototipos de construtores qnd quiser tem varios obj com a mesma propiedade