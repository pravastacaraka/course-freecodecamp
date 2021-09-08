function addTogether() {
  if (![...arguments].every((arg) => typeof arg === "number")) {
    return undefined;
  }
  return !arguments[1]
    ? (newArg) => addTogether(arguments[0], newArg)
    : arguments[0] + arguments[1];
}

console.log(addTogether(7));
