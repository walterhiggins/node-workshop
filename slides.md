<style type="text/css">
code { font-family: monospace; font-size: 32px;}
pre { line-height: 70%; }
</style>

<!-- data-x="7000" data-y="1000" data-scale="6" -->
------

<!-- data-x="0" data-y="0" -->
## NodeJS Workshop 
------

<!-- data-x="1500" data-y="0" -->
## Morning

* 09:30 - 10:00 Installing NodeJS
* 10:00 - 10:30 NodeJS REPL
* 10:30 - 11:00 Debugging Node
* 11:00 - 11:15 ☕ 
* 11:15 - 11:45 Modules
* 11:45 - 12:15 NPM
* 12:15 - 12:45 File I/O

------

<!-- data-x="3000" data-y="0" -->
## Afternoon

* 13:45 - 14:15 Callbacks
* 14:15 - 14:45 Async
* 14:45 - 15:15 HTTP 
* 15:15 - 15:30 ☕ 
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
## Node's REPL

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
## Debugging

------
<!-- data-x="1500" data-y="2000" -->
### Executing Node Scripts
* Create directory `node-workshop`
* Create file `node-workshop/debug-me.js`:

```
// debug-me.js
function inc( number ){
  return ++number;
}
var a = 5;
console.log( inc( a ) );
```
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
$ node --debug-brk debug-me.js
```

------
<!-- data-x="10500" data-y="2000" -->
Interactive Debugging Workshop

------
<!-- data-x="12000" data-y="2000" -->
## Questions?




