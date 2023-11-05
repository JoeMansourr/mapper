import { mapObjects } from "../src/mapper";

describe('mapObjects', () => {
  it('should copy properties from sourceObject to targetObject', () => {
    const sourceObject = {
      name: 'John',
      age: 30,
      city: 'New York',
    };

    const targetObject = {
      name: 'Alice',
      country: 'USA',
      age: 0, // Add the properties to the targetObject
      city: '',
    };

    const targetObject2 = {
      name: 'Alice',
      country: 'USA',
      age: 0, // Add the properties to the targetObject
      city: '',
    };

    mapObjects(sourceObject, targetObject, targetObject2);

    // Verify that properties from sourceObject are copied to targetObject
    expect(targetObject.name).toBe('John');
    expect(targetObject.age).toBe(30);
    expect(targetObject.city).toBe('New York');

    // Verify that properties not present in sourceObject remain unchanged in targetObject
    expect(targetObject.country).toBe('USA');

    // Verify that properties from sourceObject are copied to targetObject2
    expect(targetObject2.name).toBe('John');
    expect(targetObject2.age).toBe(30);
    expect(targetObject2.city).toBe('New York');
    // Verify that properties not present in sourceObject remain unchanged in targetObject2
    expect(targetObject2.country).toBe('USA');
  });
});