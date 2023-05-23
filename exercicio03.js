const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a quantidade de números a serem inseridos no vetor: ", function(N) {
  const vetor = [];

  function lerNumeros(i) {
    if (i < N) {
      rl.question(`Digite o número ${i + 1}: `, function(numero) {
        vetor.push(Number(numero));
        lerNumeros(i + 1);
      });
    } else {
      const soma = vetor.reduce((total, numero) => total + numero, 0);
      console.log("A soma dos números é:", soma);
      rl.close();
    }
  }

  lerNumeros(0);
});