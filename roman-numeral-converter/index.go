package main

import (
	"fmt"
	"strings"
)

type symbol struct {
  decimal int32
  roman string
}

func convertToRoman(num int32) string {
	symbol := []symbol{
		{ decimal: 1, roman: "I" },
		{ decimal: 4, roman: "IV" },
		{ decimal: 5, roman: "V" },
		{ decimal: 9, roman: "IX" },
		{ decimal: 10, roman: "X" },
		{ decimal: 40, roman: "XL" },
		{ decimal: 50, roman: "L" },
		{ decimal: 90, roman: "XC" },
		{ decimal: 100, roman: "C" },
		{ decimal: 400, roman: "CD" },
		{ decimal: 500, roman: "D" },
		{ decimal: 900, roman: "CM" },
		{ decimal: 1000, roman: "M" },
  }
  roman := []string{}

  for i := len(symbol) - 1; i >= 0; i-- {
    for num >= symbol[i].decimal {
      roman = append(roman, symbol[i].roman)
      num -= symbol[i].decimal
    }
  }

	return strings.Join(roman, "")  
}

func main() {
	fmt.Println(convertToRoman(45))
}
