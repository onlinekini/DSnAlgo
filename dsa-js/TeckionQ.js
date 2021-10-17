// Create a Stack  - where push and pop is O(1) and getMin() is also O(1)

class DoublyLinkedList { 
  constructor(firstNodeValue) {
    let firstNode =  new DoublyLinkedNode(firstNodeValue)
    this.head = firstNode;
    this.tail = firstNode;
    this.minValue =  firstNodeValue;
    this.tail.setMinValue();
  }

  push(value) {
    let aNode = new DoublyLinkedNode(value)
    this.tail.next = aNode;
    aNode.previous = this.tail;
    this.tail = aNode;
    this.tail.setMinValue();
    console.log("added " + this.tail.value + ", min: " + this.getMin()); 
  }

  pop (value) {
    let tempNode = this.tail.previous;
    this.tail = tempNode;
    this.tail.next = null;
  }

  getMin() {
    return this.tail.minValue;
  }

  traverseFront() {
    let pointer = this.head;
    let outputArr = []
    while(pointer !== null) {
      outputArr.push(pointer.value)
      pointer = pointer.next
    }
    return outputArr;
  }

  traverseReverse() {
    let pointer = this.tail;
    let outputArr = []
    while(pointer !== null) {
      outputArr.push(pointer.value)
      pointer = pointer.previous
    }
    return outputArr;
  }

}

class DoublyLinkedNode {
  constructor(nodeValue) {
    this.value = nodeValue;
    this.next = null;
    this.previous = null;
  }

  setMinValue () {
    if(!this.previous) {
      //console.log(" pre Value not found ");
      this.minValue = this.value;
      return;
    }
    if(this.value < this.previous.minValue) {
      //console.log(" Setting Min Value: " + this.value);
      this.minValue = this.value;
    } else {
      this.minValue = this.previous.minValue;
    }
  }
}


const myDbll = new DoublyLinkedList(100);
myDbll.push(90)
myDbll.push(70)
myDbll.push(25)
myDbll.push(20)
myDbll.push(55)
myDbll.push(2)
myDbll.push(12)
myDbll.push(20)
//console.log(myDbll.traverseFront())
console.log(myDbll.getMin())
myDbll.pop()
myDbll.pop()
myDbll.pop()
//console.log(myDbll.traverseReverse())
console.log(myDbll.getMin())