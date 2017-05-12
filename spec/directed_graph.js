import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directed_graph'

chai.use(chaiChange)

  let dirGraph

describe.only('DirectedGraph', () => {
  beforeEach(() => {
    dirGraph = new DirectedGraph()
  })

  context('addVertex', () => {

    it('adds a vertex to the graph', () => {
      dirGraph.addVertex('v1')
      expect(dirGraph.vertices).to.eql(['v1'])
    })

  })

  context('hasVertex', () => {

    it('returns true if the graph contains the vertex', () => {
      dirGraph.addVertex('v1')

      expect(dirGraph.hasVertex('v1')).to.eql(true)
    })

    it('returns false if the graph does not contain the vertex', () => {
      expect(dirGraph.hasVertex('v1')).to.eql(false)
    })

  })

  context('addDirection', () => {

    it('adds a direction to the graph', () => {
      dirGraph.addVertex('v1')
      dirGraph.addDirection('v1', 'v2', 3)

      expect(dirGraph.hasVertex('v1')).to.eql(true)
    })

  })

  context('hasDirection', () => {
    it('returns false if the direction does not exist', () => {
      expect(dirGraph.hasDirection('v1', 'v2')).to.eql(false)
    })
    it('returns true if the direction exists', () => {
      dirGraph.addDirection('v1', 'v2', 3)

      expect(dirGraph.hasDirection('v1', 'v2')).to.eql(true)
    })
  })


  // context('getDirectionWeight', () => {
  //   it('returns null if no direction exists', () => {
  //     expect(dirGraph.getDirectionWeight('v1', 'v2')).to.eql(null)
  //   })
  //   it('returns the direction weight', () => {
  //     dirGraph.addDirection('v1', 'v2', 3)

  //     expect(dirGraph.getDirectionWeight('v1', 'v2')).to.eql(3)
  //   })
  // })

  context('visit', () => {
    it('visits the connected vertices and applies the function on each', () => {
      dirGraph.addDirection(1, 2, 3)
      dirGraph.addDirection(1, 3, 2)
      dirGraph.visit(1, (a) => a + 3 )

      expect(dirGraph.directions[0]).to.eql({ vertices: { vertex1: 1, vertex2: 2 }, weight: 3 })
    })
  })

  context('removeDirection', () => {
    it('removes an existing direction between vertices', () => {
        dirGraph.addDirection('v1', 'v2', 3)
        dirGraph.addDirection('v3', 'v4', 3)
        dirGraph.removeDirection('v1', 'v2')
      expect(dirGraph.directions[0].weight).to.eql(3)
    })
  })

  context('getSeparatedVertices', () => {
    it('returns an array of all vertices not connected to other nodes', () => {
      dirGraph.addVertex('v1')
      dirGraph.addDirection('v1', 'v2', 3)
      dirGraph.addVertex('v3')

      expect(dirGraph.getSeparatedVertices()).to.eql(['v3'])
    })
  })

  context('removeVertex', () => {
    it('removes a vertex and all directions', () => {
      dirGraph.addDirection('v3', 'v1', 2)
      dirGraph.addDirection('v3', 'v2', 2)
      dirGraph.addDirection('v1', 'v2', 3)
      dirGraph.removeVertex('v1')

      expect(dirGraph.directions[0].vertices).to.eql({ vertex1: 'v3', vertex2: 'v1' })
    })
  })

  context('count', () => {
    it('returns the number of vertices in the graph', () => {
      dirGraph.addVertex('v1')
      dirGraph.addDirection('v2' , 'v3', 1)

      expect(dirGraph.count()).to.eql(1)
    })
  })

  context('findShortestPath', () => {
    it('returns an array of the shortest paths between vertices', () => {
      dirGraph.addDirection('v1', 'v2', 1)
      dirGraph.addDirection('v2', 'v3', 1)
      dirGraph.addDirection('v1', 'v3', 2)

      expect(dirGraph.findShortestPath('v1', 'v3')).to.eql([ [ { vertex1: 'v1', vertex2: 'v2' }, { vertex1: 'v2', vertex2: 'v3' } ], { vertex1: 'v1', vertex2: 'v3' } ])
    })
  })

})