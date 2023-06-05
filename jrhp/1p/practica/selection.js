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
  
  
  // METODO SELECTIONSORT
  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min !== i) {
        temp = array[min];
        array[min] = array[i];
        array[i] = temp;
        inversions++;
      }
    }
    return array;
  }
  
  // SE GENERAN LOS NUMEROS
  genNumbers();
  
  
  
  // METODO SELECTION SORT
  console.time("Tiempo selectionSort");
  console.log(selectionSort(array));
  console.timeEnd("Tiempo selectionSort");
  console.log("El numero de pasos fue: " + inversions);
  
  