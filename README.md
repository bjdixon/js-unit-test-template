Javascript unit testing template. 
=================================

To use drop this project in a directory (probably called tests or something like that) and change the link in the tests.html file from ../js/app.js to the javascript application/library you want to test against.


Includes:
--------- 
- QUnit
- Blanket.js
- jshint.js
- qhint.js (for jshint/qunit integration)


Project layout would look something like this:
----------------------------------------------

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