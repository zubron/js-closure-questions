js-closure-questions
====================

A set of questions (with tests) on closures for the JavaScript study group.

## Getting started
Assuming you have node installed, run the following commands in the project root. You only have to do this once.
```
$ npm install -g grunt-cli
$ npm install
```
Now you can run the tests.
```
$ grunt
```
As you can see, all the tests are disabled to begin with. This is to avoid spamming you with failures. You should enable
the tests as you progress through the questions. Remove the `x` in `xit` to enable a test.

The tests are in `test/questions.js` and the questions themselves are in `src/questions.js`. I recommend reading (and
enabling) the relevant tests for the function you're trying to implement before implementing it.

### Seeing the test results in your browser

For more verbose and faster feedback, you may want to open `_SpecRunner.html` in your browser. If you're using C9, you
can open `_SpecRunner.html` and hit the Preview button in the menu bar to view it.