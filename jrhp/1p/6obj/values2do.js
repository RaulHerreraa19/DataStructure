


const object1 = {}
  object1.one = 'one'
  object1.age = 23
  object1.weigth = 56.9
  object1.sex = true
  object1['nickname']='john doe'


for (const values of Object.values(object1))
  console.log(values);
// Expected output: Array ["somestring", 42, false]