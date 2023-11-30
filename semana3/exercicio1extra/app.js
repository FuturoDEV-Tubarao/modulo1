// Calcula Frete | M1S03E1

const campoPeso = document.getElementById("peso");
const campoDistancia = document.getElementById("distancia");
const botaoCalcular = document.getElementById("calcular");
const pFrete = document.getElementById("frete");

function calcularFrete() {
  const peso = Number(campoPeso.value);
  const distancia = Number(campoDistancia.value);
  const frete = 6 * peso * distancia;

  console.log({ campoPeso });

  pFrete.innerHTML = `O valor do frete é R$ ${frete.toFixed(2)}`;
}

botaoCalcular.addEventListener("click", calcularFrete);
