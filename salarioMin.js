const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calc(valueKg, Klg) {
  const cal = valueKg / Klg;

  const pesoComida = cal.toFixed(1);

  return `Voce ganha ${pesoComida} salários minimos.`;
}


rl.question("Digite o valor do salário minimo atual:", (salaMin) => {
  rl.question("Digite o seu salário: ", (seuSala) => {
    const resultado = calc(seuSala, salaMin);

    console.log(resultado);

    rl.close();
  });
});
