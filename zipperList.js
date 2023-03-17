
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

const v = new Node (6); 
const w = new Node(7); 
const x = new Node(8); 
const y = new Node(9); 
const z = new Node(10)

v.next = w ; 
w.next = x; 
x.next = y ; 
y.next = z


a.next = b ;
b.next = c; 
c.next = d; 
d.next = e;

const zipperLists = (head1, head2) => {
    let tail = head1 ; 
    let current1 = head1.next; 
    let current2 = head2; 
    let count = 0; 

    while(current1 != null && current2 != null) {
        if (count % 2 == 0) {
            tail.next = current2 ; 
            current2 = current2.next ; 
        }

        else {
            tail.next = current1 ;
            current1 = current1.next; 
        }

        tail = tail.next ; 
        count++; 
    }

    if(current1 != null) tail.next = current1 ; 
    if(current2 != null) tail.next = current2 ;

    return head1; 
}

console.log(zipperLists(a, v))   