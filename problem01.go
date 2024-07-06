// Problem 01: Check palindrome implemented with Go:

package main

import "fmt"

func main() {
	fmt.Println(polindrom("naan"))
}

func polindrom(str string) bool {
	length := len(str)
	for i := 0; i < length; i++ {
		x := length - 1 - i
		if str[i] != str[x] {
			return false
		}
	}
	return true
}

// Go playground src Link: https://go.dev/play/p/dWC21winHZX

// Time Complexity: O(n) where n is the length of the input string
