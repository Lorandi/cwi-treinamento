function diagonalDifference(arr) {
    var tamanho = arr[0].length;
    var i=0;
    var j=0;
    var d1=0;
    var d2=0;
    var resultado = 0;    
    for(i=0;i<tamanho;i++){
        for(j=0 ; j<tamanho ; j++){            
            if(i==j){           
              d1 += arr[i][j];
            }
            if(i+j==(tamanho-1)){
              d2 += arr[i][j];
            } 
            }
        } 
    resultado = d1-d2;      

    return console.log(Math.abs(resultado));
}

ar = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

diagonalDifference(ar);


