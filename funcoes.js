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
