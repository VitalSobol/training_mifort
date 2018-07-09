const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const LinkedList = require('../scripts/linkedList');

describe('LinkelList add() ', function () {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  it('add node in list', () => {
    let node = list.add('sobol');
    assert.equal('sobol', node.value);
  });

  it('add node in list and if there is no value return null', () => {
    let node = list.add('');
    assert.equal(null, node);
  });
});

describe('LinkelList size()', function () {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  it('size list if list empty', () => {
    assert.equal( 0, list.size());
  });

  it('size list if add node', () => {
    list.add('sobol');
    assert.equal( 1, list.size());
  });
});

describe('LinkelList remove', function () {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = null;
  });

  it('throw exception if position is incorrect', () => {
    expect(() => list.remove(3)).to.throw('Non-existent node in this list');
  });

});