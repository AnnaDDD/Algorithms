// Задача getMin().
// Реализовать структуру данных SpecialStack, которая поддерживает все операции со стеком, 
// такие как push(), pop(), isEmpty(), … и дополнительную операцию getMin(), 
// которая должна возвращать минимальный элемент из SpecialStack. 
// Чтобы реализовать SpecialStack, используйте структуру данных Stack, реализованную ранее в классе.

  class Stack {
    items = [];
    minItems = [];
    maxItems = [];
  
    push(element) {
      if (
        this.items.length === 0 ||
        element <= this.minItems[this.minItems.length - 1]
      )
        this.minItems = [...this.minItems, element];
      if (
        this.items.length === 0 ||
        element >= this.maxItems[this.maxItems.length - 1]
      )
        this.maxItems = [...this.maxItems, element];
      this.items = [...this.items, element];
      return this.items.length;
    }
  
    pop() {
      if (this.items.length === 0) throw new Error("The array is already emoty");
      if (
        this.items[this.items.length - 1] ==
        this.minItems[this.minItems.length - 1]
      )
        this.minItems.splice(this.minItems.length - 1, 1);
      if (
        this.items[this.items.length - 1] ==
        this.maxItems[this.maxItems.length - 1]
      )
        this.maxItems.splice(this.maxItems.length - 1, 1);
      return this.items.splice(this.items.length - 1, 1);
    }
  
    isEmpty() {
      return this.items.length == 0;
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    clear() {
      this.items = [];
    }
  
    getMin1() {
      let min = this.items[0];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] < min) min = this.items[i];
      }
      return min;
    }
    getMax1() {
      let max = this.items[0];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] > max) max = this.items[i];
      }
      return max;
    }
    getMin2() {
      return this.minItems[this.minItems.length - 1];
    }
    getMax2() {
      return this.maxItems[this.maxItems.length - 1];
    }
  }
  
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(0);
  stack.push(7);
  console.log(stack.getMax2());
  stack.pop();
  console.log(stack.getMax2());
  stack.pop();
  console.log(stack.getMax2());

class SpecialStack {
    constructor() {
        this.stack = new Stack();
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    getMin() {
        return this.stack.getMin2(); 
    }

    getMax() {
        return this.stack.getMax2(); 
    }
}


const specialStack = new SpecialStack();
console.log(specialStack.isEmpty());  

specialStack.push(1);
specialStack.push(2);
specialStack.push(3);
specialStack.push(0);
specialStack.push(7);

console.log(specialStack.getMax());  

specialStack.pop();
console.log(specialStack.getMax()); 

specialStack.pop();
console.log(specialStack.getMax());  
