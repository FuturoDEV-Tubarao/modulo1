// script da lista de tarefas

const campoTarefa = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

let listaControle = [
  {
    nome: "Lavar",
    feito: true,
  },
  {
    nome: "Secar",
    feito: false,
  },
  {
    nome: "Guardar",
    feito: false,
  },
];

function removeItemDaLista(itemParaRemover) {
  const novaListaControle = listaControle.filter((itemDaLista) => {
    return itemDaLista !== itemParaRemover;
  });
  listaControle = novaListaControle;
  atualizaTela();
}

function criaElementoDoItem(item) {
  const novoElemento = document.createElement("li");
  const checado = item.feito ? "checked" : "";

  novoElemento.innerHTML = `
    <input type="checkbox" ${checado} />
    <span>${item.nome}</span>
    <button>🗑️</button>
  `;
  novoElemento.className = "item";

  const botaoRemover = novoElemento.querySelector("button");
  botaoRemover.addEventListener("click", () => {
    removeItemDaLista(item);
  });
  return novoElemento;
}

function atualizaTela() {
  listaTarefas.innerHTML = "";

  listaControle.forEach((item) => {
    const novoItem = criaElementoDoItem(item);
    listaTarefas.appendChild(novoItem);
  });
}

atualizaTela();

function adicionaItemNaLista() {
  if (campoTarefa.value) {
    const novaTarefa = {
      nome: campoTarefa.value,
      feito: false,
    };
    listaControle.push(novaTarefa);
    campoTarefa.value = "";
    atualizaTela();
  }
}

botaoAdicionar.addEventListener("click", adicionaItemNaLista);
