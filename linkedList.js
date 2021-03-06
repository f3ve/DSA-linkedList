const _Node = require('./_node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head

      while(tempNode.next !== null) {
        tempNode = tempNode.next
      }

      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    let currNode = this.head

    if(!this.head) {
      return null
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }

    return currNode
  }

  remove(item) {
    if(!this.head) {
      return null
    }

    if(this.head.value === item) {
      this.head = this.head.next
      return
    }

    let currNode = this.head
    let prevNode = this.head

    while((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode
      currNode = currNode.next

    }
    
    if (currNode === null) {
      console.log(`item not found`)
      return
    }

    prevNode.next = currNode.next
  }
}