<style type="text/css">
code { font-family: monospace; font-size: 32px;}
pre { line-height: 70%; }
div.code { font-size: 24px; }
ul li { list-style: disc; }

</style>

<!-- data-x="5000" data-y="4000" data-scale="11" -->
------

<!-- data-x="0" data-y="0" -->
# NodeJS Workshop 
------

<!-- data-x="1500" data-y="0" -->
## Morning

* 09:30 - 10:00 Installing NodeJS
* 10:00 - 10:30 NodeJS REPL
* 10:30 - 11:00 Debugging Node
* 11:00 - 11:15 &#x2615; 
* 11:15 - 11:45 Modules
* 11:45 - 12:15 NPM
* 12:15 - 12:45 File I/O

------

<!-- data-x="3000" data-y="0" -->
## Afternoon

* 13:45 - 14:15 Callbacks
* 14:15 - 14:45 Callbacks Contd.
* 14:45 - 15:15 HTTP & Streams
* 15:15 - 15:30 &#x2615;  
* 15:30 - 16:15 ExpressJS
* 16:15 - 17:00 Middleware

------

<!-- data-x="4500" data-y="0" -->
## Installing NodeJS
* Visit http://nodejs.org/
* Click Download

------
<!-- data-x="6000" data-y="0" -->
## [Benefits](http://kunkle.org/nodejs-explained-pres/#/multi-platform)
### (Thanks to Jeff Kunkle)
------

<!-- data-x="7500" data-y="0" -->
## [Theory](http://kunkle.org/nodejs-explained-pres/#/latency)
### (Thanks to Jeff Kunkle)
------

<!-- data-x="9000" data-y="0" -->
## NPM 
### Node's Package Manager

