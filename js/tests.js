module("Unit tests");

test( "smoke test", function() {
  ok( 1 == "1", "Passed!" );
});


module("Lint tests");

jsHintTest("Test file against linter", "../js/app.js");