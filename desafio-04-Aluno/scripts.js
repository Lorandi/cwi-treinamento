//Desafio 04 - Aluno por @AnaBirk

/*
Objetivo: Verificar se aluno está cadastrado e printar sua média
Regras: -Se o aluno estiver cadastrado:
            -Calcular sua média final,
            -Exibir sua nota final e o conceito.
        
        - Se o aluno não existir, apenas mostrar a mensagem "Aluno não cadastrado"
        
Nota final Conceito
de 0,0 a 4,9 -D
de 5,0 a 6,9 -C
de 7,0 a 8,9 -B
de 9,0 a 10,0 -A
*/

//Variaveis
let alunos = ["Rachel", "Joey", "Phebe", "Ross", "Chandler", "Monica"]

let notas = [[9, 10], [8.5, 7], [9.4, 10], [5.6, 6], [0, 0], [10, 10]]

let media;

let aluno = false;

let conceito;


//Funções
function print(i){ //função criada para economizar linhas de código
    console.log('');
    console.log(i);    
}

function verificarAluno(nome){
    for(i=0; i < alunos.length;i++){ //esse laço serve para verificar se nome está entre os alunos
        if(nome == alunos[i]){
            aluno = true;
            break;
        }else{
            aluno = false; //necessário para o caso de testar vários nomes em sequencia
        }  
    }

    if(aluno){ //se o nome estiver no array dos alunos, entra neste laço
        let total  = 0;
        for(j = 0; j < notas[i].length; j++){ //segundo laço para determinar a média das notas
            total = total + notas[i][j];                                  
        }
        media = total /notas[i].length;    

        if(media<5){
            conceito = "D";
        }else if(media<7){
            conceito = "C";
        }else if(media<9){
            conceito = "B";
        }else{
            conceito = "A";
        }
            
    }else{ //função retorna caso nome não esteja no array de alunos
        print("Aluno não cadastrado");
        return; 
    }     
    print("A nota final do aluno " + alunos[i] + " é " + media + " e seu conceito é " + conceito);
}

verificarAluno("Hommer");   //Aluno não cadastrado
verificarAluno("Rachel");   // A nota final do aluno Rachel é 9.5 e seu conceito é A
verificarAluno("Joey");     //A nota final do aluno Joey é 7.75 e seu conceito é A
verificarAluno("Phebe");    //A nota final do aluno Phebe é 9.7 e seu conceito é B
verificarAluno("Ross");     //A nota final do aluno Ross é 5.8 e seu conceito é A
verificarAluno("Chandler"); //A nota final do aluno Chandler é 0 e seu conceito é C
verificarAluno("Monica");   //A nota final do aluno Monica é 10 e seu conceito é D
verificarAluno("Pablo");    //Aluno não cadastrado


