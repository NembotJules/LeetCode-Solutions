
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}

const a = new Node (1); 
const b = new Node(2); 
const c = new Node(3); 
const d = new Node(4); 
const e = new Node(5)

a.next = b ;
b.next = c; 
c.next = d; 
d.next = e; 



// const reverseLinkedList = (head) => {
  
//   let prev = null; 
//   let current = head; 


//   while(current!= null) {
//    let next = current.next ; 
//    current.next = prev; // Changing the arrow orientation...
//    prev = current; // Moving the pointer forward...
//    current = next; // Moving the pointer forward...
    
//   }
//   return prev; 
// }

// Recursive Approach...

const reverseLinkedList = (head, prev = null) => {
    if(head === null) return prev; 
    const next = head.next; 
    head.next = prev  ;
    return reverseLinkedList(next, head); 
}

console.log(reverseLinkedList(a))
console.log(d.next)