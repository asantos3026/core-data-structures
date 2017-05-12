"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(node, priority) {
  _classCallCheck(this, Node);

  this.node = node;
  this.priority = priority;
};

var PriorityQueue = function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    this.queue = [];
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(node) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var newNode = new Node(node, priority);
      var newQueue = this.queue;

      newQueue.push(newNode);

      newQueue = newQueue.sort(function (a, b) {
        if (a.priority < b.priority) return 1;
        if (a.priority > b.priority) return -1;
        if (a.priority = b.priority) return 0;
      });

      return newQueue;
    }
  }, {
    key: "front",
    value: function front() {
      return this.queue[0].node;
    }
  }, {
    key: "back",
    value: function back() {
      return this.queue[this.queue.length - 1].node;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.queue.shift() || null;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.queue.length === 0;
    }
  }, {
    key: "length",
    value: function length() {
      return this.queue.length;
    }
  }]);

  return PriorityQueue;
}();

// const pqueue = new PriorityQueue()
// pqueue.enqueue('Sabrin', 10)
// pqueue.enqueue('Pizza', 3)
// pqueue.enqueue('Jas', 1)
// pqueue.enqueue('Aileen', 12)
// console.log(pqueue)

exports.default = PriorityQueue;