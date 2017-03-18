import DoubleList from '../src/Double-list';

describe('Doble list', function() {

  let doubleList;
  before(function(){
    doubleList = new DoubleList();
  });

  it('Should initialize correctly', function(){
    expect(doubleList.getLength()).equal(0);
    expect(doubleList.head).equal(null);
    expect(doubleList.tail).equal(null);
  });

  it('should add new elements', function () {
    expect(doubleList.getLength()).equal(0);
    // Add the element that returns a node
    expect(doubleList.add(1).data).equal(1);
    // Check the length of the list
    expect(doubleList.getLength()).equal(1);
    // Head should be the node
    expect(doubleList.head.data).equal(1);
    // Tail should be the node
    expect(doubleList.tail.data).equal(1);
  });

  it('should throw error accessing invalid position', function() {
    // List has one element
    expect(doubleList.getLength()).equal(1);
    // -1 :(
    expect(function(){
      doubleList.searchAt(-1)
    }).to.throw('Invalid position for list');
    // Exceeds size
    expect(function(){
      doubleList.searchAt(3)
    }).to.throw('Invalid position for list');
  });

  it('should search by position', function() {
    expect(doubleList.getLength()).equal(1);
    expect(doubleList.searchAt(1)).to.have.property('data', 1);
  });
});
