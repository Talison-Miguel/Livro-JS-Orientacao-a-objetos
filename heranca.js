//HERANÇA
//herdam recursos de suas classes "parent"

//Herança é um princípio de orientação a objetos,
//que permite que classes compartilhem atributos e métodos, através de "heranças"


console.log("_________________")

//Cadeia de protítipo e Object.prototype
//Todos os obj definidos herdam as propiedades de Object.prototype

let book = {
    title: "Principios de orientação em JavaScript"
}

let prototype = Object.getPrototypeOf(book)
console.log(prototype === Object.prototype)


console.log("_________________")


//Métodos herdados de Object.prototype
//sao metodos dos obj

// hasOwnProper _ determina se uma propiedade com um nome especifico existe
// propertyIsEnumerable _ determina se uma propiedade propia é enumerável
// isPrototype _ Determina se o objeto é prototipo de outro

// valueOf _ retorna a representaçao do valor do objeto
let now = new Date()
let earlier = new Date(2010, 1, 1)
console.log(now > earlier)


// toString _ retorna uma representação do objeto em forma de string
let bookk = {
    title: "Livro de JS",
    toString: function() {
        return "[Book " + this.title + "]"
    }
}


let message = "Book = " + bookk
console.log(message)


console.log("_________________")


//Modificando Object.prototype
Object.prototype.add = function(value) {
    return this + value
}

let livro = {
    title: "Livrao de Js"
}

console.log(livro.add(5))
console.log("tittle".add("end"))
// console.log(document.add(true))
// console.log(window.add(5))


console.log("_________________")


//Herança entre objetos

//sao mesma coisa
let boookk = {
    title: "Princios dos objs Js"
}

let bookkk = Object.create(Object, prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "Princios dos objs Js",
        writable: true,
    }
})


let person1 = {
    name: "Talison",
    sayName: function() {
        console.log(this.name)
    }
}

let person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Miguel",
        writable: true,
    }
})

person1.sayName()
person2.sayName()
console.log(person1.hasOwnProperty("sayName"))
console.log(person1.isPrototypeOf(person2))
console.log(person2.hasOwnProperty("sayName"))

let nickName = Object.create(null)
console.log("toString" in nickName)
console.log("valueOf" in nickName)
