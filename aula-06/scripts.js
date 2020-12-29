//////////////////// TESTES  //////////////////////////////////

const notas = [8.5, 9.7, 8.4];

somaNotas = notas.reduce((first,last) => first + last);

media = somaNotas / notas.length;

//////////////////

console.log("As notas foram ", ...notas);

console.log("////////")

console.log("A média foi", media.toFixed(2));

console.log("////////")

for (const item of notas){
    console.log(item)
}

console.log("////////")

const abaixo = notas.some((nota) => nota <= 5.9)

console.log ("Alguna nota abaixo de 6.0 =",  abaixo)

console.log("////////")

const todasAcima = notas.every((nota) => nota >= 6.0)
console.log ("Todas as notas estão acima de 6.0 =",  todasAcima)

console.log("////////")

const qualAcima = notas.filter((nota) => nota >= 6.0)
console.log ("Quais foram acima de 6 =",  qualAcima)
console.log ("Quais foram acima de 6 =",  ...qualAcima)

console.log("////////")

conceito = " ";

if (media <= 6){
    conceito = "Ruim"
}

else if (media <= 8){
    conceito = "Bom"
}

else {
    conceito = "Ótimo"
}

console.log("A sua média foi",media.toFixed(2),"e o seu conceito é",conceito)

switch(conceito){
    case "Ruim":
        console.log("Precisa estudar mais")
        break;

    case "Bom":
        console.log("Deu para o gasto")
        break;

    case "Ótimo":
        console.log("Parabéns, ótimo, continue assim")
        break;
}
console.log("////////")

/////////////////// EXERCÍCIOS //////////////////////

let altura = 1.8
let peso = 85

const IMC = peso/(altura*altura)

classificacao = " ";
grauObesidade = " ";

if (IMC <= 18.5){
    classificacao = "Magreza"
    grauObesidade = 0;
}

else if (IMC <= 24.99){
    classificacao = "Normal"
    grauObesidade = "0";
}

else if (IMC <= 29.99){
    classificacao = "Sobrepeso"
    grauObesidade = "1";
}

else if (IMC <= 39.99){
    classificacao = "Obesidade"
    grauObesidade = "2";
}

else {
    classificacao = "Obesidade grave"
    grauObesidade = "3";
}

console.log("O seu IMC é", IMC.toFixed(2),"e o sua classificacao é",classificacao)

switch(grauObesidade){
    case "1" :
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
        break;

    case "2" :
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
        break;

    case "3":
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.")        
        console.log("É importante procurar um médico para avaliar sua saúde.")
        break;
}