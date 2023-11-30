// f(x) = x + 3
// f(7) = 7 + 3

// definição da função
function somaTres(x, y) {
  return x + y + 3;
}

// invocação da função
const resultado1 = somaTres(7, 9);

//console.log(resultado1);
//console.log(somaTres(10, 1));

// do tipo função
//console.log(typeof somaTres); // "function"

// Capturando um elemento do DOM
const elemento = document.getElementById("titulo");
//elemento.innerHTML = "Olha, tá diferente!";
//elemento.style.backgroundColor = "red";

const campo = document.getElementById("campo");
console.log(campo.value);

function executaMe() {
  console.log(campo.value);
}

const botao = document.getElementById("botao");

//botao.onclick = executaMe;

botao.addEventListener("click", executaMe);

campo.addEventListener("keyup", executaMe);
