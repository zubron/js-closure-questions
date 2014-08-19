/* global describe, xit, expect, curry1, contains, singletonSet, union, intersection, naturalNumbersGenerator, memoize, curryn */

describe('curry1', function() {
    function add(a, b) {
        return a + b;
    }
    xit('returns a function that fixes the first argument of add to be 3', function() {
        var add3 = curry1(add, 3);
        expect(add3(1)).toBe(4);
    });
    // Not really a test. Just a cool example.
    xit('is awesome', function() {
        expect([1, 2].map(curry1(add, 3))).toEqual([4, 5]);
    });
});

// Some helpful set characteristic functions.
function positiveNumbers(x) {
    return x > 0;
}
function greaterThan10(x) {
    return x > 10;
}
function lessThan20(x) {
    return x < 20;
}

describe('contains', function() {
    xit('returns true if set contains number', function() {
        expect(contains(positiveNumbers, 3)).toBe(true);
    });
    xit('returns false if set does not contain number', function() {
        expect(contains(positiveNumbers, -1)).toBe(false);
    });
});

describe('singletonSet', function() {
    xit('returns a set that contains that number', function() {
        var just3 = singletonSet(3);
        expect(contains(just3, 3)).toBe(true);
    });
    xit('returns a set that does not contain any other number', function() {
        var just3 = singletonSet(3);
        expect(contains(just3, 2)).toBe(false);
    });
});

describe('union', function() {
    xit('returns a set that contains every number in either set', function() {
        var just2 = singletonSet(2);
        var just3 = singletonSet(3);
        var both2and3 = union(just2, just3);
        expect(contains(both2and3, 2)).toBe(true);
        expect(contains(both2and3, 3)).toBe(true);
    });
    xit('returns a set that does not contain any other number', function() {
        var just2 = singletonSet(2);
        var just3 = singletonSet(3);
        var both2and3 = union(just2, just3);
        expect(contains(both2and3, 4)).toBe(false);
    });
});

describe('intersection', function() {
    xit('returns a set that contains every number that appears in both sets', function() {
        var between10and20 = intersection(greaterThan10, lessThan20);
        expect(contains(between10and20, 11)).toBe(true);
        expect(contains(between10and20, 19)).toBe(true);
    });
    xit('returns a set that does not contain any other number', function() {
        var between10and20 = intersection(greaterThan10, lessThan20);
        expect(contains(between10and20, 10)).toBe(false);
        expect(contains(between10and20, 20)).toBe(false);
    });
});

describe('naturalNumbersGenerator', function() {
    xit('is a function', function() {
        expect(typeof naturalNumbersGenerator).toBe('function');
    });
    describe('the returned generator', function() {
        xit('is a function', function() {
            expect(typeof naturalNumbersGenerator()).toBe('function');
        });
        xit('returns the next number in the sequence each time it is called', function() {
            var g = naturalNumbersGenerator();
            expect(g()).toBe(0);
            expect(g()).toBe(1);
            expect(g()).toBe(2);
            expect(g()).toBe(3);
            expect(g()).toBe(4);
            expect(g()).toBe(5);
            expect(g()).toBe(6);
            expect(g()).toBe(7);
        });
        xit('is independent of any other generator', function() {
            var g = naturalNumbersGenerator();
            var g2 = naturalNumbersGenerator();
            g();
            g();
            g();
            expect(g2()).toBe(0);
            expect(g()).toBe(3);
        });
    });
});

describe('memoize', function() {
    xit('returns a function', function() {
        expect(typeof memoize(function() {})).toBe('function');
    });
    describe('the returned function', function() {
        xit('returns the value of the memoized function', function() {
            function add1(x) {
                return x + 1;
            }

            var memoizedAdd1 = memoize(add1);
            expect(memoizedAdd1(2)).toBe(3);
            expect(memoizedAdd1(3)).toBe(4);
        });
        xit('returns the same value if the argument has been used before', function() {
            function add1(x) {
                return x + 1;
            }

            var memoizedAdd1 = memoize(add1);
            expect(memoizedAdd1(2)).toBe(3);
            expect(memoizedAdd1(2)).toBe(3);
        });
        xit('only calls the passed in function once for each distinct argument value', function() {
            // Yet another use of closures :)
            var calls = 0;

            function add1(x) {
                calls++;
                return x + 1;
            }

            var memoizedAdd1 = memoize(add1);
            memoizedAdd1(2);
            memoizedAdd1(2);
            memoizedAdd1(3);
            memoizedAdd1(3);
            expect(calls).toBe(2);
        });
        xit('is independent of other memoized functions', function() {
            function add1(x) {
                return x + 1;
            }
            function add2(x) {
                return x + 2;
            }
            var memoizedAdd1 = memoize(add1);
            var memoizedAdd2 = memoize(add2);
            expect(memoizedAdd1(1)).toBe(2);
            expect(memoizedAdd2(1)).toBe(3);
        });
        // The tests after this point are more difficult. Feel free to skip them.
        xit('correctly handles arguments that match the names of methods of object and array', function() {
            function pluralise(x) {
                return x + 's';
            }

            var memoizedPluralise = memoize(pluralise);
            expect(memoizedPluralise('push')).toBe('pushs');
            expect(memoizedPluralise('toString')).toBe('toStrings');
        });
        xit('behaves correctly if the argument is hasOwnProperty (another method of object)', function() {
            function pluralise(x) {
                return x + 's';
            }

            var memoizedPluralise = memoize(pluralise);
            expect(memoizedPluralise('hasOwnProperty')).toBe('hasOwnPropertys');
            expect(memoizedPluralise('push')).toBe('pushs');
        });
        // Hint: The ECMA 6 Map type is one way to solve this. (Chrome supports it if you enable experimental JavaScript in chrome://flags)
        xit('distinguishes between different objects passed as arguments', function() {
            function getFoo(obj) {
                return obj.foo;
            }

            var memoizedGetfoo = memoize(getFoo);

            var a = { foo: 1 };
            var b = { foo: 2 };
            expect(memoizedGetfoo(a)).toBe(1);
            expect(memoizedGetfoo(b)).toBe(2);
        });
    });
});

describe('curryn', function() {
    function multiplyAdd(a, b, c) {
        return a * b + c;
    }
    xit('returns a function that fixes the first n arguments', function() {
        var multiplyAdd32 = curryn(multiplyAdd, 3, 2);
        expect(multiplyAdd32(1)).toBe(7);
    });
});