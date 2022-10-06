//Padrao de módulo

//IIFE _ FUNÇAO CHAMADA IMEDIATAMENTE
let yourObject = (function() {
    //varaiveis refentes a dados privados
    return {
        //Metodos e propiedades publicas
    }
}())



var person = (function() {
    var age = 25

    return {
        name: "Talison",
        getAge: function() {
            return age
        },
        growOlder: function() {
            age++
        }
    }
})
// console.log(person.name)
// console.log(person.getAge())

// person.age = 100
// console.log(person.getAge())

// person.growOlder()
// console.log(person.getAge())


console.log("____________________")


//Membros privados de construtores
function Person(name) {

    //define uma variavel acessivel somente no construtor Person
    let age = 25
    this.name = name

    this.getAge1 = function() {
        return age
    }

    this.growOlder1 = function() {
        age++
    }
}

let person1 = new Person("Miguel")
console.log(person1.name)
console.log(person1.getAge1())

person.age = 100
console.log(person1.getAge1())

person1.growOlder1()
console.log(person1.getAge1())


console.log("____________________")


//Mixins

function mixin(receiver, supplier) {
    for( let property in supplier) {
        if(supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }

    return receiver
}

