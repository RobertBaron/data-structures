import DoubleList from '../src/DoubleList';

describe('Double list', function() {

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

  it('should remove head', function() {
    expect(doubleList.add(2).data).equal(2);
    expect(doubleList.getLength()).equal(2);

    expect(doubleList.head.data).equal(1);
    expect(doubleList.tail.data).equal(2);

    expect(doubleList.remove(1)).to.have.property('data', 1);
    expect(doubleList.getLength()).equal(1);

    expect(doubleList.head.data).equal(2);
    expect(doubleList.tail.data).equal(2);
  });

  it('should remove in center', function() {
    expect(doubleList.add(3).data).equal(3);
    expect(doubleList.add(4).data).equal(4);

    expect(doubleList.head.data).equal(2);
    // Tail most be last node
    expect(doubleList.tail.data).equal(4);

    expect(doubleList.getLength()).equal(3);
    expect(doubleList.remove(2)).to.have.property('data', 3);
    expect(doubleList.getLength()).equal(2);

    // Head & tail shouldn't change
    expect(doubleList.head.data).equal(2);
    expect(doubleList.tail.data).equal(4);
  });

  it('should remove tail', function() {
    expect(doubleList.add(5).data).equal(5);
    expect(doubleList.tail.data).equal(5);

    expect(doubleList.getLength()).equal(3);
    expect(doubleList.remove(3)).to.have.property('data', 5);
    expect(doubleList.getLength()).equal(2);
    expect(doubleList.tail.data).equal(4);
  });

});

