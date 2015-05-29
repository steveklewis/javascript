global.a = 2;
var a = 2;

(function IIFE_invokeoutside() {
  var a = 3;
  console.log(a);
})();

(function IIFE_invokeinside() {
  var a = 4;
  console.log(a);
}());

(function IIFE_argument(global) {
  var a = 3;
  console.log(a);
  console.log(global.a);
})(global);


console.log(a);
