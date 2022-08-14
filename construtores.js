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
