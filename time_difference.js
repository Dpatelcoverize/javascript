let start = Date.now();

for(let i=0; i < 1000000; i ++){}
let end = Date.now();

console.log("Time take: " + (end - start) + " ms");