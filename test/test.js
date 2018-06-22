const assert = require('assert');
const checkBrackets = require('./../brackets')

describe('Array', function() {
    describe('checkBrackets', function() {
        it('should return 1 if brackets is correct', function() {
            assert.equal(checkBrackets('---(++++)----'), 1);
        });
        it('should return 1 if brackets is correct', function() {
            assert.equal(checkBrackets(''), 1);
        });
        it('should return 1 if brackets is correct', function() {
            assert.equal(checkBrackets('before (middle []) after'), 1);
        });
        it('should return 0 if brackets isn\'t correct', function() {
            assert.equal(checkBrackets(')('), 0);
        });
        it('should return 1 if brackets is correct', function() {
            assert.equal(checkBrackets('}{'), 1);
        });
        it('should return 0 if brackets isn\'t correct', function() {
            assert.equal(checkBrackets('<( >)'), 0);
        });
        it('should return 1 if brackets is correct', function() {
            assert.equal(checkBrackets('([<>()]<>)'), 1);
        });
        it('should return 0 if brackets isn\'t correct', function() {
            assert.equal(checkBrackets('( [)'), 0);
        });
    });
});