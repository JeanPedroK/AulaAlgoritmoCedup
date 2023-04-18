const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valBro = 1.5;
const valPao = 0.12;

function calc(value, qtd) {
  const valQtd = value * qtd;

  return valQtd;
}
function porc(p1, p2) {
  const porcValue = 0.1;
  const total = p1 + p2;
  const poupanca = total * porcValue;
  return poupanca;
}
rl.question("Digite a quantidade de pães vendidos no dia: ", (pao) => {
  rl.question("Digite a quantidade de Broas vendidos no dia: ", (bro) => {
    const resultadoP = calc(valPao, pao).toFixed(2);
    const resultadoB = calc(valBro, bro).toFixed(2);

    const poupanca = porc(parseFloat(resultadoB), parseFloat(resultadoP)).toFixed(2);

    console.log(
      `A padaria vendeu neste dia R$${resultadoP} Reais em pão frances e R$${resultadoB} em bronha e arrecadou R$${poupanca} para a poupança`
    );

    rl.close();
  });
});
