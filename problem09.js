// Problem 09:

// Define the Node
class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

function sum(node) {
    if (!node) return 0; // Base case: return 0 for null or undefined nodes
    
    // Add current node's value
    let total = node.value;
    
    // Recursively add values from children nodes
    for (let child of node.children) {
        total += sum(child);
    }
    
    return total;
}

// Construct a tree
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node1.children.push(node2, node3, node4);
node3.children.push(node5, node6);
node5.children.push(node7);

// Calculate the sum of values in the tree starting from node1
console.log(sum(node1)); // Output: 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)


// Time Complexity:  O(n) as The function: sum(node) will visit every node once, resulting in a time complexity of O(n).