[http://npmjs.com](http://npmjs.com)
------

<!-- data-x="10500" data-y="0" -->
## Questions?
------

<!-- data-x="0" data-y="1000" -->
# Node's REPL

Read, Eval, Print, Loop

* Go to a command prompt
* Run `node -i`
* press `<TAB>`
------
<!-- data-x="1500" data-y="1000" -->
```
Array     Boolean   Date        Error
EvalError Function  Infinity    JSON
Math      NaN       Number      Object
...
cluster   console   crypto      dgram
fs        global    http        https
process   os        querystring readline
```
------
<!-- data-x="3000" data-y="700" -->
`> 1 + 1` 
------
<!-- data-x="3000" data-y="800" -->
`> 'Hello World'`
------
<!-- data-x="3000" data-y="900" -->
`> console.log('Hello World')`
------
<!-- data-x="3000" data-y="1100" -->
```
> setTimeout( function(){ 
    console.log('Boo!');
  }, 5000);
``` 
------
<!-- data-x="3000" data-y="1300" -->
```
> .exit
``` 
------
<!-- data-x="3000" data-y="1400" -->
```
$ node -i
``` 
------
<!-- data-x="3000" data-y="1500" -->
```
> process
``` 
------
<!-- data-x="4500" data-y="1000" -->
## JS Literals
### Objects
```
> var me = {
    name: 'Walter', 
    placeOfBirth: 'Dublin'
  }
```
### Arrays
```
> var people = [ me, 'Hello', 9, false ]
```
------
<!-- data-x="6000" data-y="1000" -->
## Functions
### Expressions
```
> var boo = function(){ 
    console.log('Boo!'); 
  }
```
### Declarations
```
> function boo(){ 
    console.log('Boo!'); 
  }
```
------
<!-- data-x="7500" data-y="1000" -->
## Functions Contd.
### Functions As Parameters
```
> setTimeout(boo, 5000);
```
------
<!-- data-x="9000" data-y="1000" -->
## Functions Contd.
### Functions Returning Functions
```
> function adderFactory( a ){ 
    return function( b ){
      return a + b;
    };
  }
```
------
<!-- data-x="10500" data-y="900" -->
```
> var add6 = adderFactory(6);
> add6(2)
  8
```
------
<!-- data-x="10500" data-y="1200" -->
```
> var add3 = adderFactory(3);
> add3(2)
  5
```
------
<!-- data-x="12000" data-y="1000" -->
## Functions Contd.
### Iterators
```
> people.forEach( function( item, i ){
    console.log(i + ':' + item );
  });
```
### [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
------

<!-- data-x="13500" data-y="1000" -->
## Questions?
------

<!-- data-x="0" data-y="2000" -->
# Debugging

------
<!-- data-x="1500" data-y="2000" -->
### Executing Node Scripts
* Create directory `node-workshop`
* Create file `node-workshop/debug-me.js`:

<div class="code"><pre class="brush: js">
// debug-me.js
function inc( number ){
  return ++number;
}
var a = 5;
console.log( inc( a ) );
</pre></div>
------
<!-- data-x="3000" data-y="2000" -->
### Executing Node Scripts Contd.
```
$ cd node-workshop
$ node debug-me.js
```

------
<!-- data-x="4500" data-y="2000" -->
That's great but how do I debug node scripts?
* Node uses Google's V8 Javascript Engine
* The same engine used in the Chrome Browser
* ...

------
<!-- data-x="6000" data-y="2000" -->
...Server-side NodeJS code is debuggable using Chrome Developer tools!

![Mind Blown](mind_blown.gif)

------
<!-- data-x="7500" data-y="2000" -->
## Node Inspector
Install Node Inspector like this...
```
$ npm install -g node-inspector
```
------
<!-- data-x="9000" data-y="2000" -->
... Then run your script in debug mode like this:
```
$ node-debug debug-me.js
```

------
<!-- data-x="10500" data-y="2000" -->
Interactive Debugging Workshop
* Stepping through code
* Breakpoints
* Watching Variables
* Function Wrapper
------
<!-- data-x="12000" data-y="2000" -->
## Questions?
------

<!-- data-x="0" data-y="3000" -->
# Modules
------

<!-- data-x="1500" data-y="3000" -->
## CommonJS
### JS doesn't have "modules"
### No `private` and `public` keywords
### CommonJS fixes this.
### [The CommonJS Specification](http://wiki.commonjs.org/wiki/Modules/1.1)
------
<!-- data-x="3000" data-y="3000" -->
## Built-in Modules

* fs `var fs = require('fs');`
* http `var http = require('http');`
* path `var path = require('path');`
* ...

------
<!-- data-x="4500" data-y="3000" -->
## 3rd-party Modules

* q `var q = require('q');`
* async `var async = require('async');`
* ...

------
<!-- data-x="6000" data-y="3000" -->
## Local Modules

* debug-me.js  
  `var debugMe = require('./debug-me');` 
* The `.js` suffix is optional 
* You *must* use relative/absolute paths

------
<!-- data-x="7500" data-y="3000" -->

&#x1f44d; `var debugMe = require('./debug-me');` 

&#x1f44d; `var debugMe = require('./debug-me.js');` 

&#x1f44e; `var debugMe = require('debug-me');` 

&#x1f44e; `var debugMe = require('debug-me.js');` 
------

<!-- data-x="9000" data-y="3000" -->
## Roll your own
<div class="code"><pre class="brush: js">
// node-workshop/dice.js
function roll(){
  return Math.ceil(6 * Math.random());
}
exports.roll = roll;
</pre></div>

* private by default
* `exports` makes `public` 
------
<!-- data-x="10500" data-y="3000" -->
## Using your module
```
$ cd node-workshop
$ node
> var dice = require('./dice');
> var n = dice.roll();
> n
```
------
<!-- data-x="12000" data-y="3000" -->
## Private members
<div class="code"><pre class="brush: js">
// node-workshop/dice.js (v 2)
var rolls = [];
function roll(){
  var result = Math.ceil(6 * Math.random());
  if (!rolls[result]) {
    rolls[result] = 0;
  }
  rolls[result]++;
  return result;
}
function stats(){
  return rolls;
}
exports.roll = roll;
exports.stats = stats;
</pre></div>

------

<!-- data-x="13500" data-y="3000" -->
```
$ node
> var dice = require('./dice');
> dice.roll();
> dice.roll();
> dice.roll();
> dice.stats();
> dice.stats()[2]; 
```
------

<!-- data-x="15000" data-y="3000" -->
## module scope variables
* module
* exports
* require
* __dirname
* __filename

------

<!-- data-x="16500" data-y="3000" -->
## Exporting 
### `exports` vs `module.exports`
The `exports` variable and `module.exports` property both refer to the same value.
If nothing is exported, a default `{}` empty object is exported.

------
<!-- data-x="18000" data-y="3000" -->
Our first module...
<div class="code"><pre class="brush: js">
// node-workshop/dice.js
function roll(){
  return Math.ceil(6 * Math.random());
}
exports.roll = roll;
</pre></div>

could also be written like this...

<div class="code"><pre class="brush: js">
// node-workshop/dice.js
function roll(){
  return Math.ceil(6 * Math.random());
}
module.exports.roll = roll;
</pre></div>
------
<!-- data-x="19500" data-y="3000" -->
### Modules as Functions
To create a function module...
<div class="code"><pre class="brush: js">
// node-workshop/dice2.js
function roll(){
  return Math.ceil(6 * Math.random());
}
module.exports = roll;
</pre></div>
... and use it like this...
```
> var roll = require('./dice2');
> roll();
```
------
<!-- data-x="21000" data-y="3000" -->
`module.exports` or `exports` 

Which should I use?
------
<!-- data-x="21000" data-y="3200" -->
It depends.

------
<!-- data-x="22500" data-y="3000" -->
# Questions?

------
<!-- data-x="0" data-y="4000" -->
# NPM
## Node Packages

------
<!-- data-x="1500" data-y="4000" -->

* Packages are collections of 1 or more modules.
* Packages typically (but not always) have dependencies.
* Packages are self-contained.
* No Dependency Hell!
------
<!-- data-x="3000" data-y="4000" -->
## Package CRUD

* Create `npm init`
* Read `npm ls` (lists package dependencies)
* Update `npm update` (updates dependencies)
* Delete `npm uninstall`

------
<!-- data-x="4500" data-y="4000" -->
## NPM Repository
1. Visit [http://npmjs.com](http://npmjs.com)
2. Browse around

------
<!-- data-x="6000" data-y="4000" -->
## Roll your own
```
$ mkdir walter
$ cd walter
$ npm init
```
Replace `walter` with your own name.

Answer yes to all questions.

------
<!-- data-x="7500" data-y="4000" -->
## package.json
<div class="code"><pre class="brush: js">
{
  "name": "walter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
</pre></div>
------
<!-- data-x="9000" data-y="4000" -->
## index.js
<div class="code"><pre class="brush: js">
// index.js
var \_ = require('underscore');
function evens(numbers){
  return \_.filter(numbers, function(n){
    return n % 2 == 0;
  });
}
exports.evens = evens;
</pre></div>
------
<!-- data-x="10500" data-y="4000" -->
Try to execute the index.js script
```
$ node index.js
```
------
<!-- data-x="12000" data-y="4000" -->
```
Error: Cannot find module 'underscore'
    at Function.Module._resolveFilename
    at Function.Module._load 
    at Module.require 
    at require 
    at Object.<anonymous> (index.js:1:71)
```
------
<!-- data-x="13500" data-y="4000" -->
## Dependencies
* Our package depends on `underscore`, a popular open-source JS library.
* Without underscore, our package won't work.
```
$ npm install underscore
$ node
> var pkg = require('./index');
> pkg.evens( [ 9, 10, 8, 5 ] );
```
------
<!-- data-x="15000" data-y="4000" -->
A new node_modules subdirectory has appeared!
```
$ find ./node_modules
  node_modules/underscore
  node_modules/underscore/LICENSE
  node_modules/underscore/package.json
  node_modules/underscore/README.md
  node_modules/underscore/underscore-min.js
  node_modules/underscore/underscore-min.map
  node_modules/underscore/underscore.js
``` 
------
<!-- data-x="16500" data-y="4000" -->
* Now our package works but there's still a problem. 
* We haven't *declared* that underscore is a dependency.
* We need to ensure that whenever someone installs our package, underscore is also installed.

------
<!-- data-x="18000" data-y="4000" -->
```
$ npm install underscore --save
```
... The `--save` flag means npm will the package.json file ensuring that underscore is declared as a dependency!

------
<!-- data-x="19500" data-y="4000" -->
package.json (updated)
<div class="code"><pre class="brush: js">
{
  "name": "walter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "underscore": "^1.8.3"
  }
}
</pre></div>
------
<!-- data-x="21000" data-y="4000" -->
## Semantic Versioning
* The `npm update` command assumes modules use Semantic Versioning.
* Version `^1.8.3` means use version 1.8.3 or higher up to but not including 2.0.0
* The `^` (caret) symbol is important!
* Go visit [http://semver.org](http://semver.org) for more information.

------
<!-- data-x="22500" data-y="4000" -->
# Questions?


------
<!-- data-x="0" data-y="5000" -->
# File I/O

------
<!-- data-x="1500" data-y="5000" -->
## Reading a file
There are 2 ways to read a file in NodeJS...

------
<!-- data-x="3000" data-y="5000" -->
### Synchronous
<div class="code"><pre class="brush: js">
var fs = require('fs');
var txt = fs.readFileSync('./index.js', 'utf8');
console.log(txt);
</pre></div>

### Asynchronous
<div class="code"><pre class="brush: js">
var fs = require('fs');
fs.readFile('./index.js', 'utf8', function( err, txt){
  if (err){
    return;
  }
  console.log(txt);
});
</pre></div>

------
<!-- data-x="4500" data-y="5000" -->

* Some built-in modules (e.g. fs) have function in both asynchronous *and* synchronous flavours.
* Synchronous functions block until completed
* Useful for NodeJS beginners but...
* Avoid using them!

------
<!-- data-x="6000" data-y="5000" -->
## Encoding

* The 2nd parameter to readFile `utf8` means read as text/utf8.
* If no encoding then file is read as binary (octet stream).

<div class="code"><pre class="brush: js">
var fs = require('fs');
fs.readFile('./index.js', function( err, buf){
  if (err){
    return;
  }
  console.log(buf);
});
</pre></div>

------
<!-- data-x="7500" data-y="5000" -->
## Callbacks (again)
File and Network I/O functions use callbacks to tell your program when data is ready.
<div class="code"><pre class="brush: js">
// read-file.js
var fs = require('fs');
fs.readFile('./index.js','utf8', function( err, buf){
  if (err){
    return;
  }
  console.log(buf);
  console.log('File read complete.');

});
console.log('Reading file...');
</pre></div>

------
<!-- data-x="7500" data-y="5400" -->
The highlighted code is executed once the file is read. (not immediately)

------
<!-- data-x="9000" data-y="5000" -->
## Async & Errors
Node's built-in async functions expect a callback which should have 2 parameters

* error - This will be defined if an error occurred
* data - The data returned by the async function if there isn't an error.  

Your callbacks should always handle errors.

------
<!-- data-x="10500" data-y="5000" -->
## Error Handling
3 Main ways to handle errors
* `throw` the error (making it an exception)
* pass the error to a _callback_, a function provided for handling errors and results of async operations.
* emit an "error" event

------
<!-- data-x="12000" data-y="5000" -->
Error handling in NodeJS is complicated  
[https://www.joyent.com/developers /node/design/errors](https://www.joyent.com/developers/node/design/errors)
------
<!-- data-x="13500" data-y="5000" -->
# Questions?

------
<!-- data-x="0" data-y="6000" -->
# Callbacks

------
<!-- data-x="1500" data-y="6000" -->
# What's a callback?
A function which will be invoked _when something happens_.

* Also called _deferred_ functions
* Most common use-case `setTimeout(function(){ //... }, 1000)`

------
<!-- data-x="3000" data-y="6000" -->
## Reading directories
There are 2 ways to read directories...  
Synchronously
<div class="code"><pre class="brush: js">
// print number of files in directory
var fs = require('fs');
var files = fs.readdirSync('./');
console.log(files.length);
</pre></div>
Asynchronously (using Callbacks)
<div class="code"><pre class="brush: js">
// print number of files in directory
var fs = require('fs');
fs.readdir('./', function(err, files){
  console.log(files.length);
});
</pre></div>
------
<!-- data-x="4500" data-y="6000" -->
## Prefer Async to Sync
Most NodeJS APIs are *only* Asynchronous.

------
<!-- data-x="7500" data-y="6000" -->
It's harder to understand the flow of control in Asynchronous code.

------
<!-- data-x="9000" data-y="6000" -->
The following code example: 

* Lists all files in the current directory
* Displays size for each file

------
<!-- data-x="10500" data-y="6000" -->
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
fs.readdir(source, function(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function( filename ){
      fs.stat( filename, function( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
              }
            });
          }
        }
      });
    });
  }
});
</pre></div>
Download [https://ibm.biz/BdHPhr](https://ibm.biz/BdHPhr) and save as `dirFiles.js`

------
<!-- data-x="12000" data-y="6000" -->
## Questions
* Is this code readable?
* Is it maintainable?
* How many callbacks are in this code?

------
<!-- data-x="13500" data-y="6000" -->
## Callback Hell
(And how to avoid it)
------

<!-- data-x="15000" data-y="6000" -->
## Function names
In the example code, none of the callbacks functions are named. This can make debugging more difficult.
------

<!-- data-x="16500" data-y="6000" -->
Exercise 1: Add an Error
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
fs.readdir(source, function(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function( filename ){
      fs.stat( filename, function( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
/\* ===> \*/      throw new Error('Boo!');
              }
            });
          }
        }
      });
    });
  }
});
</pre></div>
------
<!-- data-x="18000" data-y="6000" -->
Run the Code
```
$ node dirFiles.js
```

