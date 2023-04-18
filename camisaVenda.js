const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const camiP = parseFloat('10');
const camiM = parseFloat('12');
const camiG = parseFloat('15');

function calc(value, value2) {
  const valor = value * value2;
  return valor;
}

rl.question("Quantidade de camisa P: ", (qtd1) => {
  rl.question("Quantidade de camisa M:  ", (qtd2) => {
    rl.question("Quantidade de camisa G: ", (qtd3) => {
      value1 = parseFloat(qtd1);
      value2 = parseFloat(qtd2);
      value3 = parseFloat(qtd3);

    
      const valor1 = calc(qtd1, camiP);
      const valor2 = calc(qtd2, camiM);
      const valor3 = calc(qtd3, camiG);

      valorTotal = valor1 + valor2 + valor3;

      console.log(`Valor total a pagar é: R$: ${valorTotal.toFixed(2)}`);

      rl.close();
    });
  });
});
