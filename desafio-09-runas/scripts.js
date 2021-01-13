//Desafio-Runas por @lokyrech

/*Objetivo:Criar uma função que com base no Array minhasRunas e no Array receitaPedraSecretaDoSol que retorne um Array indicando somente as runas faltantes para criação da Pedra Secreta do Sol.
 */

//Variáveis

let minhasRunas = [
  "Ansuz",
  "Thurisaz",
  "Thurisaz",
  "Thurisaz",
  "Thurisaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Kenaz",
  "Gebo",
  "Wunjo",
  "Wunjo",
  "Wunjo",
  "Jara",
  "Fehu",
  "Fehu",
  "Fehu",
  "Fehu",
  "Fehu",
  "Fehu",
  "Fehu",
  "Fehu",
  "Raidho",
  "Raidho",
  "Mannaz",
  "Mannaz",
  "Mannaz",
];

//let receitaPedraSecretaDoSol = ["Jara", "Gebo"]

let receitaPedraSecretaDoSol = [
  "Ansuz",
  "Ansuz",
  "Elhaz",
  "Gebo",
  "Mannaz",
  "Raidho",
  "Sowilo",
  "Tiwaz",
];

let runasFaltando = [];

let jaTenho;

let count = 0;

minhasRunas.sort(); //organiza array em ordem alfabética
receitaPedraSecretaDoSol.sort(); //organiza array em ordem alfabética

//Funções

function print(i) {
  console.log(i);
}

function verificarRunasFaltando() {
  for (i = 0; i < receitaPedraSecretaDoSol.length; i++) {
    jaTenho = false;
    for (j = 0; j < minhasRunas.length; j++) {      
      count++;
      if (minhasRunas[j] == receitaPedraSecretaDoSol[i]) {
        minhasRunas.splice(minhasRunas[j], 1);
        jaTenho = true;
        break;
      }
    }
    if (!jaTenho) {
      runasFaltando.push(receitaPedraSecretaDoSol[i]);
    }
  }
  print(runasFaltando);
  print(count);
}

verificarRunasFaltando();
