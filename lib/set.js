"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
  function Set() {
    _classCallCheck(this, Set);

    this.set = [];
  }

  _createClass(Set, [{
    key: "add",
    value: function add(value) {
      var match = this.set.find(function (member) {
        return member === value;
      });
      if (!match) this.set.push(value);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var empty = this.set.length === 0 ? true : false;
      return empty;
    }
  }, {
    key: "contains",
    value: function contains(value) {
      var match = this.set.find(function (member) {
        return member === value;
      });
      if (!match) return false;
      return true;
    }
  }, {
    key: "remove",
    value: function remove(value) {
      var match = this.set.find(function (member) {
        return member === value;
      });
      var index = this.set.indexOf(match);
      this.set.splice(index, 1);
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var newSet = this.set.map(function (member) {
        return callback(member);
      });
      this.set = newSet;
    }
  }, {
    key: "size",
    value: function size() {
      return this.set.length;
    }
  }, {
    key: "union",
    value: function union(otherSet) {
      var newSet = this.set;
      otherSet.set.forEach(function (member) {
        var match = newSet.find(function (value) {
          return member === value;
        });
        if (!match) newSet.push(member);
      });
      return newSet;
    }
  }, {
    key: "intersect",
    value: function intersect(otherSet) {
      var _this = this;

      var newSet = [];
      otherSet.set.forEach(function (member) {
        var match = _this.set.find(function (value) {
          return member === value;
        });
        if (match) newSet.push(member);
      });
      return newSet;
    }
  }, {
    key: "difference",
    value: function difference(otherSet) {
      var newSet = this.set;
      otherSet.set.forEach(function (member) {
        var match = newSet.find(function (value) {
          return member === value;
        });
        var index = newSet.indexOf(match);
        if (match) newSet.splice(index, 1);
      });
      return newSet;
    }
  }, {
    key: "isSubset",
    value: function isSubset(otherSet) {
      var subset = true;
      this.set.forEach(function (member) {
        var match = otherSet.set.find(function (value) {
          return member === value;
        });
        if (!match) subset = false;
      });
      return subset;
    }
  }, {
    key: "clone",
    value: function clone() {
      var newSet = [];
      this.set.forEach(function (value) {
        return newSet.push(value);
      });
      return newSet;
    }
  }]);

  return Set;
}();

exports.default = Set;