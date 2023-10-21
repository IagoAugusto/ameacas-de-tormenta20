import tabelaLacaio from "./tabelaLacaio";

export interface Statistics {
  patamar: string;
  ND: string;
  bônus_de_ataque: number;
  dano_médio: number;
  defesa: number;
  resistência_forte: number;
  resistência_média: number;
  resistência_fraca: number;
  PV: number;
  efeito: number;
}

const estatisticaLacaio: Statistics[] = tabelaLacaio;

// const specialistsStats: Statistics[] = [
//   {
//     nd: 0.5,
//     ataque: 7,
//     bonusDamage: 9,
//     defesa: 10,
//     strongResistence: 2,
//     mediumResistence: 0,
//     weakResistence: -1,
//     pv: 4,
//     CD: 0,
//   },
// ];

// const solosStats: Statistics[] = [
//   {
//     nd: 0.5,
//     ataque: 7,
//     bonusDamage: 9,
//     defesa: 10,
//     strongResistence: 2,
//     mediumResistence: 0,
//     weakResistence: -1,
//     pv: 4,
//     CD: 0,
//   },
// ];

export { estatisticaLacaio };
