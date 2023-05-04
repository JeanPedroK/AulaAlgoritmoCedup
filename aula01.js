let numeros = [10, 20, 30, 40, 50];

let indice = Math.floor(Math.random() * 5);

let numero = numeros[indice];

console.log(numero);

let teste = 0;

for (let teste = 0; teste < 10; teste++) {
  const element = teste;
  console.log(element);
}

let grade = [
    ["[]", "[]", "[]"],
    ["[]", "[]", "[]"],
    ["[]", "[]", "[]"]
  ];
  
  for (let i = 0; i < 3; i++) {
    grade[i][i] = "[x]";
  }
  
  for (let i = 0; i < 3; i++) {
    console.log(grade[i].join(" "));
  }
