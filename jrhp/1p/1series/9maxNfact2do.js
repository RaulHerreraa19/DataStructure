//
// imprimir el limite de una variable con factorial
//

// Definimos la función para calcular el factorial
function factorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++){
    resultado *= i;
  }
  return resultado;
}


let viejo = 0;
let nuevo = 0; 
for(let i = 1; i<40; i++){
  factorial(i)

  viejo = factorial(i+1)
  nuevo = viejo
  if(nuevo < viejo){
    console.log('nuevo: ' + nuevo);
    console.log('viejo: ' + viejo);
  
  console.log(true);
  }
  else{
    console.log(false);
  }

} 



































