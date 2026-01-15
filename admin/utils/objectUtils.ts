
/**
 * Deep merges two objects.
 * properties from the source object will overwrite properties in the target object.
 * 
 * @param target The base object (e.g., default data)
 * @param source The object with updates (e.g., database data)
 * @returns A new object with merged properties
 */
export function deepMerge(target: any, source: any): any {
    // If either is not an object or is null, return the source if it exists, otherwise target
    if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) {
        return source !== undefined ? source : target;
    }

    // If one is an array and the other isn't, prefer source
    if (Array.isArray(target) !== Array.isArray(source)) {
        return source;
    }

    // If both are arrays, return source (arrays are usually replaced, not merged by index)
    if (Array.isArray(source)) {
        return source;
    }

    // Merge objects
    const result = { ...target };

    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            result[key] = deepMerge(target[key], source[key]);
        } else {
            result[key] = source[key];
        }
    }

    return result;
}
