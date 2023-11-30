// m1-s07-a1

const spanTexto = document.getElementById("texto-salvo");
const campoTexto = document.getElementById("campo-texto");
const botaoSalva = document.getElementById("botao-salva");

// revisão localStorage e JSON

let listaDeObjetos = [
  { id: 1, nome: "Lavar" },
  { id: 2, nome: "Secar" },
];

function recuperaTexto() {
  const valorRecuperado = localStorage.getItem("lista");
  if (valorRecuperado) {
    listaDeObjetos = JSON.parse(valorRecuperado);
  }
}

function atualizaTela() {
  spanTexto.innerHTML = "";
  listaDeObjetos.forEach((obj) => {
    spanTexto.innerHTML += `${obj.nome}, `;
  });
}

function salvarTexto() {
  const novoObjeto = {
    id: Date.now(),
    nome: campoTexto.value,
  };

  listaDeObjetos.push(novoObjeto);

  // localstorage só armazena texto (string)
  localStorage.setItem("lista", JSON.stringify(listaDeObjetos));

  atualizaTela();
}

botaoSalva.addEventListener("click", salvarTexto);

recuperaTexto();
atualizaTela();

// Programação Síncrona/Assíncrona

// exemplo interval
const numIntervalo = setInterval(() => {
  console.count("Timeout!!!");
}, 1000);

// limpando interval
clearInterval(numIntervalo);

// PROMISES

// promise com then e catch
function buscaInfos() {
  fetch("https://api.github.com/users/romeuic")
    .then((resposta) => {
      // este é o caminho feliz
      resposta.json().then((dados) => {
        console.log("THEN", dados);
      });
    })
    .catch((error) => {
      // este é o tratamento de erros
      console.log("CATCH", error);
    })
    .finally(() => {
      // sempre será executado
      console.log("FINALLY");
    });

  console.log("ULTIMO_CONSOLE_LOG");
}
//buscaInfos();

// promise com async await
const buscaInfosNovo = async () => {
  try {
    console.log("ENTROU_NA_FUNCAO_ASYNC");
    const resposta = await fetch("https://api.github.com/users/romeuic");

    const dados = await resposta.json();

    console.log("AWAIT", dados);
  } catch (error) {
    // este é o tratamento de erros
    console.log("CATCH", error);
  } finally {
    // sempre será executado
    console.log("FINALLY");
  }
};

buscaInfosNovo();
console.log("ULTIMO_CONSOLE_LOG");
