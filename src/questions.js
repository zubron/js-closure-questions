/**
 * Partially apply f by fixing the first argument.
 * @param {function} f - the function to curry. Should take two arguments.
 * @param {*} a - the value of the argument to be fixed.
 * @returns {function} a function taking a single argument.
 */
function curry1(f, a) {
    throw new Error('Unimplemented');
}
/**
 * A set can be defined by a characteristic function.
 * The function returns true if the argument is in the set and false otherwise.
 * @typedef {function} Set
 */

/**
 * Determine if a set contains an element.
 * @param {Set} s - the set to test
 * @param {number} element
 * @returns {boolean} returns true if the element is in the set, false otherwise.
 */
function contains(s, element) {
    throw new Error('Unimplemented');
}

/**
 * Create a set with a single element.
 * @param {number} element
 * @returns {Set} a set containing element and only element.
 */
function singletonSet(element) {
    throw new Error('Unimplemented');
}

/**
 * Create a set that is the union of two other sets.
 * @param {Set} s
 * @param {Set} t
 * @returns {Set} a set that contains the elements of s and t.
 */
function union(s, t) {
    throw new Error('Unimplemented');
}

/**
 * Create a set that is the intersection of two other sets.
 * @param {Set} s
 * @param {Set} t
 * @returns {Set} a set that contains elements common to s and t.
 */
function intersection(s, t) {
    throw new Error('Unimplemented');
}

/**
 * A generator is a function that takes no arguments and returns something.
 * When it is called it mutates so that the next call may return something different.
 * @typedef {function} Generator
 */

/**
 * Creates a generator for the infinite sequence 0, 1, 2, 3, 4, ...
 * Each call should create a new, independent generator.
 * @returns {Generator} a generator that returns elements of the natural number sequence.
 */
function naturalNumbersGenerator() {
    throw new Error('Unimplemented');
}

/**
 * Cache the computation of the given function and only call it when necessary.
 * @param {function} f - the function to call. Takes a single argument.
 * @returns {function} a function that also takes a single argument. Has the same return type as f.
 */
function memoize(f) {
    throw new Error('Unimplemented');
}

/**
 * Partially apply f by fixing arguments.
 * @param {function} f - the function to curry. Takes n arguments.
 * @param {...*} values - the first m arguments to be fixed.
 * @returns {function} a function taking n-m arguments.
 */
function curryn() {
    throw new Error('Unimplemented');
}
