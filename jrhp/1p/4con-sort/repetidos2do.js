let a=[4,3,-1,3],cont=0;
a = a.sort();
console.log(a);
for(let r=0; r<=a.length-1; r++){
  console.log(r);
  if(a[r]==a[r+1]){
    cont+=1;
  }
}
if(cont==0)
  console.log("No hay numeros repetidos");
else
  console.log("Hay "+cont+" numeros repetidos");