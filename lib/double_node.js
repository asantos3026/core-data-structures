"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoubleNode = function () {
  function DoubleNode() {
    _classCallCheck(this, DoubleNode);

    this.data = null;
    this.prev = null;
    this.next = null;
  }

  _createClass(DoubleNode, [{
    key: "getData",
    value: function getData(data) {
      return data;
    }
  }, {
    key: "setPrevious",
    value: function setPrevious(data) {
      var currentNode = new DoubleNode();
      currentNode.data = data;
      this.prev = currentNode;
      return this;
    }
  }, {
    key: "setNext",
    value: function setNext(data) {
      var currentNode = new DoubleNode();
      currentNode.data = data;
      this.next = currentNode;
      return this;
    }
  }, {
    key: "getPrevious",
    value: function getPrevious() {
      if (this.prev === null) {
        return null;
      }
      return this.prev;
    }
  }, {
    key: "getNext",
    value: function getNext() {
      if (this.next === null) {
        return null;
      }
      return this.next;
    }
  }]);

  return DoubleNode;
}();

exports.default = DoubleNode;