const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularMediaNotas() {
  rl.question("Informe a quantidade de alunos na turma: ", (N) => {
    rl.question("Informe a quantidade de questões da prova: ", (Q) => {
      const matriz = [];
      const notasQuestoes = [];

      for (let i = 0; i < N; i++) {
        matriz[i] = [];
        for (let j = 0; j < Q; j++) {
          matriz[i][j] = 0;
        }
      }

      let alunoIndex = 0;
      let questaoIndex = 0;

      function preencherNotas() {
        if (alunoIndex < N) {
          if (questaoIndex < Q) {
            rl.question(
              `Informe a nota do aluno ${alunoIndex + 1} na questão ${
                questaoIndex + 1
              }: `,
              (nota) => {
                matriz[alunoIndex][questaoIndex] = parseFloat(nota);

                questaoIndex++;
                preencherNotas();
              }
            );
          } else {
            questaoIndex = 0;
            alunoIndex++;
            preencherNotas();
          }
        } else {
          calcularMedia();
        }
      }

      function calcularMedia() {
        for (let j = 0; j < Q; j++) {
          let somaNotas = 0;
          for (let i = 0; i < N; i++) {
            somaNotas += matriz[i][j];
          }
          const media = somaNotas / N;
          notasQuestoes.push(media);
        }

        for (let i = 0; i < Q; i++) {
          console.log(
            `Média da questão ${i + 1}: ${notasQuestoes[i].toFixed(2)}`
          );
        }

        rl.close();
      }

      preencherNotas();
    });
  });
}

calcularMediaNotas();
