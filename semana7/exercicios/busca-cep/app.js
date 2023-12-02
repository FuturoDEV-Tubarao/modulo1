// busca-cep

const campoCep = document.querySelector("#campo-cep");
const btnBusca = document.querySelector("#btn-busca");
const spanLocal = document.querySelector("#span-local");

// https://viacep.com.br/ws/88032-005/json

async function buscaCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const dados = await resposta.json();
    console.log(dados);
    spanLocal.innerHTML = dados.localidade;
  } catch (erro) {
    console.error(erro);
    spanLocal.innerHTML = "Não encontrada";
  }
}

btnBusca.addEventListener("click", () => {
  const cepInformado = campoCep.value.trim();

  if (cepInformado) {
    buscaCEP(cepInformado);
  }
});
