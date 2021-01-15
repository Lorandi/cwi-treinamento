function somaDigitos(num){
    let soma=0;
    number = num.toString();
    if(number.length==1){
      return soma = parseInt(number.charAt(0));
    }else{
        for(i=0;i<number.length;i++){
          soma += parseInt(number.charAt(i));
         }

         if (soma <= 9){
            return soma;
         }
         else{
             do{
                 somaTemp = 0;
                 somaString = soma.toString()
                 for(i=0; i < somaString.length; i++){                
                    somaTemp += parseInt(somaString[i])
                }
                somaString = somaTemp.toString();
            }while(somaTemp>9)
            soma = somaTemp;
            return soma;                           
        }  
      }
  }
console.log(somaDigitos(2)); //2
console.log(somaDigitos(2351)); //2
console.log(somaDigitos(7992312398)) //8
console.log(somaDigitos(123456789)) //9