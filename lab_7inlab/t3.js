function checkScope() {
  if (true) {
    var x = 10;
    let y = 20;
  }

  //prediction: it will print 10 as var scope is not limited to the block
  //actual: 10
  console.log(x);

  //prediction:error, y does not exist outside the if block
  //Actual: Error: y is not defined
  try {
    console.log(y);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

checkScope();
//prediction: undefined no error, because of hoisting
//actual: undefined
console.log(a);
var a = 5;

// Prediction: error (let cannot be used before its declaration line)
//Error: Cannot access 'b' before initialization
try {
  console.log(b);
} catch (error) {
  console.log("Error: " + error.message);
}
let b = 5;

// var is function scoped, so x is visible anywhere inside checkScope(), while
// let is block scoped, so y exists only inside  the if block.
// Both are hoisted to the top of their scope, but var is set to undefined
// straight away (so reading it early gives undefined), while let stays
// unusable until its declaration line runs (so reading it early gives an error).