------
<!-- data-x="19500" data-y="6000" -->
The Stacktrace for this program includes the filename and line number.
Since no functions are named, there is no function name in the stack trace.
```
Error: boo!
    at C:\Users\walter\dirFiles.js:24:23
    at fs.js:334:14
    at FSReqWrap.oncomplete (fs.js:95:15)
```
------
<!-- data-x="21000" data-y="6000" -->
The functions used in dirFile.js are *anonymous function expressions*, because `function()...` has no name identifier on it.
<div class="code"><pre class="brush: js">
fs.readFile( filename, function( err, contents ){
  if (err){
    console.log('Read Error:' + err);
  } else {
    console.log(filename + ':' + contents.length);
  }
});
</pre></div>
------
<!-- data-x="22500" data-y="6000" -->
Many JS libraries _encourage_ this idiomatic style of code, but there are drawbacks!

* No useful name displayed in stack trace
* Descriptive function names make code more readable / self-documenting.
------

<!-- data-x="24000" data-y="6000" -->
Exercise 2: Give each function a name.
<div class="code"><pre class="brush: js">
fs.readFile( filename, function onReadFile( err, contents ){
  if (err){
    console.log('Read Error:' + err);
  } else {
    console.log(filename + ':' + contents.length);
  }
});
</pre></div>
You can call the functions what you like, just make them descriptive!
------

