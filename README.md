# Linked List Implementation

[![GitHub License](https://img.shields.io/github/license/top-submissions/fullstackjs-linked-list)](https://github.com/top-submissions/fullstackjs-linked-list/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/top-submissions/fullstackjs-linked-list)](https://github.com/top-submissions/fullstackjs-linked-list/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/top-submissions/fullstackjs-linked-list)](https://github.com/top-submissions/fullstackjs-linked-list/pulls)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/top-submissions/fullstackjs-linked-list)](https://github.com/top-submissions/fullstackjs-linked-list/commits)
[![GitHub Stars](https://img.shields.io/github/stars/top-submissions/fullstackjs-linked-list)](https://github.com/top-submissions/fullstackjs-linked-list/stargazers)
[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org/)

> A comprehensive JavaScript implementation of the Linked List data structure with full test coverage and practical examples.

## 📖 Table of Contents

- [Linked List Implementation](#linked-list-implementation)
  - [📖 Table of Contents](#-table-of-contents)
  - [🎯 About](#-about)
  - [✨ Features](#-features)
  - [📋 Prerequisites](#-prerequisites)
  - [🔧 Installation](#-installation)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install dependencies (optional)](#2-install-dependencies-optional)
  - [💻 Usage](#-usage)
    - [Basic Example](#basic-example)
    - [Running the Demo](#running-the-demo)
    - [Method Examples](#method-examples)
  - [🧪 Testing](#-testing)
  - [🛠️ Built With](#️-built-with)
  - [📄 License](#-license)

## 🎯 About

This project implements a **Linked List** data structure in JavaScript as part of [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript curriculum. While JavaScript arrays are dynamic and flexible, understanding linked lists provides a solid foundation for learning more complex data structures like graphs and binary trees.

A linked list is a linear collection of data elements called nodes, where each node contains:

- A **value** (the data)
- A **pointer** to the next node in the sequence

This implementation uses ES6 modules and is compatible with Node.js v22+.

**Key Concepts:**

- Dynamic data structure that grows and shrinks at runtime
- Efficient insertion and deletion at any position
- No need for contiguous memory allocation
- Foundation for understanding more complex data structures

## ✨ Features

- **Core Operations** - append, prepend, insert, remove, and traverse nodes
- **Index-based Access** - retrieve nodes by position with `at(index)`
- **Search Operations** - find values and their indices with `contains()` and `findIndex()`
- **Flexible Insertion** - insert multiple values at any index with `insertAt()`
- **String Representation** - visualize the list with `toString()`
- **ES6 Module Support** - modern JavaScript syntax with import/export
- **Comprehensive Examples** - practical usage demonstrations in `main.js`
- **Error Handling** - proper boundary checks and error messages

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** `>= 22.0.0` - [Download here](https://nodejs.org/)
- **Git** - For version control
- A code editor (VS Code, Sublime Text, etc.)

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/top-submissions/fullstackjs-linked-list.git
cd fullstackjs-linked-list
```

### 2. Install dependencies (optional)

This project has no external dependencies and runs with vanilla JavaScript.

```bash
# If you add testing frameworks or linters later
npm install
```

## 💻 Usage

### Basic Example

```javascript
import { LinkedList } from './LinkedList.js';

// Create a new linked list
const list = new LinkedList();

// Add elements
list.append("dog");
list.append("cat");
list.prepend("bird");

// Display the list
console.log(list.toString());
// Output: ( bird ) -> ( dog ) -> ( cat ) -> null

// Get list size
console.log(list.size()); // 3

// Access elements
console.log(list.at(1)); // "dog"
console.log(list.head()); // "bird"
console.log(list.tail()); // "cat"
```

### Running the Demo

Execute the test file to see the linked list in action:

```bash
node main.js
```

### Method Examples

```javascript
// Check if value exists
list.contains("dog"); // true

// Find index of value
list.findIndex("cat"); // 2

// Insert at specific position
list.insertAt(1, "hamster", "snake");
console.log(list.toString());
// ( bird ) -> ( hamster ) -> ( snake ) -> ( dog ) -> ( cat ) -> null

// Remove by index
list.removeAt(2);
console.log(list.toString());
// ( bird ) -> ( hamster ) -> ( dog ) -> ( cat ) -> null

// Remove first element
list.pop(); // Returns "bird"
```

## 🧪 Testing

Test your implementation by running:

```bash
node main.js
```

Expected output:

```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

You can add your own test cases in `main.js` or create additional test files in the `examples/` directory.

## 🛠️ Built With

- **JavaScript ES6+** - Modern JavaScript features (classes, modules)
- **Node.js** - JavaScript runtime environment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for The Odin Project

</div>
