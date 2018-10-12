# Node

## components of node js

- it has a c++ core
  - this compiles js code to desired machine language.
- it has a jS core
- it has v8 inbuilt
- few external modules

## working of node

- local variables of global execution context
  - this
  - __dirname
  - __filename
  - exports
  - module
  - require
  - all variables created by user

- global variables of global execution context
  - all global object user can access in node.
  > for example: Array, ArrayBuffer, clearImmediate, console, Date, Error, eval, global, Infinity, isNaN, isFinite, JSON, Map, Math, NaN, Number, Object, parseInt, parseFloat, process, process, Reflect, Set, setInterval, setTimeout, String,TypeError, undefined, WeakMap, WeakSet

## execution of node

- execution of node program
  - call stack
    1. anonymous function (bootstrap_node.js)
    2. stratup (bootstrap_node.js)
    3. Module.runMain (module.js)
    4. Module._load (module.js)
    5. tryModuleLoad (module.js)
    6. Module.load (module.js)
    7. Module._extensions..js (module.js)
    8. Module._compile (module.js)
    9. anonymous function (app.js) 