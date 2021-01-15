/*Objetivo:O desafio é somar todos os dígitos de um número, caso a resposta possua mais do que um dígito, continuar somando até sobrar apenas um dígito.

Exemplos:
15 = 1 + 5 = 6
279 = 2 + 7 + 9 = 18 = 1 + 8 = 9
34567 = 3 + 4 + 5 + 6 + 7 = 25 = 2 + 5 = 7
*/

//Variáveis
let numero;
let numeroToString;
let numeroFinal;

function soma(numero){
        numeroToString = numero.toString();        
            
        do{        
        numeroFinal = 0;
        for(i=0; i < numeroToString.length; i++){                
                numeroFinal += parseInt(numeroToString[i])                 
        }
        numeroToString = numeroFinal.toString();
        
        } while(numeroFinal>9)
        console.log(numeroFinal)      
}

// soma(9);                //9
// soma(18);               //9
// soma(27);               //9
// soma(108);              //9
// soma(207);              //9
// soma(111111111);        //9
soma(7992312398);
soma(123456789);
                             