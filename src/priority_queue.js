class Node {
  constructor(node, priority){
    this.node = node
    this.priority = priority
  }
}

class PriorityQueue {
  constructor(){
    this.queue = []
  }

  enqueue(node, priority = 0){
    const newNode = new Node(node, priority)
    let newQueue = this.queue

    newQueue.push(newNode)

    newQueue = newQueue.sort((a, b) => {
      if(a.priority < b.priority) return 1
      if(a.priority > b.priority) return - 1
      if(a.priority = b.priority) return 0
    })

    return newQueue
  }

  front(){
    return this.queue[0].node
  }

  back(){
    return this.queue[this.queue.length-1].node
  }

  dequeue(){
    return this.queue.shift() || null
  }

  isEmpty(){
    return (this.queue.length === 0)
  }

  length(){
    return this.queue.length
  }
}

// const pqueue = new PriorityQueue()
// pqueue.enqueue('Sabrin', 10)
// pqueue.enqueue('Pizza', 3)
// pqueue.enqueue('Jas', 1)
// pqueue.enqueue('Aileen', 12)
// console.log(pqueue)

export default PriorityQueue