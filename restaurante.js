const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calc(valueKg, Klg) {
  const cal = valueKg * Klg;

  const pesoComida = cal.toFixed(2);

  return `Seu prato custou R$${pesoComida} Reais.`;
}


rl.question("Digite o valor do Kg do buffet ", (valueKg) => {
  rl.question("Digite o peso do seu prato: ", (Klg) => {
    const resultado = calc(valueKg, Klg);

    console.log(resultado);

    rl.close();
  });
});
