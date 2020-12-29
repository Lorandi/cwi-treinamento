//diferença do VETOR para MATRIZ é que o vetor é uma matriz com uma única dimensão

array = [];

array[0] = "Colher"
array[1] = "Garfo"
array[3] = "Faca"

console.log(array)
//[ 'Colher', 'Garfo', <1 empty item>, 'Faca' ]

////////////////////////////////////////////////////////////////

matriz = []

matriz [0] = ["João", "Carlos", "Pedro", "Rafael"]
matriz [1] = [1, 2, 3, 4]

console.log(matriz)

////////////////

alunos = ["João", "Carlos", "Pedro", "Rafael"]

notas = [ [5.8, 6.5], [ 8, 6], [9, 3] ,[ 4, 7] ]

alunoSelecionado = 2;

nomeDoAluno = alunos[alunoSelecionado];

media = (notas[alunoSelecionado].reduce((first,last) => first + last))/notas[alunoSelecionado].length;

console.log("O aluno selecionado foi o",nomeDoAluno)
console.log("A primeira nota foi", notas[alunoSelecionado][0], " e a segunda nota foi", notas[alunoSelecionado][1],".", "Sua média foi",media )