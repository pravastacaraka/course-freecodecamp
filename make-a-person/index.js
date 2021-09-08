var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function () {
    return firstAndLast;
  };
  this.setFirstName = function (first) {
    firstAndLast = first + " " + this.getLastName();
  };
  this.setLastName = function (last) {
    firstAndLast = this.getFirstName() + " " + last;
  };
  this.setFullName = function (newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
};

var bob = new Person("Bob Ross");
bob.setFullName("Haskel Curry");
console.log(bob.getFullName());
