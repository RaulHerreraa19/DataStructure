//generar 10 numeros aleatorios y agregar al map e imprimirlo

const map = new Map();
for(let i = 1; i<= 10; i++){
  let num; 
  num = Math.random();
  num = 1 + num * 10;
  num = Math.floor(num);
  map.set(i, num);
}
  const iterator1 = map.values();
console.log(map);