// Variable scope = where a variable is accessible
//                 and recongnized (local vs global)

let x = 3; // Any variable decleared outside of a function has a local scope.

function function1() {
  let x = 1; // Any variable decleared inside of a function has a local scope.
  console.log(x);
}

function function2() {
  let x = 2; // Any variable decleared inside of a function has a local scope.
  console.log(x);
}
