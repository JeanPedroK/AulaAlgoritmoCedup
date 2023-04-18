const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcLitros(valueGas, qtdLitros) {
  const gas = qtdLitros / valueGas;

  const abastecimento = gas.toFixed(2);

  return `Você abasteceu ${abastecimento} Litros de Gasolina.`;
}

rl.question("Digite o valor do litro da gasolina: ", (valueGas) => {
  rl.question("Digite o valor a abastecer: ", (qtdLitros) => {
    const resultado = calcLitros(valueGas, qtdLitros);

    console.log(resultado);

    rl.close();
  });
});
