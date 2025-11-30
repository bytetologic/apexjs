import {
    isFunction,
    isObject,
    isArray,
    isPlainObject,
    isWindow,
} from "../src/index";

describe("Object Checks", () => {
    test("isFunction", () => {
        expect(isFunction(() => { })).toBe(true);
        expect(isFunction(function () { })).toBe(true);
        expect(isFunction(async () => { })).toBe(true);
        expect(isFunction({})).toBe(false);
    });

    test("isObject", () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(false);
        expect(isObject(new Date())).toBe(true);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject("string")).toBe(false);
    });

    test("isArray", () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray({})).toBe(false);
        expect(isArray("array")).toBe(false);
    });

    test("isPlainObject", () => {
        expect(isPlainObject({})).toBe(true);
        expect(isPlainObject({ a: 1 })).toBe(true);
        expect(isPlainObject(new Date())).toBe(false);
        expect(isPlainObject([])).toBe(false);
        expect(isPlainObject(null)).toBe(false);
        expect(isPlainObject(Object.create(null))).toBe(true);
    });

    test("isWindow", () => {
        // Test with a mock window object
        const mockWindow = { document: {} };
        expect(isWindow(mockWindow)).toBe(true);

        // Test with objects that have document property
        expect(isWindow({ document: {}, location: {} })).toBe(true);

        // Test with null and undefined
        expect(isWindow(null)).toBe(false);
        expect(isWindow(undefined)).toBe(false);

        // Test with plain objects without document
        expect(isWindow({})).toBe(false);
        expect(isWindow({ location: {} })).toBe(false);

        // Test with primitives
        expect(isWindow("window")).toBe(false);
        expect(isWindow(123)).toBe(false);
        expect(isWindow(true)).toBe(false);

        // Test with arrays
        expect(isWindow([])).toBe(false);
    });
});
