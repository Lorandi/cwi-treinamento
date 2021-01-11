function descontoIR(salarioBruto){
  imposto = 0;
  if(salarioBruto < 1903.99){
    imposto = 0;
  } else if (salarioBruto >= 1903.99 && salarioBruto < 2826.66){
    imposto = (salarioBruto * 0.075) - 142.80;
  } else if (salarioBruto >= 2826.66 && salarioBruto < 3751.07){
    imposto = (salarioBruto * 0.15) - 354.80;
  } else if (salarioBruto >= 3751.07 && salarioBruto < 4664.68){
    imposto = (salarioBruto * 0.225) - 636.13;
  } else if (salarioBruto >= 4664.68){
    imposto = (salarioBruto * 0.275) - 869.36;
  }
  return imposto;
}

function percentualIR(salarioBruto){
  percentual = 0;
  if(salarioBruto < 1903.99){
    percentual = 0;
  } else if (salarioBruto >= 1903.99 && salarioBruto < 2826.66){
    percentual = "7,5";
  } else if (salarioBruto >= 2826.66 && salarioBruto < 3751.07){
    percentual = "15,0";
  } else if (salarioBruto >= 3751.07 && salarioBruto < 4664.68){
    percentual = "22,5";
  } else if (salarioBruto >= 4664.68){
    percentual = "27,5";
  }
  return percentual;
}

function deducaoIR(salarioBruto){
  percentual = 0;
  if(salarioBruto < 1903.99){
    percentual = 0;
  } else if (salarioBruto >= 1903.99 && salarioBruto < 2826.66){
    percentual = "142,80";
  } else if (salarioBruto >= 2826.66 && salarioBruto < 3751.07){
    percentual = "354,80";
  } else if (salarioBruto >= 3751.07 && salarioBruto < 4664.68){
    percentual = "636,13";
  } else if (salarioBruto >= 4664.68){
    percentual = "869,36";
  }
  return percentual;
}

function descontoFullIR(salarioBruto){
  descontoFull = 0;
  if(salarioBruto < 1903.99){
    descontoFull = 0;
  } else if (salarioBruto >= 1903.99 && salarioBruto < 2826.66){
    descontoFull = (salarioBruto * 0.075);
  } else if (salarioBruto >= 2826.66 && salarioBruto < 3751.07){
    descontoFull = (salarioBruto * 0.15);
  } else if (salarioBruto >= 3751.07 && salarioBruto < 4664.68){
    descontoFull = (salarioBruto * 0.225);
  } else if (salarioBruto >= 4664.68){
    descontoFull = (salarioBruto * 0.275);
  }
  return descontoFull;
}

function iNSS(salarioBruto){
  descontoINSS = 0;
  if(salarioBruto < 1045.01){
    descontoINSS = salarioBruto * 0.075;
  } else if (salarioBruto >= 1045.01 && salarioBruto < 2089.61){
    descontoINSS = (salarioBruto * 0.09);
  } else if (salarioBruto >= 2089.61 && salarioBruto < 3134.41){
    descontoINSS = (salarioBruto * 0.12);
  } else if (salarioBruto >= 3134.41){
    descontoINSS = (salarioBruto * 0.14);
  }
  return descontoINSS;
}

function percentualINSS(salarioBruto){
  percentual = 0;
  if(salarioBruto < 1045.01){
    percentual = "7,5";
  } else if (salarioBruto >= 1045.01 && salarioBruto < 2089.61){
    percentual = "9,0";
  } else if (salarioBruto >= 2089.61 && salarioBruto < 3134.41){
    percentual = "12,0";
  } else if (salarioBruto >= 3134.41){
    percentual = "14,0";
  }
  return percentual;
}

function imprime(valorHora, cargaHoraria){
  salarioBruto = valorHora * cargaHoraria;
  console.log("Salário Bruto: (R$ " + valorHora.toFixed(2) + " X " + Math.floor(cargaHoraria) + "h) = R$ " + salarioBruto.toFixed(2));
  console.log("(-) IR (" + percentualIR(salarioBruto) + "%): (R$ " + descontoFullIR(salarioBruto) + " - R$ " + deducaoIR(salarioBruto) + " (Parcela a deduzir do IRPF)) = R$ " + descontoIR(salarioBruto).toFixed(2));
  console.log("(-) INSS (" + percentualINSS(salarioBruto) + "%): R$ " + iNSS(salarioBruto).toFixed(2));
  console.log("FGTS (11%): R$ " + (salarioBruto * 0.11).toFixed(2));
  console.log("Total de Descontos: R$ " + (descontoIR(salarioBruto) + iNSS(salarioBruto)).toFixed(2));
  console.log("Salário Líquido: R$ " + (salarioBruto - (descontoIR(salarioBruto) + iNSS(salarioBruto))).toFixed(2));
}

imprime(47,44)
imprime(40,60)
imprime(30,20)