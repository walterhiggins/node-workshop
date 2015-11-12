<style type="text/css">
code { font-family: monospace; font-size: 32px;}
pre { line-height: 70%; }
div.code { font-size: 24px; }
ul li { list-style: disc; }
</style>

<!-- data-x="11250" data-y="2000" data-scale="13" -->
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
* 14:15 - 14:45 Async
* 14:45 - 15:15 HTTP 
* 15:15 - 15:30 &#x2615;  
* 15:30 - 16:00 ExpressJS
* 16:00 - 16:30 Middleware
* 16:30 - 17:00 Promise

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
fs.readFile('./index.js', function( err, buf){
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

<!--style type="text/css"> @import url(lib/reset.css); </style-->
<style type="text/css"> @import url(lib/shCore.css); </style>
<style type="text/css"> @import url(lib/shCoreDefault.css); </style>
<script src="lib/shCore.js"></script>
<script src="lib/shBrushJScript.js"></script>
<script src="lib/jquery-2.1.4.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>
