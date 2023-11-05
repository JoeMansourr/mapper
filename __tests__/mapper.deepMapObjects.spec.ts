import { deepMapObjects } from "../src/mapper";

describe('deepMapObjects', () => {
  it('should copy properties from sourceObject to targetObject', () => {
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
      country: 'USA',
      age: 0, // Add the properties to the targetObject
      city: '',
      address: {
        street: '',
        number: 0,
      },
    };

    deepMapObjects(sourceObject, targetObject);

    // Verify that properties from sourceObject are copied to targetObject
    expect(targetObject.name).toBe('John');
    expect(targetObject.age).toBe(30);
    expect(targetObject.city).toBe('New York');
    expect(targetObject.address.street).toBe('Broadway');
    expect(targetObject.address.number).toBe(11);

    // Verify that properties not present in sourceObject remain unchanged in targetObject
    expect(targetObject.country).toBe('USA');
  });
});