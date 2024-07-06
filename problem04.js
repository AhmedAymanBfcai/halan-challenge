// Problem 04

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

function inc(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

var h = compose(square, inc);

console.log(h(6)); // Output: 49 (square(inc(6)))


// ime Complexity: O(1). because each function call (inc, square) and the composition operation (f(g(x))) are constant-time operations.
