# including-range-array

**including-range-array** is a simple module, which adds two new methods, namely `range()` and `random()`.

## Usage

You start using this module by **requiring** it (as every other npm module), like so:

```js
const { range, random } = require("including-range-array")
```

### The `range(max, min = 0)` method

To use the `range()` method, you use it in this way:

```js
range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// You can also specify a 'min' number
range(10, 4) // => [4, 5, 6, 7, 8, 9, 10]
```

### The `random(max, min = 0)` method

The `random()` method returns a random number between the specified range.
To use it, instead, you do like this:

```js
random(10) // => 6

// You can also specify a 'min' number
random(10, 4) // => 8
```