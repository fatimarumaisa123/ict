const cart = ["Shoes", "Shirt", "Watch"];
let backup = cart;
backup.push("Bag");
console.log("cart:", cart);     
console.log("backup:", backup); 

let a = 10;
let b = a;
b = 50;
console.log("a =", a); 
console.log("b =", b); 
// Numbers are primitive types the variable stores the value itself. When I
// wrote let b = a, the value 10 was copied into a separate memory location
// for b, so changing b didnot affect a.
// Arrays are reference types the variable does not hold the items, it holds
// a reference basically an address to where the array lives in memory. When I
// wrote let backup = cart, only that reference was copied so cart and
// backup point to the same memory location, which is the same array.
// Pushing a new item through backup changed that one shared array, so cart
// showed the change too.

backup = [...cart];
backup.push("Hat");
console.log("cart after real copy:", cart);    
console.log("backup after real copy:", backup); 