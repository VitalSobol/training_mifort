const chai = require('chai');
const assert = chai.assert;
const LinkedList = require('../scripts/linkedList');

describe('LinkedList', function () {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });
  describe('LinkedList add(value) ', function () {
    it('add node in list and if there is no value return null', () => {
      let node = list.add('');
      assert.equal(null, node);
    });

    it('add node in list', () => {
      let node = list.add('Vitalik');
      assert.equal('Vitalik', node.value);
    });

  });

  describe('LinkedList size()', function () {
    it('size list if list empty', () => {
      assert.equal( 0, list.size());
    });

    it('size list if add node', () => {
      list.add('Vitalik');
      assert.equal( 1, list.size());
    });
  });

  describe('LinkedList remove(position)', function () {
    it('throw exception if position is incorrect', () => {
      assert.throws(()=>{list.remove(3)}, Error, 'Non-existent node in this list');
    });

    it('remove node from list', () => {
      list.add('Vitalik');
      let node = list.remove(0);
      assert.equal('Vitalik', node.value);
    });

  });

  describe('LinkedList get(position)', function () {
    it('get node from list if list empty', () => {
      assert.throws(()=>{list.get(3)}, Error, 'Non-existent node in this list');
    });

    it('get node from list', () => {
      list.add('Vitalik');
      list.add('Sobol');
      let node = list.get(1);
      assert.equal('Vitalik', node.value);
    });

  });

  describe('LinkedList insert(position, value)', function () {
    it('insert node from list if list doesn\'t include position', () => {
      assert.throws(()=>{list.insert(3, 'Vitalik')}, Error, 'Non-existent node in this list');
    });

    it('insert node in list', () => {
      list.add('Gennadzievich');
      list.add('Sobol');
      let node = list.insert(1, 'Vitalik');
      assert.equal('Vitalik', node.value);
    });

  });
});
