function doSomething(a) {
  // hidden function
  function doSomethingElse(a) {
    return a-1;
  }

  // hidden variable
  var b;
  b = a + doSomethingElse(a*2);
  console.log((b*3));
}

doSomething(2);
