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
