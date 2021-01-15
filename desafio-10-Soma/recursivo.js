function somaDigitos(n){   
  while(n>10){
    n = n % 10 +somaDigitos(Math.floor(n/10));
    somaDigitos(n)
  }    
  return n;  
}

console.log(somaDigitos(2)); //2
console.log(somaDigitos(2351)); //2
console.log(somaDigitos(7992312398)) //8
console.log(somaDigitos(123456789)) //9
console.log(somaDigitos(9999999999999)) //9