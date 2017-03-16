import SinglyList from '../src/Singly-list';

describe('Test Single List functionallity', function () {

  let singlyList;
  before(function () {
    singlyList = new SinglyList();
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
    expect(singlyList.searchAt(1)).to.have.property('data');
  });

});