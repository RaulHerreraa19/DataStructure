let map = new Map()
map.set(1,"one");
map.set(2, "two");
map.set(3, "three");
const iterator1 = map.entries();

for (const entry of iterator1) 
  console.log(entry)