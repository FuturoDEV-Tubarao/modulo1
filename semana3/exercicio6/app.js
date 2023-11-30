// Lanchonete | M1S03E6

const campoCodigo = document.getElementById("codigo-prod");
const campoQuantidade = document.getElementById("quantidade");
const botaoPedir = document.getElementById("pedir");
const pValor = document.getElementById("valor-pedido");

function calcularPedido() {
  const codigo = campoCodigo.value;
  const quantidade = Number(campoQuantidade.value);
  let preco = 0;
  let nome = "";

  if (codigo === "1123") {
    nome = "Hambúrguer";
    preco = 12;
  } else if (codigo === "3423") {
    nome = "Sanduíche de pernil";
    preco = 9;
  } else if (codigo === "4521") {
    nome = "Bauru";
    preco = 15;
  } else if (codigo === "5322") {
    nome = "Sanduíche de mortadela";
    preco = 34.99;
  }

  const valor = preco * quantidade;

  pValor.innerHTML = `${quantidade} ${nome} custam R$ ${valor.toFixed(2)}`;
}

botaoPedir.addEventListener("click", calcularPedido);

// Solução com IF
/*
  if (codigo === "1123") {
    nome = "Hambúrguer";
    preco = 12;
  } else if (codigo === "3423") {
    nome = "Sanduíche de pernil";
    preco = 9;
  } else if (codigo === "4521") {
    nome = "Bauru";
    preco = 15;
  } else if (codigo === "5322") {
    nome = "Sanduíche de mortadela";
    preco = 34.99;
  }
*/

// Solução com SWITCH
/*
  switch (codigo) {
    case "1123":
      nome = "Hambúrguer";
      preco = 12;
      break;

    case "3423":
      nome = "Sanduíche de pernil";
      preco = 9;
      break;

    case "4521":
      nome = "Bauru";
      preco = 15;
      break;

    case "5322":
      nome = "Sanduíche de mortadela";
      preco = 34.99;
      break;

    default: // nada pra fazer
  }
*/
