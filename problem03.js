// Problem 03:

function runLengthEncode(input) {
    if (input.length === 0) return "";

    let encoded = "";
    let count = 1;
    let prevChar = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] === prevChar) {
            count++;
        } else {
            encoded += prevChar + count;
            prevChar = input[i];
            count = 1;
        }
    }
    encoded += prevChar + count;

    return encoded;
}

function runLengthDecode(encoded) {
    if (encoded.length === 0) return "";

    let decoded = "";
    let i = 0;

    while (i < encoded.length) {
        let char = encoded[i++];
        let countStr = "";

        while (i < encoded.length && !isNaN(encoded[i])) {
            countStr += encoded[i++];
        }

        let count = parseInt(countStr, 10);
        decoded += char.repeat(count);
    }

    return decoded;
}

// Example usage
let input = "aaaaaaaaaabbbaxxxxyyyzyx";
let encoded = runLengthEncode(input);
let decoded = runLengthDecode(encoded);

console.log("Encoded:", encoded); // Output: "a10b3a1x4y3z1y1x1"
console.log("Decoded:", decoded); // Output: "aaaaaaaaaabbbaxxxxyyyzyx"

// Time complexity of runLengthEncode is O(n) where n is the length of the input string as the function iterates over each character in the input string exactly once
// Time complexity of runLengthEncode is O(m) where m is the length of the input string as the function also iterates over each character in the encoded string exactly once