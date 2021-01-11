//DESAFIO OOE

/*  Objetivo: Criar função que calcule o índice OEE de acordo com a máquina escolhida.
    Regras: -Imprimir resultado do OEE e sua classificação.
            -Independente da conceito, caso algum dos indicadores (qualidade, performance ou disponibilidade) esteja abaixo de 75, imprimir a mensagem (exemplo): "O indicador de disponibilidade da máquina Dobradeira está ruim!".

            Classificar conceito conforme resultado do OEE:
                OEE < 50 = Ruim
                OEE >= 50 e <75 = Normal
                OEE >= 75 e < 90 = Bom
                OEE >= 90 = Excelente
*/

//Variáveis
let maquinas = ["Torno", "Fresadora", "Furadeira", "Plasma", "Dobradeira"]
let disponibilidade = [92, 85, 99, 81, 74]
let qualidade = [96, 89, 95, 84, 87]
let performance = [94, 84, 97, 72, 60]
let OEE;
let conceito;
let maquinaExiste;

//Funções
function print(i) {
    console.log(i);
}

function calculoOEE(maquina) {
    OEE = "";
    conceito = "";
    maquinaExiste = false; 
    for (i = 0; i < maquinas.length; i++) {
        if (maquina == maquinas[i]) {
            maquinaExiste = true;
            break;
        }
    }
    //Fórmula  da OEE arredondado sem casas decimais
    OEE = ((disponibilidade[i] * qualidade[i] * performance[i]) / 10000).toFixed(0);
   
    //Classificação dos conceitos
    if (OEE < 50) {
        conceito = "Ruim";
    } else if (OEE < 75) {
        conceito = "Normal";
    } else if (OEE < 90) {
        conceito = "Bom";
    } else {
        conceito = "Ótimo";
    }

    if(maquinaExiste){
        //Verificar se algum indicador está abaixo de 75 e imprimir alerta
        if (disponibilidade[i] < 75) {
            print("O indicador de disponibilidade da máquina " + maquinas[i] +" está ruim!")
        }

        if (qualidade[i] < 75) {
            print("O indicador de qualidade  da máquina " + maquinas[i] + " está ruim!")
        }
        if (performance[i] < 75) {
            print("O indicador de performance da máquina " + maquinas[i] + " está ruim!")
        }
        print("O OEE da máquina " + maquinas[i] + " é " + OEE + " e sua classificação é " + conceito)
    }else{
        print("Maquina não existe.")
    }

}

calculoOEE("Fresadora");
calculoOEE("Furadeira");
calculoOEE("Plasma");
calculoOEE("Dobradeira");
calculoOEE("Torno");
calculoOEE("Britadeira");
calculoOEE(" ");





