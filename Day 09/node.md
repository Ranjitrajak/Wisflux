# What is Node.js?
Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.
# What is V8 Engine?
V8 is a JavaScript engine developed by Google for use in their Chrome web browser. It is designed to improve the performance of web applications by compiling JavaScript code into machine code, instead of interpreting it on the fly. V8 is open-source software and is also used in other projects such as the Node.js JavaScript runtime.
# What is Event Loop in NodeJS?
An event loop is an event-listener which functions inside the NodeJS environment and is always ready to listen, process, and output for an event. By the use of event loop node.js perform non-bolcking i/o operation.
The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack
# What is the use of tsconfig.json file?

The options in the tsconfig.json file can be used to specify the location of the TypeScript files to be compiled, the target JavaScript version, and various other settings such as whether to emit declarations, noImplicitAny and many more. It also includes the path of declaration files and JS files.

# What are the methods provided by `fs` module to manipulate files?
The fs (File System) module, which is a built-in Node.js module, provides a variety of methods for manipulating files on the file system. Some of the most commonly used methods include:

fs.readFile(path[, options], callback): Asynchronously reads the entire contents of a file.

fs.writeFile(file, data[, options], callback): Asynchronously writes data to a file, replacing the file if it already exists.

fs.appendFile(file, data[, options], callback): Asynchronously appends data to a file, creating the file if it does not exist.

fs.readdir(path[, options], callback): Asynchronously reads the contents of a directory.

fs.mkdir(path[, options], callback): Asynchronously creates a new directory.

fs.rmdir(path[, options], callback): Asynchronously removes a directory.

fs.unlink(path, callback): Asynchronously deletes a file.

fs.rename(oldPath, newPath, callback): Asynchronously renames a file or directory.

fs.access(path[, mode], callback): Asynchronously tests a user's permissions for the file or directory specified by path.

# What is API?
Api is a Application programming interface. It helps  two  different software ‘s  to communicate and exchange  data with each other.
# What is JSON format?
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.
The JSON.parse() function is used to convert a string into a JavaScript object while the JSON.stringify() function is used to convert a JavaScript object into a string.

# Why we use JSON format for API?

APIs (Application Programming Interfaces) often use JSON as the format for transmitting data because it is lightweight, easy to parse, and supported by a wide range of programming languages. JSON is also less verbose than XML, which can make it more efficient for transmitting data over the internet. Additionally, JSON is natively supported by JavaScript, making it a natural choice for web-based applications that use JavaScript on the client-side.

Another reason why JSON is commonly used is because it's standardized, widely supported and easy to read and write. This makes it a good option for data exchange between different systems and languages. JSON data can be parsed and processed in a wide range of programming languages including C#, Java, Python, Ruby, and many more.

# What is a Framework?

A framework is a set of pre-written code, libraries, and tools that provide a structure for developing software applications. The primary purpose of a framework is to help developers by providing a common set of tools and conventions, which can be used to build applications more efficiently.

# How an HTTP Communication works.

HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web. It is a request-response protocol in which a client sends a request message to a server, and the server sends back a response message.

# What is Middleware in ExpressJS.

In Express.js, middleware is a function that is executed before the final request handler. It can perform a variety of tasks such as parsing the request body, validating the request, authenticating the user, and modifying the request or response object.