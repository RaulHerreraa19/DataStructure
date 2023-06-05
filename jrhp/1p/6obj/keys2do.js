//
//list (both) keys-values pairs
//

const object1 = {}
  object1.one = 'one'
  object1.age = 23
  object1.weigth = 56.9
  object1.sex = true
  object1['nickname']='john doe'


for (const keys of Object.keys(object1))
  console.log(keys);
// Expected output: Array ["somestring", 42, false]