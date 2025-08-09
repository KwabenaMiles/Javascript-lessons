// rest parameter = (...rest) allow a function work with a variable
//                  number of arguments by bunding them into an array
//                  spread = expand an array in sperate
//                  rest = bundles sperate elements into an array.

// 1. Sum all numbers
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 2. Join strings
function joinStrings(separator, ...strings) {
  return strings.join(separator);
}
console.log(joinStrings("-", "a", "b", "c")); // a-b-c

// 3. Collect arguments after the first
function firstAndRest(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
firstAndRest(1, 2, 3, 4); // First: 1, Rest: [2,3,4]

// 4. Find the maximum
function max(...nums) {
  return Math.max(...nums);
}
console.log(max(5, 10, 2, 8)); // 10

// 5. Push multiple items to an array
function pushAll(arr, ...items) {
  arr.push(...items);
  return arr;
}
console.log(pushAll([1, 2], 3, 4, 5)); // [1,2,3,4,5]

// 6. Filter numbers greater than a value
function filterGreaterThan(threshold, ...nums) {
  return nums.filter((n) => n > threshold);
}
console.log(filterGreaterThan(3, 1, 4, 2, 5)); // [4,5]

// 7. Merge multiple arrays
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5])); // [1,2,3,4,5]

// 8. Log all arguments
function logAll(...args) {
  args.forEach((arg) => console.log(arg));
}
logAll("a", 1, true, null);

// 9. Destructure with rest
const [first, ...others] = [10, 20, 30, 40];
console.log(first); // 10
console.log(others); // [20,30,40]

// 10. Rest in arrow function
const multiplyAll = (...nums) => nums.reduce((a, b) => a * b, 1);
console.log(multiplyAll(2, 3, 4)); // 24
