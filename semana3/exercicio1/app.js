// Calcula Frete | M1S03E1

const peso = prompt("Informe o peso (kg):");

const distancia = prompt("Informe a distância (km):");

const frete = 6 * Number(peso) * Number(distancia);

alert(`O valor do frete é R$ ${frete}`);
