"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashTable = function () {
  function HashTable() {
    _classCallCheck(this, HashTable);

    this.hashTable = {};
  }

  _createClass(HashTable, [{
    key: "put",
    value: function put(key, value) {
      this.hashTable[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.hashTable[key];
    }
  }, {
    key: "contains",
    value: function contains(key) {
      return this.hashTable.hasOwnProperty(key);
    }
  }, {
    key: "iterate",
    value: function iterate(callback) {
      var _this = this;

      var pairs = Object.keys(this.hashTable).map(function (key) {
        return [key, _this.hashTable[key]];
      });
      var result = [];
      pairs.forEach(function (pair) {
        return result.push(callback(pair[0], pair[1]));
      });
      return result;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      delete this.hashTable[key];
    }
  }, {
    key: "size",
    value: function size() {
      return Object.keys(this.hashTable).map(function (key) {
        return key;
      }).length;
    }
  }, {
    key: "hash",
    value: function hash(key) {
      this.hashTable[key] = {};
    }
  }]);

  return HashTable;
}();

exports.default = HashTable;