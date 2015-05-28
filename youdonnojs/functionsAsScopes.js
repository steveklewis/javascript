var a = 2;

(function foo() { // function expression
  var a = 3;
  console.log("inside func expr " + a);
})();

console.log("outside func expr " + a);
