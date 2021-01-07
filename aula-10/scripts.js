// Aula 10 - Juntando tudo

//Algoritimo verificador para aposentdoria

/*Objetivo: Criar um algoritmo que verifica se colaborador já está apto a se aposentar
  Regras: - Ter 65 anos ou mais;
          - Ter trabalhado pelo menos 30 anos;
          - Ter mais de 60 anos e 25 anos de trabalho.
*/



// // Variáveis ---
let colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
let idades= [69,66,58,61,60,64,59,55]
let temposDeTrabalho = [31,29,30,26,25,24,26,29]

let indice;

// //Funções
function print(i){
    console.log(i);
    }

function verificarAposentadoria (colaborador){

    for(i = 0; i < colaboradores.length; i++){ //verifica se colaborador está no array e estipula a posição caso positivo
        if (colaborador == colaboradores[i]){
            indice = i;
            break; //Esse break tira do laço no momento que localiza o colaborador no array           
        }else{
            indice = -1; //Atribui valor negativo para o indice caso colaborador não esteja no array
        }
    }
    if(indice<0){ //
        print("Colaborador inválido :|");
        return;  // Sair da função já que o nome não está entre os colaboradores      
    }

    if(idades[indice]>=65 || temposDeTrabalho[indice]>=30 || (idades[indice]>=60 && temposDeTrabalho[indice]>=25 )){
        print("Parabéns, já pode sair de férias eternas :)")
    }else{
        print("Infelizmente para você, ainda falta um tempo :(")
    }
}

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)



// function print(i){
//     console.log(i);
// }

// function calcularIMC (massa,altura){
//     let imc = massa/(altura **2);  // ** é o operador para potência; 
//     return imc;
// }

// function verificarNivel(imc){
//     let nivel = 0;

//     if (imc<17){
//         nivel = 0;
//     }else if (imc<18.5){
//         nivel = 1;
//     }else if (imc<25){
//         nivel = 2;
//     }else if (imc<30){
//         nivel = 3;
//     }else if (imc<35){
//         nivel = 4;
//     }else if (imc<40){
//         nivel = 5;
//     }else{
//         nivel = 6;
//     }
//     return nivel;
// }

// //Execução
// for (i = 0; i < pessoas.length;i++){
   
//     print(pessoas[i] +" está " +niveis[verificarNivel(calcularIMC(massas[i],alturas[i]))])
// }