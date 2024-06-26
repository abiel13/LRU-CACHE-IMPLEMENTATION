# LRU Cache Implementation (Please Click deployments Tab to view Visualization)

Welcome to the LRU Cache Implementation project! This repository contains a minimal  Least Recently Used (LRU) cache built using a doubly linked list  This project provides an efficient way to manage cache data, ensuring that the most recently accessed items are quickly available while removing the least recently used items when the cache reaches its capacity.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code Explanation](#code-explanation)
6. [Visualization](#visualization)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

An LRU Cache is a data structure that stores a limited number of items. When the cache is full and a new item needs to be added, it removes the least recently used (LRU) item to make space. Additionally, if an existing item is accessed or updated, it moves to the most recently used (MRU) position.

## Features

- Efficient caching mechanism
- Doubly linked list for maintaining order of usage
- Simple and clean code structure
- Visualization of the cache operations (please click deployments on the right tab to view)
  

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/abiel13/LRU-CACHE-IMPLEMENTATION.git
    ```
2. Navigate to the project directory:
    ```sh
    cd LRU-CACHE-IMPLEMENTATION
    ```

## Usage

To use the LRU Cache in your project, you can import and instantiate it as follows:

```javascript
import { TCache } from './TCache';

const cache = new TCache(3); // Create a cache with a maximum size of 3

cache.set(1, 'A'); // Add item with key 1 and value 'A'
cache.set(2, 'B'); // Add item with key 2 and value 'B'
cache.set(3, 'C'); // Add item with key 3 and value 'C'

console.log(cache.get(1)); // Access item with key 1, outputs: 'A'
cache.set(4, 'D'); // Add item with key 4, removes the least recently used item

console.log(cache.get(2)); // Access item with key 2, outputs: null (removed)
