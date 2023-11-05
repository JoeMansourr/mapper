import { objectFilter } from '../src/mapper';

describe('objectFilter', () => {
  it('should filter out null, empty and undefined properties from sourceObject', () => {
    const sourceObject = {
      name: 'John',
      age: 30,
      city: 'New York',
      address: {
        street: 'Broadway',
        number: 11,
      },
      country: null,
      zipCode: '',
      phone: undefined,
      hobbies: ['swimming', 'running', 'hiking'],
    };

    const targetObject = objectFilter(sourceObject);

    // Verify that properties from sourceObject are copied to targetObject
    expect(targetObject.name).toBe('John');
    expect(targetObject.age).toBe(30);
    expect(targetObject.city).toBe('New York');
    expect(targetObject.address.street).toBe('Broadway');
    expect(targetObject.address.number).toBe(11);
    expect(targetObject.hobbies).toEqual(['swimming', 'running', 'hiking']);

    // Verify that properties not present in sourceObject remain unchanged in targetObject
    expect(targetObject.country).toBeUndefined();
    expect(targetObject.zipCode).toBeUndefined();
    expect(targetObject.phone).toBeUndefined();
  });
});