<!-- data-x="25500" data-y="6000" -->
Run the Code again
```
$ node dirFiles.js
```

------
<!-- data-x="27000" data-y="6000" -->
```
Error: boo!
    at onReadFile (C:\Users\walter\dirFiles.js:24:23)
    at fs.js:334:14
    at FSReqWrap.oncomplete (fs.js:95:15)
```
------
<!-- data-x="28500" data-y="6000" -->
Function names make code more readable and easier to debug but don't fully solve the problem of callback hell
------

<!-- data-x="30000" data-y="6000" -->
The code is still deeply nested and the flow is still difficult to understand.
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
fs.readdir(source, function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function sizeEachFile( filename ){
      fs.stat( filename, function onStatFile( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function onReadFile( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
              }
            });
          }
        }
      });
    });
  }
}); 
</pre></div>
------

<!-- data-x="31500" data-y="6000" -->
## Callback Hell contd.
Make your code shallow.
------

<!-- data-x="33000" data-y="6000" -->
### Function Declarations
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function sizeEachFile( filename ){
      fs.stat( filename, function onStatFile( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function onReadFile( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
              }
            });
          }
        }
      });
    });
  }
}
fs.readdir(source, onReadDir); 
</pre></div>
------

<!-- data-x="34500" data-y="6000" -->
## Exercise
Change the `sizeEachFile` function from a function-expression to a function-declaration.
(You might have given the function a different name, it's the function passed to `files.forEach`)
------

<!-- data-x="36000" data-y="6000" -->

<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( sizeEachFile );
  }
}
function sizeEachFile( filename ){
  fs.stat( filename, function onStatFile( err, stats ){
    if (err) {
      console.log('Stat error:' + err);
    } else {
      if ( stats.isFile() ){
        fs.readFile( filename, function onReadFile( err, contents ){
          if (err){
            console.log('Read Error:' + err);
          } else {
            console.log(filename + ':' + contents.length);
          }
        });
      }
    }
  });
}
fs.readdir(source, onReadDir); 
</pre></div>

