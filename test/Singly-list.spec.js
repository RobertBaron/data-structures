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

});