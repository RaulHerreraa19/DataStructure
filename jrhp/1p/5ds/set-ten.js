//generar 10 numeros aleatorios y agregar al set e imprimir


let array = [];
let a;

for (let i = 0; i < 10; i++) {
  a = Math.random() * 10;
  a = Math.floor(a);
  array.push(a);
}
console.log(array);
console.log([...new Set(array)]);
