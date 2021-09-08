package main

import (
	"fmt"
	"regexp"
	"strings"
)

func palindromeChecker(str string) bool {
	// Remove all non-alphanumeric characters (punctuation, spaces and symbols)
	// and turn everything into the same case (lower or upper case)
	formatRegex := regexp.MustCompile(`[^a-zA-Z0-9]`)
  str = strings.ToLower(formatRegex.ReplaceAllLiteralString(str, ""))
	
	if (len(str) <= 1) {
	  return true;
	}
	if (len(str) == 2) {
	  return str[0] == str[1];
	}

	// if str[0] === str[len(str) - 1] {
	//   return palindromeChecker(str[1 : len(str) - 1]);
	// }

	for i := 0; i < len(str) / 2; i++ {
	  if str[i] != str[len(str) - 1 - i] {
		  return false;
	  }
	}

	return true;
}
 
func main () {
	fmt.Println(palindromeChecker("A man, a plan, a canal. Panama"));
}
