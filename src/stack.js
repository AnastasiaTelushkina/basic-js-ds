const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() { 
    this._size = 0;
    this._storage = {};
  }
  push(element) {  
    let size = this._size++; 
    this._storage[size] = element;
    console.log(this._storage[size])
  }

  pop() { 
    let size = this._size - 1;
    let deletedData; 
    if (size > 0) {
        deletedData = this._storage[size]; 
        delete this._storage[size]; 
        this._size--;
        return deletedData;
    }
  }

  peek() { 
    return this._storage[this._size - 1];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.pop());
module.exports = {
  Stack
};
