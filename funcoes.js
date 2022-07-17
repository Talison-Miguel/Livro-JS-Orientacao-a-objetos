//Declaração de Funçao
function add(num1, num2) {
    return num1 + num2;
}

//Expressão de funçao ou funçao anonima _ atribui o valor da funçao a variavel
let add2 = function(num1, num2) {
    return num1 + num2;
};


let result = add(5, 5);
console.log(result)


function sayHi() {
    console.log('hi')
}
sayHi()
let sayHi2 = sayHi
sayHi2()


console.log('---------------------')
//sort() _ transforma em array e tbm compara os valores de um array pra retornar

let num = [1,2,3,4,5,6]
num.sort(function(fist, second) {
    return fist - second
})
console.log(num)


console.log('---------------------')
//arguments da funçao _ é tipo todos os parametros da funçao, quando nao se coloca parametro

function soma() {
    let resultado = 0
    let i = 0
    let len = arguments.length

    while ( i < len) {
        resultado += arguments[i]
        i++
    }

    return resultado
}

console.log(soma(2, 6, 4))


console.log('---------------------')
//sobrecarga _ funçoes com o mesmo nome, a ultima funçao que valerá
function mensage(mensage) {
    console.log(mensage)
}

function mensage() {
    console.log('defaut mensage')
}

mensage('parametro 1')


console.log('---------------------')
//metodos de objetos _ quando uma propiedade de um obj é uma funçao ela se chama metodo
let pessoa = {
    nome: 'talison',
    sairNome: function() {
        console.log(pessoa.nome)
    }
}

pessoa.sairNome();


console.log('---------------------')
// this _ todo escopo em javaScript tem um objeto this que representa o obj que chama a funçao
let person = {
    name: 'talison usando this',
    sairName: function() {
        console.log(this.name)
    }
}
person.sairName();

function sayNameForAll() {
    console.log(this.nome)
}

let pessoa1 = {
    nome: 'miguel',
    sairName: sayNameForAll
}

let pessoa2 = {
    nome: 'amancio',
    sairName: sayNameForAll
}

pessoa1.sairName()
pessoa2.sairName()
//nesse caso a funçao sayName ja pega o nome passado, pq o this é criado a cada obj



console.log('---------------------')
//metodo call() _ execulta a funçao com um determinado valor de this com parametros especificos
function sayNameForAll2(label) {
    console.log(label + ":" + this.name)
}

let perso1 = {
    name: "Nicolas"
}

let perso2 = {
    name: "greg"
}

let name = "michael"

sayNameForAll2.call(this, "global")
sayNameForAll2.call(perso1, "perso1")
sayNameForAll2.call(perso2, "perso2")



console.log('---------------------')
//Metodo apply() __ chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
sayNameForAll2.apply(this,["global"])
sayNameForAll2.apply(perso1,["perso1"])
sayNameForAll2.apply(perso2,["perso2"])



console.log('---------------------')
//Metodo bind() __ cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
//Explicaçao simples _ Cria uma nova funçao para o obj, que tem que passar o label ainda e o obj ja foi passado
let sayNameForAllPerson1 = sayNameForAll2.bind(perso1)
sayNameForAllPerson1("person1")

let sayNameForAllPerson2 = sayNameForAll2.bind(perso2, "person2")
sayNameForAllPerson2()

perso2.sayName = sayNameForAllPerson1;
perso2.sayName("perso2")