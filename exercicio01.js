const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularMaiorLucroLoja() {
  rl.question("Informe o número de dias (N): ", (N) => {
    rl.question("Informe a quantidade de produtos vendidos (M): ", (M) => {
      const matriz = [];

      let i = 0;
      let j = 0;

      function preencherMatriz() {
        if (i < N) {
          rl.question(
            `Informe o valor de venda do produto ${j + 1} no dia ${i + 1}: `,
            (valorVenda) => {
              matriz[i] = matriz[i] || [];
              matriz[i][j] = parseFloat(valorVenda);

              j++;
              if (j < M) {
                preencherMatriz();
              } else {
                j = 0;
                i++;
                preencherMatriz();
              }
            }
          );
        } else {
          calcularMaiorLucro();
        }
      }

      function calcularMaiorLucro() {
        let maiorLucro = matriz[0][0];

        for (let i = 0; i < N; i++) {
          for (let j = 0; j < M; j++) {
            const lucro = matriz[i][j] - matriz[i][j];
            if (lucro > maiorLucro) {
              maiorLucro = lucro;
            }
          }
        }

        console.log("O maior lucro alcançado pela loja foi: " + maiorLucro);
        rl.close();
      }

      preencherMatriz();
    });
  });
}

calcularMaiorLucroLoja();
