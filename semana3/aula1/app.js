// Módulo 1 Semana 3

var texto = "OLHA EU NA VARIÁVEL!"; // string
var numero = 345; // number
var booleano = true; // boolean
var nulo = null; // "valor nulo"
var indefinido; // "ausencia de definição"

var titulo = document.getElementById("lista");

console.log(titulo.innerHTML);

// Cabeçalho

titulo.innerHTML = "Outro Título";

// Equivalente a true
// número difente de zero (... -1, +1 ...)
// string não vazia "abc"

// Equivalente a false
// quando null ou undefined
// quando número zero 0
// quando srting vazia ""

// lendo dados da pessoa usuária
//var resposta = window.prompt("Informe sua idade:");

// perguntando sim ou não
//var resposta = window.confirm("Aceitas?");

// convertendo string para number
//var numero = Number(resposta);
//var numero = +resposta;
//var numero = parseInt(resposta);
// console.log(resposta);

// if (resposta) {
//   console.log("Apertou OK!");
//   //window.alert("Apertou OK!");
//   document.write("APERTOU OK!!!!!");
// } else {
//   console.log("Apertou cancelar!");
//   //window.alert("Apertou cancelar!");
//   document.write("APERTOU CANCELAR!!!!!");
// }

// maior valor interiro possivel
Number.MAX_SAFE_INTEGER;
// typeof nos ajuda a descobrir o tipo de um valor
typeof booleano;

var nome = window.prompt("Nome:");
var sobrenome = window.prompt("Sobrenome:");

// formas equivalentes de juntar strings
console.log(nome + " " + sobrenome);
console.log(`${nome} ${sobrenome}`);
