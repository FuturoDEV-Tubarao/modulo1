// script da lista de tarefas

const campoTarefa = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const spanQtd = document.getElementById("qtd-tarefas");

let listaControle = [
  {
    id: 1,
    nome: "Lavar",
    feito: true,
  },
  {
    id: 2,
    nome: "Secar",
    feito: false,
  },
  {
    id: 3,
    nome: "Guardar",
    feito: false,
  },
];

function salvarNoLocalStorage() {
  const listaJson = JSON.stringify(listaControle);
  localStorage.setItem("tarefas", listaJson);
}

function recuperaDoLocalStorage() {
  const listaJson = localStorage.getItem("tarefas");

  if (listaJson) {
    listaControle = JSON.parse(listaJson);
  }
}

function marcaItemDaLista(idItem) {
  const novaListaControle = listaControle.map((itemDaLista) => {
    if (itemDaLista.id === idItem) {
      return {
        ...itemDaLista,
        feito: !itemDaLista.feito,
      };
    }
    return itemDaLista;
  });
  listaControle = novaListaControle;
  atualizaTela();
  salvarNoLocalStorage();
}

function removeItemDaLista(idItem) {
  const novaListaControle = listaControle.filter((itemDaLista) => {
    return itemDaLista.id !== idItem;
  });
  listaControle = novaListaControle;
  atualizaTela();
  salvarNoLocalStorage();
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

  const checkbox = novoElemento.querySelector("input");
  checkbox.addEventListener("click", () => {
    marcaItemDaLista(item.id);
  });

  const botaoRemover = novoElemento.querySelector("button");
  botaoRemover.addEventListener("click", () => {
    removeItemDaLista(item.id);
  });
  return novoElemento;
}

function atualizaTela() {
  listaTarefas.innerHTML = "";

  listaControle.forEach((item) => {
    const novoItem = criaElementoDoItem(item);
    listaTarefas.appendChild(novoItem);
  });

  spanQtd.innerHTML = listaControle.length;
}

function adicionaItemNaLista() {
  const novoNomeDeTarefa = campoTarefa.value.trim();

  if (novoNomeDeTarefa) {
    const novaTarefa = {
      id: Date.now(), // br de milisegundos desde 01/01/1970
      nome: campoTarefa.value,
      feito: false,
    };

    listaControle.push(novaTarefa);
    campoTarefa.value = "";
    atualizaTela();
    salvarNoLocalStorage();
  }
}

botaoAdicionar.addEventListener("click", adicionaItemNaLista);
recuperaDoLocalStorage();
atualizaTela();
