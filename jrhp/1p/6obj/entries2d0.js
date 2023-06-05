//
// list entries only
//
const object1 = {}
  object1.one = 'one'
  object1.age = 23
  object1.weigth = 56.9
  object1.sex = true
  object1['nickname']='john doe'

let key = Object.keys(object1)
let value = Object.values(object1)

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}