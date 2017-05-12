'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.left = null;
  this.right = null;
};

var BinarySearchTree = function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
  }

  _createClass(BinarySearchTree, [{
    key: 'insert',
    value: function insert(value) {
      var node = new Node(value);
      var current = void 0;

      if (this.root === null) {
        this.root = node;
      } else {
        current = this.root;

        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = node;
              break;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = node;
              break;
            } else {
              current = current.right;
            }
          } else {
            break;
          }
        }
      }
    }
  }, {
    key: 'search',
    value: function search(value) {
      var found = false;
      var current = this.root;

      while (!found && current) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      return current;
    }
  }, {
    key: 'remove',
    value: function remove(value) {
      var found = false;
      var current = this.root;
      var parent = null;
      var lastDirection = null;
      var childCount = void 0;
      var replacement = void 0;
      var replacementParent = void 0;

      while (!found && current) {
        if (value < current.value) {
          parent = current;
          lastDirection = 'left';
          current = current.left;
        } else if (value > current.value) {
          parent = current;
          lastDirection = 'right';
          current = current.right;
        } else {
          found = true;
        }
      }

      if (found) {
        childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

        if (current === this.root) {
          switch (childCount) {
            case 0:
              this.root = null;
              break;
            case 1:
              this.root = current.right === null ? current.left : current.right;
              break;
            case 2:
              replacement = this.root.left;

              while (replacement.right !== null) {
                replacementParent = replacement;
                replacement = replacement.right;
              }

              if (replacementParent !== null) {
                replacementParent.right = replacement.left;

                replacement.right = this.root.right;
                replacement.left = this.root.left;
              } else {
                replacement.right = this.root.right;
              }

              this.root = replacement;
          }
        } else {
          switch (childCount) {
            case 0:
              if (current.value < parent.value) {
                parent.left = null;
              } else {
                parent.right = null;
              }
              break;
            case 1:
              if (current.value < parent.value) {
                parent.left = current.left === null ? current.right : current.left;
              } else {
                parent.right = current.left === null ? current.right : current.left;
              }
              break;
            case 2:
              replacement = current.left;
              replacementParent = current;

              while (replacement.right !== null) {
                replacementParent = replacement;
                replacement = replacement.right;
              }

              replacementParent.right = replacement.left;

              replacement.right = current.right;
              replacement.left = current.left;
              if (current.value < parent.value) {
                parent.left = replacement;
              } else {
                parent.right = replacement;
              }
          }
        }
      }
    }
  }, {
    key: 'traverse',
    value: function traverse(order, callback) {

      function inOrder(node) {
        if (node) {
          if (node.left !== null) {
            inOrder(node.left);
          }
          callback.call(this, node);
          if (node.right !== null) {
            inOrder(node.right);
          }
        }
      }

      function preOrder(node) {
        callback.call(this, node);
        if (node) {
          if (node.left !== null) {
            preOrder(node.left);
          }
          if (node.right !== null) {
            preOrder(node.right);
          }
        }
      }

      function postOrder(node) {
        if (node) {
          if (node.left !== null) {
            postOrder(node.left);
          }
          if (node.right !== null) {
            postOrder(node.right);
          }
          callback.call(this, node);
        }
      }

      switch (order) {
        case 'inOrder':
          inOrder(this.root);
          break;
        case 'preOrder':
          preOrder(this.root);
          break;
        case 'postOrder':
          postOrder(this.root);
          break;
        default:
          console.log('Error: ' + order + ' is not a defined order for the traverse method.');
      }
    }
  }, {
    key: 'count',
    value: function count() {
      var accumulator = 0;

      function countNodes(node) {
        if (node) {
          if (node.left !== null) {
            countNodes(node.left);
          }
          accumulator += 1;
          if (node.right !== null) {
            countNodes(node.right);
          }
        }
      }
      countNodes(this.root);
      return accumulator;
    }
  }]);

  return BinarySearchTree;
}();

exports.default = BinarySearchTree;