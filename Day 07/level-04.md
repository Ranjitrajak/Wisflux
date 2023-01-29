# What are anonymous functions in JavaScript?
In JavaScript, an anonymous function is a function that is defined without a name. Anonymous functions are often used as callback functions . They can be assigned to a variable, or passed as an argument to a function, but since they do not have a name, they cannot be invoked by name.
# Explain strict comparison and Abstract comparison in javascript?
In JavaScript, there are two types of comparison operators: strict comparison (=== and !==) and abstract comparison (== and !=).

Strict comparison (=== and !==) compares both the value and the type of the operands. It will only return true if the operands have the same value and the same type.
Abstract comparison (== and !=) compares the values of the operands after attempting to convert them to the same type. It will return true if the operands have the same value, regardless of their type.
# Difference b/w arrow functions and regular functions?
Syntax: Arrow functions have a shorter and more concise syntax than regular functions. 
prototype property : Arrow functions do not have a prototype property

call(), apply() and bind() methods : Arrow functions cannot be bound with call(), apply() and bind() methods.

# What is Hoisting in JavaScript?
Hoisting is JS’s default behavior of defining all the declarations at the top of the scope before code execution.
# JavaScript is a garbage collected programming language, explain how?
JavaScript is a garbage-collected programming language, which means that it automatically manages the memory used by the program.

When a variable or object is no longer needed, the JavaScript runtime automatically releases the memory that was allocated for it. This process is called garbage collection.

JavaScript's garbage collection is based on a technique called reference counting. Each object in JavaScript has a reference count, which is a number that represents the number of references to that object. When an object's reference count drops to zero, the object is considered garbage and is eligible for collection.

The garbage collector periodically runs and checks for objects that have a reference count of zero. It then frees up the memory used by those objects and makes it available for other objects. This process happens automatically and in the background, so the programmer does not need to worry about manually freeing up memory.

However, it's essential to understand that, Garbage collection can cause performance issues if there is a lot of memory usage or if the garbage collector runs frequently. This can happen if there are too many objects, too many circular references, or if the garbage collector is not optimized for the specific JavaScript engine being used.

It's important to keep in mind that JavaScript garbage collection is not deterministic, which means that the garbage collector runs whenever it sees fit, and as such, it may run at unexpected times and cause performance issues.



# Explain Shallow copy vs Deep copy in Javascript?
A shallow copy is a copy of the object where nested objects are still references to the original objects. This means that any changes made to the nested objects in the copy will also affect the original objects, and vice versa.
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);

A deep copy, on the other hand, creates a new instance of the entire object, including all nested objects. This means that any changes made to the nested objects in the copy will not affect the original objects.
let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 3;
console.log(original.b.c);

# What is Object.freeze

Object.freeze() is a method in JavaScript that is used to make an object immutable. When an object is frozen, it cannot be modified in any way, including adding, modifying, or deleting properties.

Once an object is frozen, any attempts to change its properties will have no effect. The object will remain in its frozen state and its properties will retain their original values.

let obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3; 
console.log(obj.a); // 1

It's important to note that Object.freeze() only makes the top-level properties of an object immutable. If an object contains nested objects, those objects are not frozen and can still be modified.
let obj = { a: 1, b: { c: 2 } };
Object.freeze(obj);
obj.b.c = 3;
console.log(obj.b.c); // 3

# Write a function that generates a random number between two ranges, -100 to 0 and800 - 900


function generateRandomNumber(range1, range2) {
  return Math.floor(Math.random() * (range2 - range1 + 1) + range1);
}

console.log(generateRandomNumber(-100, 0)); 
console.log(generateRandomNumber(800, 900));