# Why do we use functions in JavaScript?
 functions are an essential part of JavaScript and are used to improve the organization, maintainability, and testability of code, to handle asynchronous code and to create closures. Functions are a powerful tool that allows developers to create reusable and modular code, which makes it easier to understand and maintain.

 # What is Function Invocation?
 Function invocation, also known as function calling or function execution, is the process of executing a function in JavaScript. When a function is invoked, the code inside the function is executed, and any return value is returned to the point of invocation.
# Does a function behave like an object in Javascript? Prove it by an example
 Yes, a function in JavaScript behaves like an object in many ways. A function is a first-class citizen in JavaScript, which means that it can be treated like any other data type, such as a string or a number.
 function myFunction() {
    console.log("I am a function");
}
let myFunctionVariable = myFunction;
console.log(myFunctionVariable());
# What are Events in Javascript?
In JavaScript, events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or loading a page. Events are an important part of JavaScript because they allow developers to create interactive and dynamic web pages by responding to user actions and other browser-generated events.

JavaScript provides a way to register event listeners on elements, which are functions that are executed in response to a specific event. For example, you can use the addEventListener() method to attach an event listener to a button element that will be executed when the button is clicked

# What is a string?
Strings can be defined in two ways in JavaScript:

Using single quotes: 'Hello World'
Using double quotes: "Hello World"

# What is an array? Is it static or dynamic in Javascript?
In JavaScript, an array is a special type of object that can hold multiple values, such as numbers, strings, or other objects. Arrays are indexed, which means that each element in the array has a numerical position, starting from 0. You can access and manipulate the elements in an array by using their index.

JavaScript arrays are dynamic in nature, which means that you can add or remove elements from an array after it has been created. You can use the push() method to add an element to the end of an array and the pop() method to remove the last element of an array. Or you can use the shift() method to remove the first element of an array and unshift() method to add an element to the beginning of an array.
# Difference between Map and Set?
Map: A Map is a collection of key-value pairs, where each key is unique. You can use any type of value (primitive or object) as a key or value in a Map. Maps are useful when you need to store data that you need to look up by a unique key.
Set: A Set is a collection of unique values. You can store any type of value in a Set, and each value can only appear once in the Set. Sets are useful when you need to store data that you need to look up by its value.
# Difference between Array and Map?
Array: An Array is a collection of elements, where each element is stored at a specific index. The index is a numerical value that starts at 0. Arrays are useful when you need to store a collection of items and you don't need to look up items by a key.

Map: A Map is a collection of key-value pairs, where each key is unique. You can use any type of value (primitive or object) as a key or value in a Map. Maps are useful when you need to store data that you need to look up by a unique key.

# What are array methods? List a few names?

In JavaScript, arrays have a built-in set of methods that allow you to manipulate and work with the elements in the array. Some of the most commonly used array methods include:
push() - Adds an element to the end of an array.
pop() - Removes the last element from an array.
shift() - Removes the first element from an array.
unshift() - Adds an element to the beginning of an array. etc

# In how many ways can we traverse through an array in Javascript?
 for loop,while loop,map,reduce,foreach.

 # Reverse an array? Input: [1, 2, 3, 4, 5, 6]
 let arr= [1, 2, 3, 4, 5, 6]

arr.reverse()
console.log(arr)
#  Explain the properties of the join array method function via program?

let myArray = [1, 2, 3, 4, 5];
let myString = myArray.join();
console.log(myString); // Output: "1,2,3,4,5"

# Show all the values of an array in a html webpage using DOM and forEach method?


<!DOCTYPE html>
<html>
  <body>
    <ul id="myList"></ul>
    <script>
      let myArray = [1, 2, 3, 4, 5];
      let list = document.getElementById("myList");
      
      myArray.forEach(function(element) {
        let listItem = document.createElement("li");
        listItem.innerHTML = element;
        list.appendChild(listItem);
      });
    </script>
  </body>
</html>

# Merge to sets in javascript? (hint use Set class in javascript)

let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 5, 6]);
let mergeSet = new Set([...set1, ...set2]);
console.log(mergeSet); // Output: Set {1, 2, 3, 4, 5, 6}







