// Завершить реализацию функционала:
// find(key)
// insert(key, value)
// delete(value)
// print(node).

class Tree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      let current = this;
      while (true) {
        if (value < current.value) {
          if (current.left !== null) current = current.left;
          else {
            current.left = new Tree(value);
            return;
          }
        } else {
          if (current.right !== null) current = current.right;
          else {
            current.right = new Tree(value);
            return;
          }
        }
      }
    }
  
    find(value) {
      let current = this;
      while (true) {
        if (value === current.value) return true;
        if (value < current.value) {
          if (current.left !== null) current = current.left;
          else return false;
        } else {
          if (current.right !== null) current = current.right;
          else return false;
        }
      }
    }
  
    delete(value) {
      let parent = null;
      let current = this;
  
      while (current !== null) {
        if (value === current.value) {
          if (current.left === null && current.right === null) {
            if (parent === null) {
              return "cannot delete root node";
            } else if (parent.left === current) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            return "success";
          } else if (current.left !== null && current.right !== null) {
            let minValueNode = current.right;
            while (minValueNode.left !== null) {
              minValueNode = minValueNode.left;
            }
            current.value = minValueNode.value;
            value = minValueNode.value; 
            parent = current; 
            current = current.right;
          } else {
            const child = current.left !== null ? current.left : current.right;
            if (parent === null) {
              this.value = child.value;
              this.left = child.left;
              this.right = child.right;
            } else if (parent.left === current) {
              parent.left = child;
            } else {
              parent.right = child;
            }
            return "success";
          }
        } else if (value < current.value) {
          parent = current;
          current = current.left;
        } else {
          parent = current;
          current = current.right;
        }
      }
  
      return "not found";
    }
  
    print(node) {
      if (node === null) {
        return;
      }
      this.print(node.left);
      console.log(node.value);
      this.print(node.right);
    }
}
  
let tree = new Tree(5);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
tree.insert(8);
  
console.log(tree.right.right.left.value); 
tree.delete(8); 
console.log(tree.find(8)); 
tree.print(tree); 
  