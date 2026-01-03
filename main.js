import { LinkedList } from './LinkedList.js';

// Create a new linked list instance
const list = new LinkedList();

console.log('=== Testing Linked List Implementation ===\n');

// Test 1: Basic append (as per Odin Project requirements)
console.log('1. Building the list with append:');
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
console.log(list.toString());
console.log(
  'Expected: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null\n'
);

// Test 2: Size
console.log('2. Testing size():');
console.log(`Size: ${list.size()}`);
console.log('Expected: 6\n');

// Test 3: Head and Tail
console.log('3. Testing head() and tail():');
console.log(`Head: ${list.head()}`);
console.log(`Tail: ${list.tail()}`);
console.log('Expected: Head: dog, Tail: turtle\n');

// Test 4: Access by index
console.log('4. Testing at(index):');
console.log(`at(0): ${list.at(0)}`);
console.log(`at(2): ${list.at(2)}`);
console.log(`at(5): ${list.at(5)}`);
console.log(`at(10): ${list.at(10)}`);
console.log('Expected: dog, parrot, turtle, undefined\n');

// Test 5: Prepend
console.log('5. Testing prepend():');
list.prepend('bird');
console.log(list.toString());
console.log(
  'Expected: ( bird ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null\n'
);

// Test 6: Contains
console.log('6. Testing contains():');
console.log(`Contains "cat": ${list.contains('cat')}`);
console.log(`Contains "elephant": ${list.contains('elephant')}`);
console.log('Expected: true, false\n');

// Test 7: FindIndex
console.log('7. Testing findIndex():');
console.log(`Index of "parrot": ${list.findIndex('parrot')}`);
console.log(`Index of "elephant": ${list.findIndex('elephant')}`);
console.log('Expected: 3, -1\n');

// Test 8: Pop
console.log('8. Testing pop():');
const popped = list.pop();
console.log(`Popped value: ${popped}`);
console.log(list.toString());
console.log('Expected: bird removed, list starts with dog\n');

// Test 9: InsertAt (Extra Credit)
console.log('9. Testing insertAt() - Extra Credit:');
list.insertAt(1, 'rabbit', 'mouse');
console.log(list.toString());
console.log('Expected: rabbit and mouse inserted at index 1\n');

// Test 10: RemoveAt (Extra Credit)
console.log('10. Testing removeAt() - Extra Credit:');
list.removeAt(2);
console.log(list.toString());
console.log('Expected: Element at index 2 removed\n');

// Test 11: Edge cases
console.log('11. Testing edge cases:');
const emptyList = new LinkedList();
console.log(`Empty list toString(): "${emptyList.toString()}"`);
console.log(`Empty list head(): ${emptyList.head()}`);
console.log(`Empty list tail(): ${emptyList.tail()}`);
console.log(`Empty list pop(): ${emptyList.pop()}`);
console.log(`Empty list size(): ${emptyList.size()}`);
console.log('Expected: empty string, undefined, undefined, undefined, 0\n');

// Test 12: Error handling
console.log('12. Testing error handling:');
try {
  list.insertAt(-1, 'invalid');
} catch (error) {
  console.log(`insertAt(-1) threw: ${error.message}`);
}

try {
  list.insertAt(100, 'invalid');
} catch (error) {
  console.log(`insertAt(100) threw: ${error.message}`);
}

try {
  list.removeAt(-1);
} catch (error) {
  console.log(`removeAt(-1) threw: ${error.message}`);
}

try {
  list.removeAt(100);
} catch (error) {
  console.log(`removeAt(100) threw: ${error.message}`);
}
console.log('Expected: All operations should throw RangeError\n');

console.log('=== All Tests Complete ===');
