function sum(a, b) {
    return a + b;
}

function wrapper(func) {
    return function(...args) {
        return func(...args);
    };
}

let result = wrapper(sum);

console.log(result(5, 10));