console.log(["baz", ...[]])

const length = ([first, ...rest]) =>
      first === undefined ? 0 : 1 + length(rest);

console.log("Length of empty array is " + length([]));
console.log("Length of [foo] is " + length(["foo"]));
console.log("Length of [foo, bar, baz] is " + length(["foo", "bar", "baz"]));