------

<!-- data-x="37500" data-y="6000" -->
Run the Code
```
$ node dirFiles.js
```

Ensure it still works!
------

<!-- data-x="39000" data-y="6000" -->
## Exercise
Now turn the `onStatFile` function-expression (the function passed to fs.stat) into a function declaration.
------

<!-- data-x="40500" data-y="6000" -->
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( sizeEachFile );
  }
}
function onStatFile( err, stats ){
  if (err) {
    console.log('Stat error:' + err);
  } else {
    if ( stats.isFile() ){
      fs.readFile( filename, function onReadFile( err, contents ){
        if (err){
          console.log('Read Error:' + err);
        } else {
          console.log(filename + ':' + contents.length);
        }
      });
    }
  }
}
function sizeEachFile( filename ){
  fs.stat( filename, onStatFile);
}
fs.readdir(source, onReadDir); 
</pre></div>
------

<!-- data-x="42000" data-y="6000" -->
## Run the Code
```
C:\Users\walter\dirFiles.js:15
      fs.readFile( filename, function onReadFile( err, contents ){
                   ^
ReferenceError: filename is not defined
    at onStatFile (C:\Users\walter\dirFiles.js:15:20)
    at FSReqWrap.oncomplete (fs.js:95:15)
```
------

<!-- data-x="43500" data-y="6000" -->
## Scope
The previous code failed because the `filename` variable wasn't in scope. We have 2 options...

* Don't try to flatten the code any further
* Add the `filename` variable to the function scope (how?)

------

<!-- data-x="45000" data-y="6000" -->
## Scope Contd.
### Binding
In Javascript `Function.prototype.bind()` can be used to *bind* together a function and 1 or more variables, returning a new function.
------

<!-- data-x="46500" data-y="6000" -->
## Bind + this
### Exercise
```
$ node
> var me = { 
    name: 'Walter',
    greet: function(){ 
      console.log(this.name);
    }
  }
> me.greet()
```
------

<!-- data-x="46500" data-y="6400" -->
```
> setTimeout(me.greet, 1000);
```
------
<!-- data-x="48000" data-y="6000" -->
![This Confusion](this-confusion.png)

------

<!-- data-x="48000" data-y="6400" -->
```
> setTimeout(me.greet.bind(me), 1000);
```

------

<!-- data-x="49500" data-y="6000" -->
## Bind + parameters
Bind can also be used to *prepend* additional parameters into a function.

