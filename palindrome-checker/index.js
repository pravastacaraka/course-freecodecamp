function palindromeChecker(str) {
  // Remove all non-alphanumeric characters (punctuation, spaces and symbols)
  // and turn everything into the same case (lower or upper case)
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the string is palindrome
  // return str === str.split("").reverse().join("");

  if (str.length <= 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }

  // if (str[0] === str[str.length - 1]) {
  //   console.log(str.slice(1, str.length - 1));
  //   return palindromeChecker(str.slice(1, str.length - 1));
  // }

  for (let i = 0; i < str.length / 2; i++) {
    // console.log(str[i], str[str.length - 1 - i]);
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeChecker("A man, a plan, a canal. Panama"));
