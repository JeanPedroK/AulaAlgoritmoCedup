const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira nota: ", (nota1) => {
  rl.question("Digite o peso da primeira nota: ", (peso1) => {
    rl.question("Digite a segunda nota: ", (nota2) => {
      rl.question("Digite o peso da segunda nota: ", (peso2) => {
        rl.question("Digite a terceira nota: ", (nota3) => {
          rl.question("Digite o peso da terceira nota: ", (peso3) => {
            nota1 = parseFloat(nota1);
            peso1 = parseFloat(peso1);
            nota2 = parseFloat(nota2);
            peso2 = parseFloat(peso2);
            nota3 = parseFloat(nota3);
            peso3 = parseFloat(peso3);

            const somaPesos = peso1 + peso2 + peso3;
            const notaPonderada =
              (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

            console.log(`A média ponderada é: ${notaPonderada.toFixed(2)}`);

            rl.close();
          });
        });
      });
    });
  });
});
