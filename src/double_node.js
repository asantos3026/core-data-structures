class DoubleNode {
  constructor() {
    this.data = null
    this.prev = null
    this.next = null
  }

  getData(data) {
    return data
  }

  setPrevious(data) {
    const currentNode = new DoubleNode()
    currentNode.data = data
    this.prev = currentNode
    return this
  }

  setNext(data) {
    const currentNode = new DoubleNode()
    currentNode.data = data
      this.next = currentNode
      return this
    }

  getPrevious() {
    if (this.prev === null) {
      return null
    }
    return this.prev
  }

  getNext() {
    if (this.next === null) {
      return null
    }
    return this.next
  }

}

export default DoubleNode