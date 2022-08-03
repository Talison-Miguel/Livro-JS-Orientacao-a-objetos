//definir propiedade de um objeto
let person1 = {
    name: "Nicholas"
}

person1.age = "18 anos"
console.log(person1.name, person1.age)


console.log("______________________")
//Verificar se existe uma propiedade
let person2 = {
    name: "Talison",
    sairnome: function () {
        console.log(this.name)
    }
} 

console.log("name" in person2)
console.log("age" in person2)
console.log("sairnome" in person2)

//metodo hasOwnProperty() _ verifica se existe tal propiedade e retorna true se for propieade propia
console.log("toString" in person1)
console.log(person1.hasOwnProperty("toString"))



console.log("______________________")
//REMOVER PROPIEDADE
let perso = {
    name: 'nicolas'
}

console.log(perso)
console.log("name" in perso)
delete perso.name
console.log(perso)
console.log("name" in perso)


console.log("______________________")
//PROPIEDADES ENUMERADAS

let talison = {
    name: "talison",
    age: 17
}

let propiedade = Object.keys(talison)
let i, len;

for (i = 0, len = propiedade.length; i < len; i++) {
    console.log("Name :" + propiedade[i])
    console.log("Value :" + talison[propiedade[i]])
} 

//verificar se existe e se a propiedade é enumerada
console.log("name" in talison)
console.log(talison.propertyIsEnumerable('name'))



console.log("______________________")
//Tipos de propiedade _ de DADOS e de ACESSO

let pessoa = {
    nome: "talison",
    get name() {
        console.log("Reading name")
        return this.nome
    },
    set name(value) {
        console.log("Setting name to %s", value)
        this.nome = value
    }
};
console.log(pessoa.name)

pessoa.name = "Greg"
console.log(pessoa.name)


console.log("______________________")
//__ Atributo de propiedades
//configurar para ela nao ser apagada ou modificada
// deixando a propiedade difinitiva _ usando Object.defineProperty(obj, nomeDaPropiedade, {configurable: false/true})
// Object.defineProperty(person3, "name", {
//    configurable: false
//})

let person3 = {
    name: "troyyer"
}

Object.defineProperty(person3, "name", {
    enumerable: false
})
console.log("name" in person3)
console.log(person3.propertyIsEnumerable("name"))

let properties = Object.keys(person3)
console.log(properties.length)

Object.defineProperty(person3, "name", {
    configurable: false
})

delete person3.name

console.log("name" in person3)
console.log(person3.name)

// Object.defineProperty(person3, "name", {
//     configurable: true
// })



console.log("______________________")
//atributo propiedade de dados
//Object.defineProperty(nomeObj, "name", {}) _ define uma propiedade, se especificar todos os dados ele pode ser configurado e enumerado

let pesooa = {};

Object.defineProperty(pesooa, "name", {
    value: "talison/miguel",
    enumerable: true,
    configurable: true,
    writable: true
})

console.log(pesooa)
console.log(pesooa.propertyIsEnumerable("name"))
//se nao expessificar, configurable, writable como true a propiedade nao pode ser modificada



console.log("______________________")
//atributo propiedade de acesso
//Object.defineProperty(nomeObj, "name", {}) _ define uma propiedade, se especificar todos os dados ele pode ser configurado e enumerado

let psoa1 = {
    _name: "tali"
}

Object.defineProperty(psoa1, "name", {
    get: function() {
        console.log('reading name')
        return this._name
    },
    set: function(value) {
        console.log("setting name to %s", value)
    },
    enumerable: true,
    configurable: true

})

console.log("name" in psoa1)
console.log(psoa1.propertyIsEnumerable("name"))


console.log("______________________")
//Definindo varias propiedades

let eu = {}

Object.defineProperties(eu, {
    _name: {
        value: "Talison",
        enumerable: true,
        configurable: true,
        writable: true
    },

    name: {
        get: function() {
            console.log("reading name")
            return this._name
        },
        set: function(value) {
            console.log("setting name %s", value)
            this._name
        },
        enumerable: true,
        configurable: true 
    }
});

console.log(eu._name)



console.log("______________________")
//Obetendo atributos de propiedades

let irmao = {
    name: "italo"
}

let descriptor = Object.getOwnPropertyDescriptor(irmao, "name")
console.log(descriptor.enumerable)
console.log(descriptor.configurable)
console.log(descriptor.writable)
console.log(descriptor.value)



console.log("______________________")
//Evitando modificações em objetos
//Evitar extensoes _ Object.preventExtensions(obj)

let mae = {
    name: "analidia"
}

console.log(Object.isExtensible(mae))

Object.preventExtensions(mae)
console.log(Object.isExtensible(mae))

mae.sayName = function() {
    console.log(this.name)
}
console.log("sayName" in mae)
