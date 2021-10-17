// Create a Stack with push, pop and getMin() as O(1)

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
  }

  append (value) {
    this.tail.next = new Node(value);
    this.tail  = this.tail.next;
  }

  prependNode(newHead) {
    newHead.next = this.head;
    this.head = newHead;
  }


  reverse() {
    let nxtHead = this.head.next;
    this.tail = this.head;
    
    let i = 0;
      
    while(nxtHead) {
      let temp = nxtHead.next
      this.prependNode(nxtHead)
      nxtHead = temp
    }
    this.tail.next = null;

  }

  listValues () {
    let currNode = this.head
    let valArr = []
    while(currNode !== null) {
      valArr.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(valArr);
  }
}

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

const ll = new LinkedList(10);
ll.append(5)
ll.append(16)
ll.append(22)
ll.append(38)
ll.append(48)
ll.append(35)

//console.log(ll)
ll.listValues()

ll.reverse()

ll.listValues();

