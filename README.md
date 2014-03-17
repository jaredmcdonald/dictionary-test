dictionary-test
===============

json merriam-webster dictionary api


Installing
----------

Add submodule:

    $ git clone https://github.com/jaredmcdonald/dictionary-test/ dictionary

And then require it:

    var dictionary = require('./dictionary');


Usage
-----


**.configure(key)**

Call this before you make any calls to anything else. Pass in the string value of your merriam-webster dictionary key


**.getWord(word, callback[, context])**

Passes JSON-ified response to callback as an argument. Optional context will be the callback invocation context.


