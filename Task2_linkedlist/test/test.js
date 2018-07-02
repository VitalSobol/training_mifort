const assert = require('assert');
const LinkedList = require('../scripts/linkedList');

describe('LinkelList tests', function () {
  let list;
  before(() => {
    list = new LinkedList();
  });

  it('add node by value', () => {
    list.add('Sobol');
    list.add('Vitali');
    list.add('Genadzievich');
    list.add('1993');
    assert.equal(4, list.size());
  });

  it('remove and get node by position', () => {
    list.remove(0);
    assert.equal(3, list.size());
    list.remove(1);
    assert.equal(2, list.size());
    assert.equal('Vitali', list.get(0).value);
    assert.equal('1993', list.get(1).value);
  });

  it('insert node by position and value', () => {
    list.insert(0, 'Sobol');
    assert.equal(3, list.size());
    list.insert(2, 'Genadzievich');
    assert.equal(4, list.size());
    assert.equal('Sobol', list.get(0).value);
    assert.equal('Vitali', list.get(1).value);
    assert.equal('Genadzievich', list.get(2).value);
    assert.equal('1993', list.get(3).value);
  });

});