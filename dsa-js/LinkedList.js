// Create a Stack with push, pop and getMin() as O(1)

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }

  append (value) {
    this.tail.next = new Node(value);
    this.tail  = this.tail.next;
    this.length++;
  }

  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++
  }

  insert(index, value) {
    this.length++;
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    }
    let currNode = this._traverse(index -1)
    let nextNode = currNode.next;
    let newNode = new Node(value)
    currNode.next = newNode;
    newNode.next = nextNode;
  }

  remove(index) {
    this.length--;
    if (index === 0) {
      this.head = this.head.next;
      return;
    } 
    
    if (index >= this.length) {
      index = this.length;
    }
    let currNode = this._traverse(index - 1)
    currNode.next = currNode.next.next;
  }

  _traverse(index) {
    let ctr = 0;
    let currPtr = this.head
    while (ctr != index) {
      currPtr = currPtr.next;
      ctr++;
    }
    return currPtr
  }

  listValues () {
    let currNode = this.head
    let valArr = []
    while(currNode !== null) {
      valArr.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(valArr);
    //console.log("size = " +  this.length);
  }
}

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

const ll = new LinkedList(10);
ll.prepend(1)
ll.append(5)
ll.append(16)

ll.listValues()
ll.insert(2, 99)
ll.listValues()
ll.remove(2)
ll.listValues()

