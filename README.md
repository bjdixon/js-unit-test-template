Javascript unit testing template. 
=================================

To use drop this project in a directory (probably called tests or something like that) and change the link in the tests.html file from ../js/app.js to the javascript application/library you want to test against.


**Includes**
- [QUnit](http://qunitjs.com/) 
- [Blanket.js](http://blanketjs.org/) 
- [JSHint.js](http://jshint.com/) 
- [qHint.js](https://github.com/gyoshev/qhint) (for JSHint/QUnit integration)

**Not Included** (but maybe later)
- [Sinon.JS](http://sinonjs.org/)


Project layout would look something like this:
----------------------------------------------
```
application
    |
    -- css
    |   |
    |   -- style.css
    |
    -- js
    |   |
    |   -- app.js (library to be tested)
    |
    -- index.html
    |
    -- tests (this is the directory you're looking in now)
        |
        -- css
        |   |
        |   -- qunit.css
        |
        -- js
        |   |
        |   -- qunit.js
        |   |
        |   -- blanket.js
        |   |
        |   -- jshint.js
        |   |
        |   -- qhint.js
        |   |
        |   -- tests.js
        |
        -- tests.html
        |
        -- README.md (This file)
```
