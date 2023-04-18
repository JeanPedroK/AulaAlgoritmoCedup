const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularSalarioLiquido(salario, contas) {
  const totalContas = contas.reduce((a, b) => a + b, 0);
  const salarioLiquido = salario - totalContas;
  return salarioLiquido;
}

rl.question("Digite o valor do seu salário: ", (salario) => {
  rl.question("Digite a quantidade de contas a serem deduzidas: ", (quantidadeContas) => {
    const contas = [];

    const obterValorConta = (indice) => {
      if (indice === quantidadeContas) {
        const salarioLiquido = calcularSalarioLiquido(parseFloat(salario), contas);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        rl.close();
      } else {
        rl.question(`Digite o valor da conta ${indice + 1}: `, (valorConta) => {
          contas.push(parseFloat(valorConta));
          obterValorConta(indice + 1);
        });
      }
    };

    obterValorConta(0);
  });
});
