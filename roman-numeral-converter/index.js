function convertToRoman(num) {
  let symbol = [
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
  ];
  let rom = [];

  for (let i = symbol.length - 1; i >= 0; i--) {
    while (num >= symbol[i].decimal) {
      rom.push(symbol[i].roman);
      num -= symbol[i].decimal;
    }
  }

  return rom.join("");
}

console.log(convertToRoman(3549));
