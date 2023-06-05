 //
// generate 10 random names
//


//Crear objeto donde almacenaremos los 10 nombres
let object1 = {}
let r;
//Generamos un ciclo for para generar los 10 nombres y los agregamos al object.
for ( let i = 0; i<10; i++){
  r = Math.floor(Math.random()*10+1);
  object1[r]='name'
}
console.log(object1);