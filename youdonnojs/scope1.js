function foo(a) {
  var b = a; // LHS and LHS
  return a + b; // RHS and RHS
}

var c = foo(2); // LHS (c, setting a to 2) and RHS
