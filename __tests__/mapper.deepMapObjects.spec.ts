import { deepMapObjects } from "../src/mapper";

describe("deepMapObjects", () => {
  it("should deeply merge properties of two objects", () => {
    const sourceObject = {
      person: {
        name: "Alice",
        age: 30,
      },
    };

    const targetObject = {
      person: {
        name: "Bob",
        city: "New York",
      },
    };

    const mergedObject = deepMapObjects(sourceObject, targetObject);

    expect(mergedObject).toEqual({
      person: {
        name: "Alice",
        age: 30,
        city: "New York",
      },
    });
  });

  it("should not merge non-object properties", () => {
    const sourceObject = {
      name: "Alice",
      age: 30,
    };

    const targetObject = {
      name: "Bob",
      age: 25,
    };

    const mergedObject = deepMapObjects(sourceObject, targetObject);

    expect(mergedObject).toEqual({
      name: "Alice",
      age: 30,
    });
  });

  it("should handle undefined target object", () => {
    const sourceObject = {
      name: "Alice",
      age: 30,
    };

    const mergedObject = deepMapObjects(sourceObject, undefined);

    expect(mergedObject).toEqual({
      name: "Alice",
      age: 30,
    });
  });
});
