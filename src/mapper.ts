/**
 * Merge properties from the source object into the target object based on matching keys.
 *
 * @param sourceObject {object} - The object containing properties to be merged into the target.
 * @param targetObjects {object} - The objects into which properties will be merged.
 *
 * @description This function iterates through the keys in the targetObject and checks if the sourceObject contains a property with the same key. If a matching key is found in both objects, the value in the targetObject is replaced with the value from the sourceObject. This operation effectively merges the properties from the sourceObject into the targetObject where keys match.
 */

export const mapObjects = (sourceObject: any, ...targetObjects: any) => {
  if (targetObjects.length === 1) {
    const targetObject = targetObjects[0];
    for (let key in targetObject) {
      if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
        targetObject[key] = sourceObject[key];
      }
    }
    return targetObject;
  } else {
    const mappedData: any = {};
    targetObjects.forEach((targetObject: any) => {
      for (let key in targetObject) {
        if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
          mappedData[key] = sourceObject[key];
        }
      }
    });
    return mappedData;
  }
};

/**
 * Recursively merge properties from the source object into the target object, preserving nested structures.
 *
 * @param sourceObject {object} - The object containing properties to be merged into the target.
 * @param targetObjects {object} - The objects into which properties will be merged.
 *
 * @description This function iterates through the keys in the sourceObject. If a key's value in both the sourceObject and targetObject is an object, it calls itself recursively to perform a deep property check within those nested objects. If the key's value is not an object or if it doesn't exist in the targetObject, the function merges the properties at that level. This operation effectively merges properties from the sourceObject into the targetObject while preserving nested structures.
 */

export const deepMapObjects = (sourceObject: any, ...targetObjects: any) => {
  if (targetObjects.length === 1) {
    const targetObject = targetObjects[0];

    for (const key in sourceObject) {
      if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
        if (
          typeof sourceObject[key] === "object" &&
          typeof targetObject[key] === "object"
        ) {
          // Recursively merge nested objects
          targetObject[key] = deepMapObjects(sourceObject[key], targetObject[key]);
        } else {
          // Assign primitive values
          targetObject[key] = sourceObject[key];
        }
      }
    }

    // Return the modified target object
    return targetObject;
  } else {
    targetObjects.forEach((targetObject: any) => {
      for (const key in sourceObject) {
        if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
          if (
            typeof sourceObject[key] === "object" &&
            typeof targetObject[key] === "object"
          ) {
            // Recursively merge nested objects
            targetObject[key] = deepMapObjects(sourceObject[key], targetObject[key]);
          } else {
            // Assign primitive values
            targetObject[key] = sourceObject[key];
          }
        }
      }
    });

    // Return the array of modified target objects
    return targetObjects;
  }
};

/**
 * Compare two objects for equality by checking if they have the same properties and values.
 *
 * @param sourceObject {object} - The first object to be compared.
 * @param targetObject {object} - The second object to be compared.
 * @returns {boolean} - `true` if both objects have the same properties and values, `false` otherwise.
 *
 * @description This function compares two objects by serializing them to JSON and then comparing the resulting JSON strings. If the JSON representations of the objects are equal, it indicates that both objects have the same properties and values. This approach provides a simple and deep comparison of object equality.
 */

export const areObjectsEqual = (sourceObject: {}, targetObject: {}) => {
  return JSON.stringify(sourceObject) === JSON.stringify(targetObject);
};

/**
 * Recursively filter an object to remove properties with values of null, undefined, or an empty string ('').
 *
 * @param sourceObject {object} - The object to filter.
 * @param targetObject {object} - (Optional) The filtered object to be constructed. If not provided, a new object will be created.
 * @returns {object} - The filtered object with unwanted properties removed.
 *
 * @description This function recursively filters an object to remove properties with values of null, undefined, or an empty string (''). It creates a new object, copying properties from the source object to the target object, excluding unwanted properties. For nested objects, the function is called recursively to filter them as well.
 */

export const objectFilter = (sourceObject: any, targetObject: any = {}) => {
  for (let key in sourceObject) {
    if (
      sourceObject[key] !== null &&
      sourceObject[key] !== "" &&
      typeof sourceObject[key] !== "undefined"
    ) {
      if (
        typeof sourceObject[key] === "object" &&
        !Array.isArray(sourceObject[key])
      ) {
        // Recursively filter nested objects
        targetObject[key] = {};
        objectFilter(sourceObject[key], targetObject[key]);
      } else if (Array.isArray(sourceObject[key])) {
        // Handle arrays if needed
        targetObject[key] = sourceObject[key];
      } else {
        // Copy other properties
        targetObject[key] = sourceObject[key];
      }
    }
  }
  return targetObject;
};
