function calcularQuantidadeFerraduras(cavalos) {
  const ferradurasPorCavalo = 4;
  const quantidadeFerraduras = cavalos * ferradurasPorCavalo;
  return quantidadeFerraduras;
}
var xcav = 54;
const quantidadeFerradurasPara50Cavalos = calcularQuantidadeFerraduras(xcav);
console.log(
  "A Quantidade necessárias de ferraduras para 50 cavalos são " +
    quantidadeFerradurasPara50Cavalos +
    " ferradures "
);
