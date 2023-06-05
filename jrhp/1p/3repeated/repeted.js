let numeros  = [2,4,-1,3,2];
let duplicados = [];
 
let tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
 if (tempArray[i + 1] === tempArray[i]) {
   duplicados.push(tempArray[i]);
  }
  }
 
console.log("se repite el numero " + duplicados); // [2]



