const _Node = require('./_node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    //create a new node item and set it as head
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {

    //if list is empty insert item as the first item
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      // otherwise starting at the first item
      tempNode = this.head
      //while the next item is not null
      while (tempNode.next !== null) {
        //iterate over the linked list untill the next item is null
        tempNode = tempNode.next
      }
      //then set the new item as the last item
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    let currNode = this.head

    //if the list is empty return null
    if (!this.head) {
      return null
    }

    // while the item in head is not the item we are looking for 
    while (currNode.value !== item) {
      // if the next item is null we could not find the item
      if (currNode.next === null) {
        return null
      } else {
        //work through the list until we reach the end or find the item
        currNode = currNode.next
      }
    }
    // when the item is found return it
    return currNode
  }
  
  remove(item) {

    //if the list is empty return null
    if (!this.head) {
      return null
    }

    // if head is the item we want to remove set the next item as head
    if(this.head.value === item) {
      this.head = this.head.next
      return
    }
    
    let currNode = this.head
    let previousNode = this.head

    //while currNode is not null and is not the item
    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode // track the previous node 
      currNode = currNode.next // iterate to the next node 
    }

    //if the current node is null we could not find the item.
    if (currNode === null) {
      console.log(`Item not found`)
      return
    }
    
    // skip the current node to remove it from the list
    previousNode.next = currNode.next
  }
}