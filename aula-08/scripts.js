// ESTRUTURA DE REPETIÇÃO

let i = 0;
while(i<=10) {
    console.log(i++)
    //i = i + 1;
}

////////////////

console.log(" ")

///////////////

i = 0;
do{
    console.log(i++)
}while(i<=10)

////////////////

console.log(" ")

///////////////

for (i=0; i<=10;i++){
    console.log(i)
}

//////////////////

console.log(" ")

alunos = ["João", "Carlos", "Pedro", "Rafael"]

notas = [ [5.8, 6.5], [ 8, 6], [9, 3] ,[ 4, 7] ]

for(i = 0 ; i < alunos.length; i++ ){
    alunoSelecionado = i;
    nomeDoAluno = alunos[alunoSelecionado];
    media = (notas[alunoSelecionado].reduce((first,last) => first + last))/notas[alunoSelecionado].length;
    console.log("O aluno selecionado foi o",nomeDoAluno)
    console.log("A primeira nota foi", notas[alunoSelecionado][0], " e a segunda nota foi", notas[alunoSelecionado][1],".", "Sua média foi",media )
    console.log(" ")
}



/////////////////// EXERCÍCIO /////////////////

array = ["A", "B", "C", "D", "E"]
 
i = 0
while(i< array.length){
    console.log(array[i++])    
}
console.log()

////////////

valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

total = 0;

for(i = 0; i < valores.length; i++){
    total = total + valores[i]
}

media = total/valores.length

console.log(media)
console.log()

////////////////////////////////

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

nomeVerificar = "Isabela";

for (i = 0; i<nomesComuns.length; i++){
    if(nomeVerificar==nomesComuns[i]){
        verificador = true;
        break;
    }else{
        verificador = false;
    }
}

if(verificador==true){
    console.log("É, nome comum :P")
}else{
    console.log("Diferentão, hein? XD")
}

