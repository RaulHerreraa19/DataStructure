let d = [3, 2, 1, 3]
let n = [3, 2, 1, 4]

let hasDuplicates  = g => {
    let k = 0
    for (let r = 0; r < g.length-1; r++)
        for (let c = 0; c < g.length; c++, k++){
            console.log(r,c)
            if (r!==c && g[r] === g[c]){
                console.log(k)
                return true
            }
        }
    console.log(--k)
    return false
}

console.log('d',hasDuplicates(d))
console.log('h',hasDuplicates(n))
