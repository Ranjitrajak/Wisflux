# What are the basic data types in TypeScript?
The basic data types in TypeScript are:

Number
String
Boolean
Array
Tuple
Enum
Any
Void
Null and Undefined
Never
Object

# What is Generic data type?
A generic data type in TypeScript is a way to create a reusable component that can work with any data type. It allows you to create a single function, class, or interface that can work with multiple data types, rather than having to create a separate version of the component for each data type.
function identity<T>(arg: T): T {
    return arg;
}

# What is type inferring in TS?
Type inferring in TypeScript is the process by which the TypeScript compiler automatically determines the data type of a variable or expression based on the value that it is assigned. This allows you to write code without explicitly specifying the data type of every variable, and instead rely on the compiler to infer the types based on the values that you assign.
# What are the possible ways to define typing for functions.
Implicit typing: This is the simplest way to define typing for functions. The TypeScript compiler will infer the types of the function's parameters and return value based on the values that you pass in and return. 

Explicit typing: You can also explicitly specify the types of the function's parameters and return value. This can be useful for complex functions, or when you want to be more explicit about the types that your function expects and returns
function add(a: number, b: number): number {
    return a + b;
}
Arrow function with explicit typing:let add = (a: number, b: number) => a + b;

Function interface: you can also define a function interface with explicit typing, then use that interface to define a function.
interface AddFunc {
  (a: number, b: number): number;
}
let add: AddFunc = (a, b) => a + b;
# How to define Generic type for Classes.
class MyGenericClass<T> {
    value: T;
    getValue(): T {
        return this.value;
    }
    setValue(value: T) {
        this.value = value;
    }
}
let myNumber = new MyGenericClass<number>();
myNumber.setValue(10);
console.log(myNumber.getValue()); // 10
let myString = new MyGenericClass<string>();
myString.setValue("hello");
console.log(myString.getValue()); // "hello"

# Program

interface Todo {
    name: string;
    description: string;
    done: boolean;
}

let todos: Todo[] = [];

function add(name: string, description: string): any {
    return todos.push({ name: name, description: description, done: false });
}

function remove(index: number): Todo[] {
    return todos.splice(index, 1);
}

function list(): void {
    todos.forEach(function (todo, index) {
        console.log(index + " -" + todo.name);
    });
}

function update(index: number, name: string, description: string): Todo {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}
