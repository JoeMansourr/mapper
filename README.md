# Mapper

**Mapper** is an npm package designed to simplify the process of mapping properties between objects in JavaScript. It provides a set of functions that allow you to easily map properties from one object to another, whether you need shallow or deep property mapping.

## Installation

You can install Mapper via npm or yarn:

```bash
# Installation
npm install mapper
or
yarn add mapper
```

# Usage:
To use Mapper, you can import the functions you need and integrate them into your project. Below are some examples of how to use Mapper:

## Shallow Property Mapping
```
import { mapObjects } from 'mapper';

const sourceObject = {
  name: 'John Doe',
  age: 30,
};

const targetObject = {
  name: '',
  country: 'USA',
};

mapObjects(sourceObject, targetObject);

console.log(targetObject);
// Output: { name: 'John Doe', country: 'USA' }
```

## Deep Property Mapping
```
import { deepMapObjects } from 'mapper';

const sourceObject = {
  user: {
    name: 'John Doe',
    age: 30,
  },
};

const targetObject = {
  user: {
    name: '',
    country: 'USA',
  },
};

deepMapObjects(sourceObject, targetObject);

console.log(targetObject);
// Output: { user: { name: 'John Doe', country: 'USA' } }
```

# Functions

Mapper provides the following functions:

  - mapObjects(sourceObject, targetObjects): Shallow property mapping between objects.
  - deepMapObjects(sourceObject, targetObjects): Deep property mapping between objects.

# Configuration

Before using Mapper, make sure to import the functions you need and define your source and target objects. Adjust your source and target objects according to your mapping requirements.

# Testing

You can run tests for Mapper using a testing framework such as Jest:

```
npm test
or
yarn test
```

# License

This package is licensed under the MIT License.

Author: Joe Mansour

# Contributing

Contributions are welcome. Feel free to open issues and pull requests.

For more details and examples, visit the <a href="https://github.com/JoeMansourr/mapper">GitHub repository</a>.