<div class="code"><pre class="brush: js">
function onStatFile( filename, err, stats ){
//                   ^^^^^^^^
 ...
}
function sizeEachFile( filename ){
  var boundFn = onStatFile.bind(null,filename);
//                                   ^^^^^^^^
  fs.stat( filename, boundFn);
}
</pre></div>
### Exercise: Update dirFiles.js accordingly
------
<!-- data-x="51000" data-y="6000" -->
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( sizeEachFile );
  }
}
function onStatFile( filename, err, stats ){
  if (err) {
    console.log('Stat error:' + err);
  } else {
    if ( stats.isFile() ){
      fs.readFile( filename, function onReadFile( err, contents ){
        if (err){
          console.log('Read Error:' + err);
        } else {
          console.log(filename + ':' + contents.length);
        }
      });
    }
  }
}
function sizeEachFile( filename ){
  var boundFn = onStatFile.bind(null,filename);
  fs.stat( filename, boundFn);
}
fs.readdir(source, onReadDir); 
</pre></div>
------
<!-- data-x="52500" data-y="6000" -->
## Exercise
Make all remaining function expressions function declarations.
------

<!-- data-x="54000" data-y="6000" -->
### Before
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
fs.readdir(source, function(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function( filename ){
      fs.stat( filename, function( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
              }
            });
          }
        }
      });
    });
  }
});
</pre></div>
------
<!-- data-x="55500" data-y="6000" -->
### After
<div class="code"><pre class="brush: js">
var fs = require('fs');
var source = './';
function onReadDir(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( sizeEachFile );
  }
}
function onReadFile( filename, err, contents ){
  if (err){
    console.log('Read Error:' + err);
  } else {
    console.log(filename + ':' + contents.length);
  }
}
function onStatFile( filename, err, stats ){
  if (err) {
    console.log('Stat error:' + err);
  } else {
    if ( stats.isFile() ){
      fs.readFile( filename, onReadFile.bind(null, filename));
    }
  }
}
function sizeEachFile( filename ){
  var boundFn = onStatFile.bind(null,filename);
  fs.stat( filename, boundFn);
}
fs.readdir(source, onReadDir); 
</pre></div>
------
<!-- data-x="57000" data-y="6000" -->
# Questions?
------
<!-- data-x="0" data-y="7000" -->
# Web Servers
------
<!-- data-x="1500" data-y="7000" -->
## Hello World
<div class="code"><pre class="brush: js">
// hello-server.js
var http = require('http');
function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end("Hello World\n");
}
var server = http.createServer( onRequest );
server.listen(8000);
</pre></div>
Download source from http://url.ie/z6tg
------
<!-- data-x="3000" data-y="7000" -->
## Debugging
```
$ node-debug hello-server.js
```
Set a breakpoint on line 4, then in a separate tab
visit http://localhost:8000/
------

<!-- data-x="4500" data-y="7000" -->
## Request
Expand the `request` object in the locals pane

* headers
* __proto__ chain
------

<!-- data-x="6000" data-y="7000" -->
## Response
Expand the `response` object in the locals pane

* statusCode, statusMessage
* __proto__ chain

Step through line 4

------

<!-- data-x="7500" data-y="7000" -->
## Streams

* `request` is a Stream (Readable)
* `response` is a Stream (Writable)
* File I/O uses Streams
* Processes have Streams

------
<!-- data-x="9000" data-y="7000" -->
![streams](streams-in-node.jpg)
------
<!-- data-x="10500" data-y="7000" -->
## Pipes
Any Readable Stream can be `pipe()`'d to a Writable Stream.
![pipes](pipes.jpg)
------
<!-- data-x="12000" data-y="7000" -->
## Hello Streams
<div class="code"><pre class="brush: js">
// hello-streams.js
var http = require('http'),
    fs = require('fs');

function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  fs.createReadStream('./package.json').pipe(response);
}
var server = http.createServer( onRequest );
server.listen(8000);
</pre></div>
------
<!-- data-x="13500" data-y="7000" -->
## Debugging
```
$ node-debug hello-streams.js
```
------
<!-- data-x="15000" data-y="7000" -->
# Questions?

------
<!-- data-x="0" data-y="8000" -->
# ExpressJS
## Part 1
------

<!-- data-x="1500" data-y="8000" -->
NodeJS has many server-side frameworks

* Express
* Hapi
* Koa
* Sails

The most popular is ExpressJS

http://expressjs.com/

------

<!-- data-x="3000" data-y="8000" -->
## Express

* Fast
* Unopinionated
* Minimalist
------

<!-- data-x="4500" data-y="8000" -->
## Installing Express
```
$ npm install express-generator -g
```
------

<!-- data-x="6000" data-y="8000" -->
## Your first web app
```
$ mkdir webapp
$ cd webapp
$ express --ejs
$ npm install
$ set DEBUG=webapp:*
$ npm start
```
Visit http://localhost:3000/

------

