//Desafio - 08 - Pagamento

/*Objetivo: Faça um algoritmo para o cálculo de uma folha de pagamento

Regras: -os descontos são do imposto de Renda, e do INSS que dependem do salário bruto (conforme
        tabelas abaixo) e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
        -O Salário Líquido corresponde ao Salário Bruto menos os descontos.
        -O algoritmo deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

        -Desconto do IR:
        Base de cálculo | Alíquota | Parcela a deduzir do IRPF
        De R$ 1.903,99 até R$ 2.826,65 | 7,5% | R$ 142,80
        De R$ 2.826,66 até R$ 3.751,05 | 15% | R$ 354,80
        De R$ 3.751,06 até R$ 4.664,68 | 22,5% | R$ 636,13
        Acima de R$ 4.664,68 | 27,5% | R$869,36

        Tabela INSS:
        5% até um salário mínimo
        9% para quem ganha entre R$ 1.045,01 R$ e 2.089,60
        12% para quem ganha entre R$ 2.089,61 e R$ 3.134,40
        14% para quem ganha acima R$ 3.134,41

        -Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é R$47 e a quantidade de horas trabalhadas é 44.

        Salário Bruto: (47,00 * 44) : R$ 2068
        (-) IR (7,5%) : (R$ 155,10 - R$142,80 (Parcela a deduzir do IRPF) ) = R$12,30
        (-) INSS ( 9%) : R$ 186,12
        FGTS (11%) : R$ 227,48
        Total de descontos : R$ 198,42
        Salário Liquido : R$ 1869,42
*/

//Variáveis
let salarioBruto;
let salarioLiquido;
let ir;
let inss;
let fgts;
let totalDescontos;
let valorHora = 0;
let horasTrabalhadas = 0;


//Funções
function print(i){ 
        console.log(i);    
    }

function calculaIR(salarioBruto){
        if(salarioBruto<1903.99){
                ir = 0;
                print("(-) IR (0%) : R$ " + ir)
        }else if(salarioBruto <= 2826.65){
                ir = ((salarioBruto * 0.075) - 142.8).toFixed(2);
                print("(-)IR (7.5%) : R$ " + ir)
        }else if(salarioBruto <= 3751.05){
                ir = ((salarioBruto * 0.15) - 354.8).toFixed(2);
                print("(-)IR (15%): R$ " + ir)
        }else if(salarioBruto <= 4664.68){
                ir = ((salarioBruto * 0.225) - 636.13).toFixed(2);
                print("(-)IR (22,5%): R$ " + ir)
        }else{
                ir = ((salarioBruto * 0.275) - 869.36).toFixed(2);
                print("(-)IR (22,5%): R$ " + ir)
        }
}

function calculaINSS(salarioBruto){
        if(salarioBruto<1045.01){
                inss = (salarioBruto * 0.075).toFixed(2);
                print("(-)INSS (7.5%) : R$ " + inss)
        }else if(salarioBruto <= 2089.61){
                inss = (salarioBruto * 0.09).toFixed(2);
                print("(-)INSS (9%) : R$ " + inss)
        }else if(salarioBruto <= 3134.40){
                inss = (salarioBruto * 0.12).toFixed(2);
                print("(-)INSS (12%):  R$ " + inss)
        }else {
                inss = (salarioBruto * 0.14).toFixed(2);
                print("(-)INSS (14%): R$ " + inss)
        }
}

function calculaFGTS(salarioBruto){
        fgts = (salarioBruto * 0.11).toFixed(2);
        print("FGTS (11%): R$ " + inss)
}

function calculaTotalDescontos(ir,inss){
        totalDescontos = (parseFloat(ir) + parseFloat(inss)).toFixed(2); //não entendi pq tinham virado strings
        print("Total de descontos: R$ " + totalDescontos)
}

function calculaSalarioLiquido(salarioBruto,totalDescontos){
        salarioLiquido = (salarioBruto - totalDescontos).toFixed(2); 
        print("Salário Líquido: R$ " + salarioLiquido)
}

function calculaImposto(valorHora,horasTrabalhadas){
                
        salarioBruto = (valorHora * horasTrabalhadas).toFixed(2);

        if (salarioBruto > 0){
                print("Salário Bruto: R$ " + salarioBruto)

        }else{
                print("Verificar horas trabalhadas e valor da hora.")
                return;
        } 
        
        calculaIR(salarioBruto);
        calculaINSS(salarioBruto);
        calculaFGTS(salarioBruto);
        calculaTotalDescontos(ir,inss);
        calculaSalarioLiquido(salarioBruto,totalDescontos);
        print("")
}

calculaImposto(47,44)
calculaImposto(40,60)
calculaImposto(30,20)