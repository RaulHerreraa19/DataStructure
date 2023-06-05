//
// gcd-sol.js
//

function gcd(a, b) {
  let k=0
  let r = 0
  while (a > 0) {
    if (a < b) {
      r = a
      a = b
      b = r
    }
    k++
    a -= b//a=a-b
  }
  console.log('it took:',k,'steps')
  return b
}

console.time('it took')
console.log('gcd =',gcd(1, 1000))//1
console.timeEnd('it took')