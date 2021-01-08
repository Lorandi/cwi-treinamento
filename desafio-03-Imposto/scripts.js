//Desafio 03 - Calcular Imposto por @89anderson

/*
Objetivo: Criar uma função que calcule imposto em cima de produtos. 
Regras: - Produtos abaixo de 500 não recebem taxação
        - Produtos entre 500 e 750 recebem taxação de 60%.
        - Produtos entre 750 e 1000 recebem taxação de 60% + 8% sobre o valor total
        - Produtos acima de 1000 recebem taxação de 60% + 8% incidindo sobre o valor inicial e ainda outros 19% sobre o valor total.
*/

//Variaveis
let valorInicial;
let valorFinal;

//Funções
function print(i){ //função criada para economizar linhas de código
    console.log('');
    console.log(i);    
}

function calcularImposto(valorInicial){  

    if(valorInicial<=500){
        print("Valor inicial do produto é R$ " + valorInicial.toFixed(2) +". Isento de imposto.");

    }else if(valorInicial<=750){
        valorFinal = valorInicial + valorInicial*0.6;
        //Produtos entre 500 e 750 recebem taxação de 60%.
        print("Valor inicial do produto é R$ " + valorInicial.toFixed(2) +". Com imposto fica R$ "+valorFinal.toFixed(2));

    }else if(valorInicial<=1000){
        valorFinal = valorInicial + valorInicial*0.6;
        valorFinal = valorFinal + valorFinal*0.08;
        //Produtos entre 750 e 1000 recebem taxação de 60% + 8% sobre o valor total
        print("Valor inicial do produto é R$ " + valorInicial.toFixed(2) +". Com imposto fica R$ "+valorFinal.toFixed(2));

    }else{
        valorFinal = valorInicial + valorInicial*0.6;
        valorFinal = valorFinal + valorFinal*0.08;
        valorFinal = valorFinal + valorFinal*0.19;
        //Produtos acima de 1000 recebem taxação de 60% + 8% incidindo sobre o valor inicial e ainda outros 19% sobre o valor total.
        print("Valor inicial do produto é R$ " + valorInicial.toFixed(2) +". Com imposto fica R$ "+valorFinal.toFixed(2));
    }    
}

calcularImposto(400) //400

calcularImposto(600) //960

calcularImposto(800) //1382,32

calcularImposto(1000) //1728

calcularImposto(1001) //2058.38

