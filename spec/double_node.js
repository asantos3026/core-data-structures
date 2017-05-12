import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoubleNode from '../src/double_node'

chai.use(chaiChange)

describe('DoubleNode()', () => {

  it('is a function', () => {
    const doubNode = new DoubleNode(15)
    expect(DoubleNode).to.be.a('function')
  })

  it('changes the reference to the previous node and returns the original node', () => {
    const doubNode = new DoubleNode()
    doubNode.setPrevious(14)
    expect(doubNode.getPrevious().data).to.eql(14)
  })

  it('returns null  if no next node', () => {
    const doubNode = new DoubleNode()
    expect(doubNode.getNext()).to.eql(null)
  })

})