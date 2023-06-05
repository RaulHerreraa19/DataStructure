var array = [];
var temp = 0;
var inversions = 0;

// FUNCION PARA GENERAR 10,000 NUMEROS Y GUARDARLOS EN EL ARRAY
function genNumbers() {
  for (var i = 0; i < 10000; i++) {
    var numero = Math.floor(Math.random()*10000 + 1);
     array[i] = numero;
  }
  return array;
}

// METODO BUBBLESORT
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        inversions++;
      }
    } 
  }
  return array;
}


// SE GENERAN LOS NUMEROS
genNumbers();

// METODO BUBBLE SORT

console.time("Tiempo bubbleSort");
bubbleSort(array);
console.log(array);
console.log("El numero de pasos fue: " + inversions);
console.timeEnd("Tiempo bubbleSort");

