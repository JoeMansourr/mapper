import { mapObjects } from '../src/mapper';

describe('mapObjects', () => {
  it('should merge properties from the source object into the target object', () => {
    const sourceObject = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30
    };

    const targetObject = {
      occupation: 'Software Engineer'
    };

    const mergedObject = mapObjects(sourceObject, targetObject);

    expect(mergedObject).toEqual({
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      occupation: 'Software Engineer'
    });
  });

  it('should merge properties from the source object into multiple target objects', () => {
    const sourceObject = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30
    };

    const targetObject1 = {
      occupation: 'Software Engineer'
    };

    const targetObject2 = {
      city: 'New York'
    };

    const mergedObjects = mapObjects(sourceObject, targetObject1, targetObject2);

    expect(mergedObjects).toEqual([
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        occupation: 'Software Engineer'
      },
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        city: 'New York'
      }
    ]);
  });
});