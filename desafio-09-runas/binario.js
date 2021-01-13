function debuga(texto) {
    if (debugAtivado) {
        console.log(texto)
    }
}
// minhasRunas = ["Ansuz", "Thurisaz", "Thurisaz", "Thurisaz", "Thurisaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Gebo", "Wunjo", "Wunjo", "Wunjo", "Jara", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Raidho", "Raidho", "Mannaz", "Mannaz", "Mannaz"];

// receitaPedraSecretaDoSol = ["Ansuz", "Ansuz", "Elhaz", "Gebo", "Mannaz", "Raidho", "Sowilo", "Tiwaz"];  
   minhasRunas = ["Ansuz", "Thurisaz", "Thurisaz", "Thurisaz", "Thurisaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Kenaz", "Gebo", "Wunjo", "Wunjo", "Wunjo", "Jara", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Fehu", "Raidho", "Raidho", "Mannaz", "Mannaz"];

   receitaPedraSecretaDoSol = ["Ansuz", "Elhaz", "Ansuz", "Gebo", "Mannaz", "Mannaz", "Sowilo", "Tiwaz"];



runasFaltantes = []
count = 0

debugAtivado = true //Para exibir ou não logs de depuração

minhasRunas.sort()
receitaPedraSecretaDoSol.sort()

indexMin = 0
indexMax = minhasRunas.length
encontrado = false
fimDaBusca = false



for (i = 0; i < receitaPedraSecretaDoSol.length; i++) {
    
    
    if(receitaPedraSecretaDoSol[i] == receitaPedraSecretaDoSol[i-1]){ //verificando se elemento não é repetido
        console.log("")
        debuga('Procurando mais um :' + receitaPedraSecretaDoSol[i] + ' - ' + i)
        if (minhasRunas[j-1] === receitaPedraSecretaDoSol[i]) {
            debuga("Encontrou: " + receitaPedraSecretaDoSol[i])
            i++;
        }else{
            debuga("Não achou!" + receitaPedraSecretaDoSol[i])
            
            runasFaltantes.push(receitaPedraSecretaDoSol[i])
            i++;
        }        
    }

    if(i>=receitaPedraSecretaDoSol.length){ //condição necessária para não incuir um undefined no array runasFaltantes se os dois últimos elementos da receita não estiverem no minhasRunas;
        break;
    }

    console.log("")
    debuga('Procurando: ' + receitaPedraSecretaDoSol[i] + ' - ' + i)
    indexMax = minhasRunas.length
    encontrado = false
    fimDaBusca = false   

    while (!encontrado && !fimDaBusca) {
        count++

        debuga('Amplitude: ' + indexMin + " - " + indexMax)
        amplitudeDaBusca = (indexMax - indexMin)
        j = parseInt((amplitudeDaBusca) / 2 + indexMin) //parseInt para aceitar apenas inteiros

        debuga('Index intermediário a pesquisar: ' + j)
        

        if (minhasRunas[j] === receitaPedraSecretaDoSol[i]) {
            minhasRunas.splice(j, 1)
            encontrado = true

            //Lógica para evitar ignorar elementos iguais ao deslocar o indexMin para frente:
            if (j > 0) {
                indexMin = j - 1
            } else {
                indexMin = 0
            }

            debuga('Encontrou')
            break
        } else {
            if (receitaPedraSecretaDoSol[i] > minhasRunas[j]) {
                debuga('Eh maior.')

                if (indexMin == j) {
                    debuga('Nao achou!')
                    encontrado = false
                    fimDaBusca = true
                }
                indexMin = j
            } else {
                debuga('Eh menor.')
                indexMax = j
            }
        }

        if (indexMin == indexMax) {
            debuga('Nao achou!')
            encontrado = false
            fimDaBusca = true
        } 

        if (!encontrado && fimDaBusca) {
            runasFaltantes.push(receitaPedraSecretaDoSol[i])
        }


        
    }
}

console.log(runasFaltantes)
debuga('CONTAGEM: ' + count)