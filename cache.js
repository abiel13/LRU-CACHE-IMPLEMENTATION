class Node {
  constructor(key, value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.key = key;
  }
}

// Define a linked list
class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  delete(node) {
    if (this.head === node && this.tail === node) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = node.next;
      node.next.prev = null;
    } else if (this.tail === node) {
      this.tail = node.prev;
      node.prev.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
  }
}

// Has a constructor that takes maximum size of the cache and evicts using LRU (least recently used) when the cache is full
export class TCache {
  constructor(maxSize) {
    this.size = maxSize;
    this.cache = new Linkedlist();
  }

  // Get a particular cache node and move it to the top
  get(key) {
    let current = this.cache.head;
    while (current) {
      if (current.key === key) {
        this.cache.delete(current);
        this.cache.insert(current);
        return current.value; // Return the value
      }
      current = current.next;
    }
    return null;
  }

  set(key, value) {
    const node = new Node(key, value);

    if (this.cache.head == null) {
      this.cache.insert(node);
    } else {
      let current = this.cache.head;
      // Update cache if it already exists and move it to the top to make it MRU
      while (current) {
        if (current.key === key) {
          current.value = value;
          this.cache.delete(current);
          this.cache.insert(current);
          return this;
        }
        current = current.next;
      }
      // Move to MRU  if it doesnt already exist
      this.cache.insert(node);
      // Remove the LRU
      if (this.cache.length > this.size) {
        this.evict();
      }
    }
  }

  evict() {
    // this function removes the LRU
    this.cache.delete(this.cache.head);
  }
}
