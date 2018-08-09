const chai = require('chai');
const assert = chai.assert;
const BinaryTree = require('../scripts/BinaryTree');

describe('BinaryTree tests', function () {
    let tree;

    beforeEach(() => {
        tree = new BinaryTree();
    });

    afterEach(() => {
        tree = null;
    });

    describe('Add function', function () {
        it('should add element', () => {
            tree.add(5);
            assert.equal(5, tree.search(5));
        });

        it('should add several elements', () => {
            tree.add(5);
            tree.add(8);
            assert.equal(5, tree.search(5));
            assert.equal(8, tree.search(8));
        });

        it('should throw exception on add without value', () => {
            assert.throws(()=>{tree.add()}, Error, 'Not value');
        });
    });

    describe('Delete function', function () {
        it('should delete element', () => {
            tree.add(8);
            tree.delete(8);
            assert.isNull(tree.search(8));
        });

        it('should correct delete elements', () => {
            tree.add(5);
            tree.add(8);
            tree.delete(8);
            tree.add(1);
            tree.delete(5);
            assert.isNull(tree.search(5));
            assert.isNull(tree.search(8));
        });

        it('should return value of deleted element', () => {
            tree.add(5);
            assert.equal(5, tree.delete(5));
        });

        it('should throw exception on delete without key', () => {
            assert.throws(() => {tree.delete()}, Error, 'Not key');
        });
    });

    describe('Search function', function () {
        it('should return value of element', () => {
            tree.add(5);
            assert.equal(5, tree.search(5));
        });

        it('should return null on tree empty', () => {
            assert.isNull(tree.search(8));
        });

        it('should throw exception on search without key', () => {
            assert.throws(() => {tree.search()}, Error, 'Not key');
        });
    });

});
