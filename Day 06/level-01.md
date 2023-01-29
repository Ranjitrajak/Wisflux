# What isJavaScript?
JavaScript is a  synchronous, blocking, single-threaded,interpreted  language. That just means that only one operation can be in progress at a time.
# What is thedifferencebetween b/wletandvar?
let-Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}).It can be updated but cannot be re-declared into the scope.If users use the let variable before the declaration, it does not initialize with undefined just like a var variable and return an error.
 var-Scope: Global scoped or function scoped.It can be updated and
re-declared into the scope. If users use the var variable before the declaration, it initializes with the undefined value.
# Why do we prefer const over var?
we can redeclear and update var but in case of const that is not possible.
# What is the use of javascript inweb browsers?
JavaScript is a programming language that is primarily used to create interactive and dynamic websites. It allows developers to add functionality to web pages such as creating animations, handling user input, and creating responsive designs. JavaScript can also be used to make web pages more interactive by updating content without requiring the user to refresh the page.
# What areObjects?
In JavaScript, an object is a collection of properties and methods. Properties are variables that store data, and methods are functions that perform actions. Objects are used to organize and structure code.
# What is an array and how is itdifferentfrom anObjectin Javascript?
In JavaScript, an array is a special type of object that is used to store a collection of values. Each value in an array is called an element, and each element can be accessed by its index, which is an integer that starts at 0 for the first element.
On the other hand, an object is a collection of properties and methods, where each property has a name and a value, and each method is a function that performs an action. 
# What is afunction?
In JavaScript, a function is a block of code that can be executed when it is called. A function can take zero or more input values, called arguments, and can return a value or not. Functions are used to organize and structure code, and to perform specific tasks or actions.
# How can we implementcall by value and call by referencein Javascript?
In JavaScript, function arguments are passed by value, which means that when a function is called, the value of the argument is passed to the function, rather than a reference to the argument. This means that any changes made to the argument within the function will not affect the original value outside of the function.
However, when it comes to objects, arrays and functions, when you pass them as an argument to a function, you are passing a reference to the object, array or function rather than the value.
# What are theprimitive data typesin Javascript?
String: a sequence of characters, such as "Hello World" or 'Hello World'
Number: a numeric value, such as 42 or 3.14
Boolean: a logical value that can be either true or false
Undefined: a value that represents the absence of a value or a variable that has been declared but not yet assigned a value
Symbol: a unique and immutable data type introduced in ECMAScript 6, used to create unique object keys
BigInt : A new data type introduced in ECMAScript 2020, used to represent integers with arbitrary precision.

# What isDOM?
DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document.
# Why do we needDOM?


Dynamic web page: The DOM allows developers to change the content, layout, and style of a web page in response to user interactions, such as clicks and form submissions, without having to refresh the page.

Accessibility: The DOM allows developers to create web pages that are accessible to users with disabilities by providing a programmatic way to navigate and interact with the content of a web page.

Compatibility: The DOM provides a consistent and standard way for web browsers to represent and manipulate web pages, which enables web developers to create cross-browser compatible web pages.

Reusability: The DOM allows developers to create reusable code, such as libraries and frameworks, that can be used to create complex web pages and web-based applications.

Search Engine Optimization: The DOM allows developers to create web pages that are optimized for search engines by providing a way to access and manipulate the content and structure of a web page in a way that is easily understood by search engines.

## Program
# Average of array nums in Javascript?

let nums = [1, 4, 5, 6, 8, 10];
let sum = nums.reduce((acc, val) => acc + val, 0);
let average = sum / nums.length;
console.log(average);
# Swap two numbers by reference ?
let a = 5;
let b = 10;
// Using destructuring
[a, b] = [b, a];
console.log(a); 
console.log(b);
# Print the fibonacci sequence?
 function fibo(n){

  if(n<=1) return n
  return fibo(n-1)+fibo(n-2)

 }
 console.log(fibo(6))
 # Sort an array by both ascending and descending order?
 let nums = [1, 4, 5, 6, 8, 10];
 nums.sort()
 console.log(nums)
 nums.sort((a,b)=>b-a)
 # how a variable value in an HTML webpage using DOM?
 let element = document.getElementById("elementId");
 element.value = "newValue";
 element.textContent = "newValue";
 element.innerHTML = "newValue";



