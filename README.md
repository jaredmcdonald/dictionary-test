dictionary-test
===============

testing out the merriam-webster dictionary api for a future project


.getWord(word, callback[, context])
-----------------------------------

Passes JSON-ified response to callback as an argument. Optional context will be the callback invocation context.

*Need to fill in API key in options object:*

    options = {
        ...
        path: '/api/v1/references/collegiate/xml/' + word + '{KEY HERE}'
        ...
    };