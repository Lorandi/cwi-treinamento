//Desafio 02 - Pontos na Carteira por @sergioribeiros

//Objetivo:Criar algorítmo que adiciona pontos à carteira por excesso de velocidade

/*Regras: - velocidade máxima de 70km/h;
          - a cada 5km/h acima do limite, você ganha 1 ponto;
          - caso pontos >= 12 -> carteira suspensa;
          - usar Math.floor para não mostrar numero quebrado */

//Variávei
let velocidade; //velocidade será fornecida como argumento da função
let pontos=0;   //pontos serão calculados pela função

//Funções
function print(i){ //função criada para economizar linhas de código
    console.log('');
    console.log(i);    
}

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        print("Velocidade dentro do permitido")
        return; //sair da função caso a velocidade verificada seja menor ou igual a 70
    }else{
        acima = velocidade - 70;
        pontos = Math.floor(acima/5) //método math.floor() utilizado para não mostrar números quebrados       
    }

    if(pontos<12){
        print("Carteira com "+ pontos+ " pontos")
    }else if(pontos >= 12){
        print("Carteira suspensa com " + pontos + " pontos")
    }
}

verificarVelocidade(60);  //Velocidade dentro do permitido
verificarVelocidade(80);  //Carteira com 2 pontos
verificarVelocidade(150); //Carteira suspensa com 16 pontos
