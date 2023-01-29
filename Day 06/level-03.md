# 2.Read the code :// This is an object based vector templatevar vector = {_x: 0,_y: 0,create: function(x,y){var obj = Object.create(this);obj.setX(x);obj.setY(y);return obj;},}Can you make a “class” based alternative to it? Using Javascript OOP features.

class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  setX(x) {
    this._x = x;
  }
  setY(y) {
    this._y = y;
  }
}
let myVector = new Vector(1, 2);
# Do you think javascript is the language of the future?
JavaScript is a widely-used programming language and has a large developer community. It is a versatile language that can be used for both front-end and back-end development, and its popularity is only increasing with the rise of web technologies and frameworks such as React, Angular, and Node.js.
it's hard to predict which language will be the most widely used in the future. However, JavaScript's popularity and versatility make it a strong candidate to continue being a widely-used language in the future.
# Write code implementations of arr methods -a.forEachb.mapc.filterd.reducee.includesf.someg.every

let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
  console.log(element);
});

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(function(element) {
  return element * 2;
});
console.log(newArr); // [2, 4, 6, 8, 10]
let arr = [1, 2, 3, 4, 5];

let filteredArr = arr.filter(function(element) {
  return element > 3;
});
console.log(filteredArr); // [4, 5]

let arr = [1, 2, 3, 4, 5];
let total = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total); // 15

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

let arr = [1, 2, 3, 4, 5];
console.log(arr.some(function(element) {
  return element > 3;
})); // true
console.log(arr.some(function(element) {
  return element > 5;
})); // false

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

# To do list task?
var todo = [];
var completed = [];

function add(title) {
  todo.push({id: todo.length, title: title});
}

function remove(id) {
  todo = todo.filter(function(item) {
    return item.id !== id;
  });
}

function update(id, title) {
  todo.forEach(function(item) {
    if (item.id === id) {
      item.title = title;
    }
  });
}

function markAsCompleted(id) {
  var completedItem;
  todo = todo.filter(function(item) {
    if (item.id === id) {
      completedItem = item;
      return false;
    }
    return true;
  });
  completed.push(completedItem);
}


