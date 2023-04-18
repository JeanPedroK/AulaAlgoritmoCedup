const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDiasVividos(nome, anoNascimento) {
  const dataAtual = new Date();
  
  const anoAtual = dataAtual.getFullYear();
  
  const idade = anoAtual - anoNascimento;
  
  const diasVividos = idade * 365; 
  return `${nome}, você viveu aproximadamente ${diasVividos} dias.`;
}

rl.question('Digite o nome da pessoa: ', (nome) => {
  rl.question('Digite o ano de nascimento da pessoa: ', (anoNascimento) => {
    const anoNascimentoNumero = parseInt(anoNascimento, 10);
    
    const resultado = calcularDiasVividos(nome, anoNascimentoNumero);
    
    console.log(resultado);
    
    rl.close();
  });
});