<!-- data-x="7500" data-y="8000" -->
## Express App Anatomy

* ./package.json (npm start)
* ./bin/www 
* ./app.js
* (Controllers)
------
<!-- data-x="9000" data-y="8000" -->
## ./bin/www

Open this file in your editor.

* Line 22 : `http.createServer(app);`
------

<!-- data-x="10500" data-y="8000" -->
## ./app.js

Open webapp/app.js in your editor.

This is where your Web App configuration lives.
------

<!-- data-x="12000" data-y="8000" -->
## ./app.js
The app.js file is the entry-point to your web app.

* Middleware Setup
* Route Setup

------

<!-- data-x="13500" data-y="8000" -->
## Dependencies
<div class="code"><pre class="brush: js">
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
</pre></div>
------

<!-- data-x="15000" data-y="8000" -->
## Middleware setup
<div class="code"><pre class="brush: js">
var app = express();
// view engine setup
app.set('views', path.join(\__dirname, 'views'));
app.set('view engine', 'ejs');
// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(\__dirname, 'public')));</pre></div>
(We'll cover middleware later)
------

<!-- data-x="16500" data-y="8000" -->
## Route Setup
<div class="code"><pre class="brush: js">
app.use('/', routes);
//       ^ mount point
app.use('/users', users);
//       ^^^^^^ mount point

</pre></div>
------

<!-- data-x="18000" data-y="8000" -->
## Routes
<div class="code"><pre class="brush: js">
// app.js
var routes = require('./routes/index');
...
app.use('/', routes);
</pre></div>

<div class="code"><pre class="brush: js">
// routes/index.js
var express = require('express');
var router = express.Router();
/\* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
</pre></div>

------

<!-- data-x="19500" data-y="8000" -->
## Routes Contd.
<div class="code"><pre class="brush: js">
// app.js
var users = require('./routes/users');
...
app.use('/users', users);
//       ^^^^^^ mount point
</pre></div>

<div class="code"><pre class="brush: js">
// routes/index.js
var express = require('express');
var router = express.Router();
/\* GET users listing. \*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
</pre></div>
Visit http://localhost:3000/users
------
<!-- data-x="21000" data-y="8000" -->
* Routers are mounted from a mount point. 
* All subsequent route configuration is *relative* to the mount point.
* Router has `get` and `post` functions for each request method type (GET, POST)

------
<!-- data-x="22500" data-y="8000" -->
## Exercise
Add a new path to `route/users.js` so that http://localhost:3000/users/nobody will return the text '[]';

You'll need to CTRL+C your app and restart using `npm start`.

------
<!-- data-x="24000" data-y="8000" -->
## Route Parameters
<div class="code"><pre class="brush: js">
// route/users.js
router.get('/named/:name', function(req, res, next){
  res.send(req.params.name);
});
</pre></div>

visit http://localhost:3000/users/named/tom

`req.params.name` is 'tom'
------

<!-- data-x="25500" data-y="8000" -->
## Views
<div class="code"><pre class="brush: js">
// app.js
// view engine setup
app.set('views', path.join(\__dirname, 'views'));
//                            directory ^^^^^
app.set('view engine', 'ejs');
//           extension  ^^^
</pre></div>

<div class="code"><pre class="brush: js">
// routes/index.js
var express = require('express');
var router = express.Router();
/\* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
//            ^^^^^ views/index.ejs
});
module.exports = router;
</pre></div>
Visit http://localhost:3000/
------
<!-- data-x="27000" data-y="8000" -->
## Views Contd.
Express _augments_ the standard http `Request` and `Response` objects, adding new functions.

`res.render()` is one such non-standard method.

The express *View Engine* adds this method.

------
<!-- data-x="28500" data-y="8000" -->
## View Engines

* Jade (default view engine used by express) http://jade-lang.com/
* EJS http://www.embeddedjs.com/

------
<!-- data-x="30000" data-y="8000" -->
## Views contd.

<div class="code"><pre class="brush: js">
// routes/index.js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
</pre></div>

    <!-- view/index.ejs -->
    <!DOCTYPE html>
    <html>
      <head>
        <title><%= title %></title>
        <link rel='stylesheet' 
              href='/stylesheets/style.css' />
      </head>
      <body>
        <h1><%= title %></h1>
        <p>Welcome to <%= title %></p>
      </body>
    </html>

------
<!-- data-x="31500" data-y="8000" -->
## Exercise 1
Change the title which appears on the home page to something other than 'Express'.

------
<!-- data-x="33000" data-y="8000" -->
## Exercise 2
Change the view/index.ejs and routes/index.js files so that a list of 4 names is displayed on the home page.

Refer to http://www.embeddedjs.com/ for reference.

------
<!-- data-x="34500" data-y="8000" -->
# Questions?
------
<!-- data-x="0" data-y="9000" -->
# Express Middleware
------
<!-- data-x="1500" data-y="9000" -->
## Middleware lets you

