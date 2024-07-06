// Problem 05

function unique(array) {
    // Count occurrences of each string
    let countMap = new Map();
    array.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });

    // Filter out strings that appear more than once
    let uniqueArray = array.filter(item => countMap.get(item) === 1);

    return uniqueArray;
}

console.log(unique(['apples', 'oranges', 'flowers', 'apples'])); // Output: ['oranges', 'flowers']
console.log(unique(['apples', 'apples'])); // Output: []

// Time Complexity: O(n) because we perform two separate O(n) operations (one for counting and one for filtering)
