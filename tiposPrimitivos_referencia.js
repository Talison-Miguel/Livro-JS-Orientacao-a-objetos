// ultiliza 2 tipos: primitivos e refencia
//primitivos _ armazenados como dados simples
//refencia _ como objetos, sao referencias na memoria



//Primitivos __ Boolean, Number, String, Null, Undefined 
console.log(typeof "tipo string") //typeof é usado para ver o tipo primitivo
console.log("__________________")



//alguns metodos primitivos
let nome = "Tálison"
let obterPrimeiraLetra = nome.charAt(0)
console.log(obterPrimeiraLetra)
let obterLetras = nome.substring(0, 4)
console.log(obterLetras)
let nome2 = "Miguel"
console.log("__________________")



// espaço de armazenamento
let cor1 = "red"
let cor2 = cor1
console.log(cor2)
console.log("__________________")



//Tipos de referencia

// obj- sempre tem uma string: valor
//Sempre armazenam um refencia do local da memoria guardado
let obj1 = new Object()
let obj2 = obj1
console.log(obj2)
//__Apontam para o mesmo obj na memoria
console.log("__________________")



//Removendo a referencia
let obeject1 = new Object()
obeject1 = null
//removeu a refencia



//Adicionando e removendo uma propiedade
obj1.myCustomProperty = "Awsome!"
console.log(obj2.myCustomProperty)
console.log("__________________")


//Tipos de obj _ Array, Date, Error, Function, Object, RegExp
//ex: let items = new Array();




//FORMAS LITERAIS
let book = {
    nome: 'Vilão',
    ano : 2018
};
console.log(book)

let cores = ['red, blue, green, yellow']
console.log(cores)

function retornaString(value) {
    console.log(value)
    return value
}
retornaString("valor da funçao = 123456")

let string = /\d+/g;
console.log(string)

console.log("__________________")
console.log("__________________")

//o colchete permite adicionar caracteres especiais a propiedade
let adicionar = "push"
let array = [1, 2]
array[adicionar](3)
console.log(array) 

console.log("__________________")
//indentificar tipo de referencia
function tipo(value) {
    return value
}

console.log(typeof tipo)

//O operador instace off junto com o construtor identifica o tipo e retoirna true caso verdadeiro
let items = [];
let objeto = {};
console.log(items instanceof Array)
console.log(objeto instanceof Object)
console.log(Array.isArray(items))

//Foi criado com um construtor de obj por isso a string é obj
let name1 = new String("Nicholas")
console.log(typeof name1)


console.log("__________________")

