var assert = require('assert')

function foo(a) {

   var b = 2;
   function bar() {
   }

   var c = 3;
}

try {
   bar();
} catch (e) {
   if (!(e instanceof ReferenceError)) {
      assert.fail("We wanted a ReferenceError!");
   }
}

try {
  console.log(a);
} catch (e) {
  if (!(e instanceof ReferenceError)) {
      assert.fail("We wanted a ReferenceError!");
   }
}

