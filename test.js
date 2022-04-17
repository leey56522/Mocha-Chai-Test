const assert = require('chai').assert;
const sayHello = require('./app').sayHello;
const addTogether = require('./app').addTogether;

describe('Random functions', function() {
    // Each tested function 
    describe('sayHello', function() {
        // specific thing that is tested on that function
        it('should return hello', function() {
            assert.equal(sayHello(), 'hello');
        })
    })

    describe('addTogether', function() {
        it('should return 5', function() {
            assert.equal(addTogether(2, 3), 5);
        })

        it('should return number', function() {
            assert.typeOf(addTogether(2, 3), 'number');
        })
    })
})