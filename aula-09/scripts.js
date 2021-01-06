// Aula 09 - Funções, procedimentos e comentários
console.log(""); //Dar espaço para melhorar a visualização


//Crie uma função chamada imprimir que imprima o conteúdo do argumento
console.log("Exercício 1")
function imprimir(i){
    console.log(i)
}
 
imprimir("Função criada e sendo impressa na tela");
console.log("");
imprimir("---");
console.log("");


//Criar uma função que verifica se nomes são iguais
console.log("Exercício 2.1 - Verificador de igualdade de nomes")
function verificaNome(a,b){
    return a==b //se a e b forem iguais, o retorno da função é true. Caso contrário, false
}

cwi = "CWI"
reset = "Reset"
imprimir(verificaNome(cwi, cwi))   // true
imprimir(verificaNome(cwi, reset)) // false

console.log("");
imprimir("---");
console.log("");


//Criar função que verifica se idade é de um adulto
console.log("Exercício 2.2 - Verificador de idade")

function verificaMaiorDeIdade(idade){
    return (idade>=18) //retorna true se a idade for maior ou igual a 18
}
imprimir(verificaMaiorDeIdade(30)) // true
imprimir(verificaMaiorDeIdade(18)) // true
imprimir(verificaMaiorDeIdade(5))  // false

console.log("");
imprimir("---");
console.log("");

//Criar função que aplique juros sobre um valor inicial
console.log("Exercício 2.3 - Juros")

function adicionarJuros(valor,juros){  //Optei por dois argumentos para dar maior liberdade no cálculo de juros diferentes
    return valor + valor * juros;
}

imprimir(adicionarJuros(100,0.1))   // 110
imprimir(adicionarJuros(984.5,0.1)) // 1082.95

console.log("");
imprimir("---");
console.log("");

//Calcular média aritmética entre elemenos de um array
console.log("Exercício 2.4 - Média aritmética")

function mediaAritmetica(itens){
   let total = 0;

    for(i = 0; i < itens.length; i++){
        total = total + itens[i]
    }
    return "A média dos números " + itens + " é " + (media = total/itens.length);           
}

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

console.log("");
imprimir("---");
console.log("");

//Criar função que calcule a Margem Bruta
console.log("Exercício 2.5 - Margem Bruta")

function margemBruta(receita, custos){
    let lucro = receita - custos;
    return "A Margem Bruta para uma Receita de R$" + receita +" e um custo de R$ " + custos +" é " +((lucro/receita)*100).toFixed(2) + "%"
}

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]


