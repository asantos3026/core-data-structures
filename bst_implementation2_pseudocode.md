//BST Constructor
  // value
  // left
  // right

//Methods
  //insert(value) goal: find it's proper place
  //if value < current
    //if(left) go left
      //this.left.insert(value)
    //else insert on current's left
  //if value > current
    //if(right) go right
    //else insert new tree w/ value
    //add to current's right

  //contains => returns true or false
    //if (current value === value?)
      //return true
    //else check if it is >
      //"go right" this.right.contains(value)
    //check if it is <
      //"go left" this.left.contains(value)



// Binary Search Tree
// class BinarySearchTree {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }

// O(log(n))
  // insert(value) {
  //   if (value <= this.value) {
  //     if (this.left) this.left.insert(value)
  //     else this.left = new BinarySearchTree(value)
  //   }
  //   else {
  //     if (this.right) this.right.insert(value)
  //     else this.right = new BinarySearchTree(value)
  //   }
  //   return this
  // }

// // O(log(n));
//   contains(value) {
//     if (this.value === value) return true
//     if (value < this.value) {
//       // if this.left doesn't exist return false
//       // if it does exist, check if its subtree contains the value
//       return !!this.left && this.left.contains(value)
//     }
//     if (value > this.value) {
//       // if this.right doesn't exist return false
//       // if it does exist, check if its subtree contains the value
//       return !!this.right && this.right.contains(value)
//     }
//     return false
//   }