* Augment the Request
* Augment the Response
* Change the Reponse Object
  * Write Headers
  * Write to the Stream 
* Customize the default Web server behavior

------
<!-- data-x="3000" data-y="9000" -->
## Roll your own
### A logging middleware function
Edit app.js

* Remove the line beginning `app.use(logger('dev'));`
* Replace with the following code...

<div class="code"><pre class="brush: js">// app.js 
function logRequestUrl(req, res, next){
  console.log(new Date() + 
              ' request URL : ' + req.originalUrl);
  next(); // super-important!
}
app.use( logRequestUrl );</pre></div>

------
<!-- data-x="4500" data-y="9000" -->
All Middleware functions take 3 parameters

* `req` - The HTTP Request object
* `res` - The HTTP Response object
* `next` - A reference to the next request-handling function in the middleware chain.

------
<!-- data-x="6000" data-y="9000" -->
It's important to invoke the `next()` function or the remaining request handlers won't be invoked.
------
<!-- data-x="7500" data-y="9000" -->
## The Middleware Chain
Each request-handling function is a link in a chain.

* Each middleware function should *usually* call `next()`
* The order in which Middleware is attached is important.
* Multiple middleware functions can be attached in the same `use()` call.

------
<!-- data-x="9000" data-y="9000" -->
## Exercise
<div class="code"><pre class="brush: js">// app.js 
function logRequestUrl(req, res, next){
  console.log(new Date() + 
              ' request URL : ' + req.originalUrl);
  next(); // super-important!
}
function logRequestMethod(req, res, next){
  console.log(new Date() + 
              ' request Method : ' + req.method);
  next(); // super-important!
}
app.use( logRequestUrl, logRequestMethod );</pre></div>

------
<!-- data-x="10500" data-y="9000" -->

<div class="code"><pre class="brush: js">
app.use( logRequestUrl, logRequestMethod );
</pre></div>

Is the same as...

<div class="code"><pre class="brush: js">
app.use( logRequestUrl);
app.use( logRequestMethod );
</pre></div>

------
<!-- data-x="12000" data-y="9000" -->
## Debugging
---
Linux
```
$ node-debug ./bin/www
```
Windows
```
C:\> node-debug bin\www
```

------
<!-- data-x="13500" data-y="9000" -->
## Debugging
---
Set a breakpoint inside both the `logRequestUrl()` and `logRequestMethod()` functions and visit http://localhost:3000/
------
<!-- data-x="15000" data-y="9000" -->
## Exercise (optional)
---
What happens if you omit the call to `next()` inside one of the functions?
------
<!-- data-x="16500" data-y="9000" -->
## Static Content Middleware
---
Most (All?) Web Application Servers provide a way to serve static files.

------
<!-- data-x="18000" data-y="9000" -->
## Serving static files
---
```
app.use(express.static(path.join(__dirname, 'public')));
```

For any given URL, look for a matching file in the `./public` dir and serve it.

http://localhost:3000/stylesheets/style.css is served from `./public/stylesheets/style.css` 
------

<!-- data-x="19500" data-y="9000" -->
## 3rd-party Middleware
---
There are many open-source Express middleware modules on NPM.

* Authentication 
  - PassportJS
  - OAuth
* Compression

------
<!-- data-x="21000" data-y="9000" -->
Go to http://npmjs.com and search for 'express'.
------

<!-- data-x="22500" data-y="9000" -->
## 404 Middleware
---
You should add a 404 (Page Not Found) if a visitor tries to access an unknown route...
<div class="code"><pre class="brush: js">
// app.js
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});</pre></div>

---

This should be the last-but-one handler in the middleware stack...
------
<!-- data-x="24000" data-y="9000" -->
## Error Handling Middleware
Error-handling middleware is just like any other except with 4 arguments instead of 3

* error - The error which occurred
* request - The HTTP Request object
* response - The HTTP Response object
* next - The next handler in the middleware stack

------
<!-- data-x="25500" data-y="9000" -->
You define error-handling middleware last, after other `app.use()` and route calls.
------
<!-- data-x="27000" data-y="9000" -->
# Questions?

------
<!-- data-x="28500" data-y="9000" -->
# Next Steps

* Get to know Streams
* Browse the source code to NodeJS 
* Browse source code of a 3rd-party Express Middleware package.
* Tools - too many to cover today
  * yeoman
  * grunt
  * jasmine
  * gulp
  * browserify

<style type="text/css"> @import url(lib/shCore.css); </style>
<style type="text/css"> @import url(lib/shCoreDefault.css); </style>

<script src="lib/shCore.js"></script>
<script src="lib/shBrushJScript.js"></script>
<script src="lib/jquery-2.1.4.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>
