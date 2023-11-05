import { areObjectsEqual } from "../src/mapper";

describe('areObjectsEqual', () => {
  it('should return true if objects are equal', () => {
    const sourceObject = {
      name: 'John',
      age: 30,
      city: 'New York',
      address: {
        street: 'Broadway',
        number: 11,
      },
    };

    const targetObject = {
      name: 'John',
      age: 30,
      city: 'New York',
      address: {
        street: 'Broadway',
        number: 11,
      },
    };

    expect(areObjectsEqual(sourceObject, targetObject)).toBe(true);
  });

  it('should return false if objects are not equal', () => {
    const sourceObject = {
      name: 'John',
      age: 30,
      city: 'New York',
      address: {
        street: 'Broadway',
        number: 11,
      },
    };

    const targetObject = {
      name: 'Alice',
      age: 30,
      city: 'New York',
      address: {
        street: 'Broadway',
        number: 11,
      },
    };

    expect(areObjectsEqual(sourceObject, targetObject)).toBe(false);
  });
});