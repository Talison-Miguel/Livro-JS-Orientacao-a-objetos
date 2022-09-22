//HERANÇA
//herdam recursos de suas classes "parent"

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
// toString _ retorna uma representação do objeto em forma de string

// valueOf _ retorna a representaçao do valor do objeto
let now = new Date()
let earlier = new Date(2010, 1, 1)
console.log(now > earlier)

