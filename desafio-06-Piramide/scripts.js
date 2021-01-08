//Desafio - 06 - Pirâmide

/*Objetivo: Construir pirâmide feita com dois triangulos retângulos
  em que a base tem o dobro de # que a altura
Regras: As duas metades da pirâmide devem ser separadas por dois espaços em branco;
*/

//Variáveis
let altura;
let linha = "";

//Funções

function print(i){ 
    console.log(i);    
}


function criarPiramide(altura){
    
    for(i=0; i < altura; i++){
        linha = "";              
        for (j = 0 ; j <= (altura - i); j++){
            linha +=" ";
        }
        for (k = 0 ; k <= i; k++){
            linha +="#";
        }
        for (l = 0 ; l < 2 ; l++){
            linha +=" ";
        }
        for (m = 0 ; m <= i; m++){
            linha +="#";            
        }
        print(linha);
    }   
}
criarPiramide(1)
criarPiramide(5)
criarPiramide(10)