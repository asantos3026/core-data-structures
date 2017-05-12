import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binary_search_tree'

chai.use(chaiChange)

let bst

describe('BinarySearchTree', () => {
  beforeEach('instantiates a new binary search tree before each test', () => {
    bst = new BinarySearchTree()
  })

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert(value)', () => {
    it('inserts a node with the specified value into the tree', () => {
      bst.insert(14)
      bst.insert(21)
      bst.insert(13)

      expect(bst.root).to.eql({value: 14, left: {value: 13, left: null, right: null}, right: {value: 21, left: null, right: null} })
    })
  })

  context('search(value)', () => {
    it('returns the node object once found', () => {
      bst.insert(15)
      bst.insert(12)
      bst.insert(13)
      bst.insert(11)

      expect(bst.search(13)).to.eql({value: 13, left: 12, right: 15})
    })

    it('returns null if the node is not found', () => {

      expect(bst.search(13).to.eql(null))
    })
  })

  context('remove()', () => {
    it('removes a node from the tree if it exiss', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)
      bst.insert(12)
      bst.remove(14)

      expect(bst.root).to.eql({value: 13, left: 12, right: 15})
    })
  })

  context('count', () => {
    it('counts the number of nodes in the tree', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)
      bst.insert(12)
      bst.remove(14)

      expect(bst.count()).to.eql(5)
    })

    it('should return 0 if there are no nodes', () => {

      expect(bst.count()).to.eql(0)
    })
  })

})