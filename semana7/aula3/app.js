// m1-s07-a3

// EXEMPLO REST
function exemploFuncaoRest(p1, p2, p3, ...restoDosParams) {
  console.log(p1, p2, p3, restoDosParams);
}

//exemploFuncaoRest("A", true, 777, "B", false, 44, "CCC");

// EXEMPLO SPREAD
const vetParams = ["A", true, 777, "B", false, 44, "CCC"];

function exemploFuncaoSpread(param1, param2, param3, param4) {
  console.log(param1, param2, param3, param4);
}

//exemploFuncaoSpread(...vetParams);

// SPREAD COM ARRAYS

const vetA = ["A", "B", "C"];
const vetB = ["X", "Y", "Z"];
const vetC = [...vetB, ...vetA];

//console.log(vetA, vetB, vetC);

// SPREAD COM OBJETOS
const objA = { a: "A", b: "B" };
const objB = { b: "B", c: "C" };
const objC = { ...objA, ...objB };

//console.log(objA, objB, objC);

// DESTRUCTURING VETORES

const coordExemploVet = [1, 2, 3];

// sem destructuring
function calculaAlgoV(coordenadas) {
  const x = coordenadas[0];
  const y = coordenadas[1];
  const z = coordenadas[2];
  return x + y + z;
}

// com destructuring
function calculaAlgoDestructuringV(coordenadas) {
  const [x, y, ...resto] = coordenadas;

  console.log({ x, y, resto });
}

calculaAlgoDestructuringV(coordExemploVet);

// DESTRUCTURING OBJETOS

const coordExemploObj = { x: 1, y: 2, z: 3 };

// sem destructuring
function calculaAlgoO(coordenadas) {
  const x = coordenadas.x;
  const y = coordenadas.y;
  const z = coordenadas.z;
  return x + y + z;
}

// com destructuring
function calculaAlgoDestructuringO(coordenadas) {
  const { x, y, ...resto } = coordenadas;

  console.log({ x, y, resto });
}

calculaAlgoDestructuringO(coordExemploObj);
