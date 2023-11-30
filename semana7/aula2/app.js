// m1-s07-a2

// revisao promise

const promise1 = new Promise((resolve, reject) => {
  // tarefa a ser executada assincronicamente
  resolve("SUCESSO P1");
  //reject("FALHOU!");
});

const promise2 = new Promise((resolve, reject) => {
  // tarefa a ser executada assincronicamente
  resolve("SUCESSO P2");
  //reject("FALHOU!");
});

// promise all aguarda todas promises concluirem
/*
Promise.all([promise1, promise2])
  .then((respostas) => {
    console.log(respostas); // array de respostas
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("FIM!");
  });
*/

// promice race executa o then com a primeira resposta
/*
Promise.race([promise1, promise2])
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("FIM!");
  });
*/

//console.log("OLHA EU AQUI!");

// ASYNC-AWAIT

const promise3 = new Promise((resolve, reject) => {
  // tarefa a ser executada assincronicamente
  resolve("SUCESSO P3");
  //reject("FALHOU!");
});

function lidaComPromise2() {
  promise2
    .then((resposta) => {
      console.log(resposta);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("FIM!");
    });
}

async function lidaComPromise3() {
  try {
    const resposta = await promise3;
    console.log(resposta);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("FIM!");
  }
}

//lidaComPromise2();
//lidaComPromise3();

const delay = (ms = 100) => {
  return new Promise((resolve) => setTimeout(() => resolve("Ok!"), ms));
};

// Exemplo Funcão Anônima Instantânea
/* 
(async () => {
  try {
    const response = await delay(1500);
    console.log("Resposta:", response);
  } catch (error) {
    console.log("Erro:", error);
  } finally {
    console.log("Chegou ao fim!");
  }
})();
 */

// FETCH

const spanLocal = document.getElementById("span-local");

function buscaCEPthen(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      resposta.json().then((dados) => {
        console.log(dados);
        spanLocal.innerHTML = dados.localidade;
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Concluiu a busca!");
    });
}

// exemplo com GET
async function buscaCEP(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

    spanLocal.innerHTML = dados.localidade;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Concluiu a busca!");
  }
}

//buscaCEP(97280000);

// exemplo com POST
async function mandaParaTubarao() {
  try {
    const conteudo = { title: "FUNCIONA", userId: 1 };
    const url = "https://tubarao.requestcatcher.com/test";
    const options = {
      method: "POST",
      body: JSON.stringify(conteudo),
    };

    const resposta = await fetch(url, options);
    const dados = await resposta.json();
    console.log(dados);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Concluiu a requisição!");
  }
}

// podemos ver a requisição em
// https://tubarao.requestcatcher.com/
//mandaParaTubarao();

async function buscarDoJsonServer() {
  try {
    const url = "http://localhost:5501/tarefas";
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
  } catch (error) {
    console.error({ error });
  } finally {
    console.log("Concluiu a requisição!");
  }
}

buscarDoJsonServer();
