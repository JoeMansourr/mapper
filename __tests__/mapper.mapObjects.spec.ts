import { mapObjects } from '../src/mapper';

describe('mapObjects', () => {
  it('should merge properties of two objects', () => {
    const sourceObject = {
      name: 'Alice',
      age: 30,
    };

    const targetObject = {
      name: 'Bob',
      city: 'New York',
    };

    const mergedObject = mapObjects(sourceObject, targetObject);

    expect(mergedObject).toEqual({
      name: 'Alice',
      age: 30,      
      city: 'New York',
    });
  });
});
