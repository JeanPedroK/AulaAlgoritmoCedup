const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function daysPast(date) {
  const currentDate = new Date();

  const inputDate = new Date(date);

  if (isNaN(inputDate)) {
    console.log("Data inválida!");
    rl.close();
    return;
  }

  const timeDifference = currentDate - inputDate;

  const daysElapsed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  return daysElapsed;
}

rl.question("Digite o ano atual: ", (date) => {
  const daysElapsed = daysPast(date);
  if (daysElapsed !== undefined) {
    console.log(`Dias passados no ano: ${daysElapsed}`);
  }
  rl.close();
});