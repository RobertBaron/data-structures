import SinglyList from '../src/SinglyList';

describe('Single List', function () {

  let singlyList;
  before(function () {
    singlyList = new SinglyList();
  });

  it('Should initialize correctly', function(){
    expect(singlyList.getLength()).equal(0);
    expect(singlyList.head).equal(null);
  });

  it('should add new elements', function () {
    expect(singlyList.getLength()).equal(0);
    // Add the element that returns a node
    expect(singlyList.add(1).data).equal(1);
    // Check the length of the list
    expect(singlyList.getLength()).equal(1);
  });

  it('should throw error accessing invalid position', function() {
    // List has one element
    expect(singlyList.getLength()).equal(1);
    // -1 :(
    expect(function(){
      singlyList.searchAt(-1)
    }).to.throw('Invalid position for list');
    // Exceeds size
    expect(function(){
      singlyList.searchAt(3)
    }).to.throw('Invalid position for list');
  });

  it('should search by position', function() {
    expect(singlyList.getLength()).equal(1);
    expect(singlyList.searchAt(1)).to.have.property('data', 1);
  });

  it('should remove head', function() {
    expect(singlyList.remove(1)).to.have.property('data', 1);
    expect(singlyList.getLength()).equal(0);
    expect(function(){
      singlyList.remove(1)
    }).to.throw('Invalid position for list');
  });

  it('should remove in center', function() {
    expect(singlyList.getLength()).equal(0);

    singlyList.add(1);
    singlyList.add(2);
    singlyList.add(3);

    expect(singlyList.getLength()).equal(3);
    expect(singlyList.remove(2)).to.have.property('data', 2);
    expect(singlyList.getLength()).equal(2);
  });

  it('should remove at end', function() {
    expect(singlyList.remove(2)).to.have.property('data', 3);
    expect(singlyList.getLength()).equal(1);
  });

});
