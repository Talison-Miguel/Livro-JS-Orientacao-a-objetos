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


//Ex
function EventTarget() {

}

EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function(type, listener) {
        //cria um array se ela nao existir
        if( !this.hasOwnProperty("_listeners")) {
            this._listener = [];
        }
        if(typeof this._listener[type] == "undefined") {
            this._listener[type] = []
        }
        this._listener[type].push(listener)
    },
    fire: function(event) {
        if(!event.target) {
            event.target = this
        }
        if(!event.type) {
            throw new Error("Event object missing 'type' property")
        }
        if(this._listener && this._listener[event.type] instanceof Array) {
            let listeners = this._listener[event.type]
            for(let i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event)
            }
        }
    },
    removeListener: function(type, listener) {
        if(this._listener && this._listener[type] instanceof Array) {
            let listeners = this._listener[type]
            for(let i = 0, len = listeners.length; i < len; i++) {
                if(listeners[i] === listener) {
                    listeners.splice(i, 1)
                    break
                }
            }
        }
    }
}

let target = new EventTarget()
target.addListener('message', function(event) {
    console.log("Message is " + event.data)
})
target.fire({
    type: "message",
    data: "Hello world"
})

let person4 = new EventTarget()
person4.name = "Talison"
person4.sayName = function() {
    console.log(this.name)
    this.fire({type: "namesaid", name: this.name})
}