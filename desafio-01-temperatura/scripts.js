// Desafio extra 01

//Conversão de temperaturas
//Variáveis
let celsius;
let fahrenheit;

//Funções
function print(i){
    console.log(i);
    console.log((""))
}

function celsiusFahrenheit(celcius) { //Transformar temperatura de Celsius para Fahrenheit
    print(celcius + "°C são " + ((celcius*9/5) + 32).toFixed(1) + "°F")  
}

function fahrenheitCelsius(fahrenheit) { //Transformar temperatura de Fahrenheit para Celsius
    print(fahrenheit + "°F são " + ((fahrenheit -  32) *5/9 ).toFixed(1) + "°C")  
}

//Testes
celsiusFahrenheit(0);  //0°C são 32°F
celsiusFahrenheit(20); //20°C são 68°F
celsiusFahrenheit(40); //40°C são 104°F 

fahrenheitCelsius(50); //50°F são 10°C
fahrenheitCelsius(80); //80°F são 27°C
fahrenheitCelsius(110); //110°F são 43°C

