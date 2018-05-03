/**
 * Array functions that modify an input array and return a new array.
 */

/**
 * Adds one item to the end of an array and returns a new array.
 * If item is an array, the entire array will be appended as one item.
 *
 * @param array Array to add to.
 * @param item Item to add.
 * @returns New array with added item.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * append = Array.append(array,4)</code><br/><br/>
 * Expected value of array is [1,2,3,4].
 */
export function append(array: any[], item: any): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    const array2 = array.slice();
    array2.push(item);
    return array2;
}

/**
 * Adds one item to the front of an array and returns a new array.
 * If the item is an array, the entire array will be appended as one item.
 *
 * @param array Array to add to.
 * @param item Item to add.
 * @returns New array with added item.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * append = Array.appendFront(array,4)</code><br/><br/>
 * Expected value of array is [4,1,2,3].
 */
export function appendFront(array: any[], item: any): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (item === undefined) {throw new Error("Invalid arg: item must be defined.");}
    const array2 = array.slice();
    array2.unshift(item);
    return array2;
}

/**
 * Creates a new array by making a copy of an existing array.
 *
 * @param array Array to copy.
 * @returns New duplicated array.
 *array
 * <h3>Example:</h3>
 * <code>
 * array = [1,2,3]<br/>
 * copy = Array.Copy(array)</code><br/><br/>
 * Expected value of copy is [1,2,3].
 */
export function copy(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return array.slice();
}

/**
 * Combines two arrays into a new array.
 *
 * @param array1 First array.
 * @param array2 Second array.
 * @returns Combined array (array1 first, followed by array2).
 *
 * <h3>Example: </h3>
 * <code>
 * array1 = [1,2,3]<br/>
 * array2 = [9,0]<br/>
 * newarr = Array.concat(array1,array2)</code><br/><br/>
 * Expected value of newarr is [1,2,3,9,0].
 */
export function concat(array1: any[], array2: any[]): any[] {
    if (array1 === undefined) {throw new Error("Invalid arg: array1 must be defined.");}
    if (array2 === undefined) {throw new Error("Invalid arg: array2 must be defined.");}
    return array1.concat(array2);
}

/**
 * Flattens an n-dimensional array into a one-dimensional array.
 *
 * @param array Array to flatten.
 * @returns Flattened array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3,[4,5]]<br/>
 * flatten = Array.flatten(array)</code><br/><br/>
 * Expected value of array is [1,2,3,4,5].
 */
export function flatten(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    return flattenDeep(array);
}

/**
 * Removes the item at the specified index from an array and returns a new array.
 *
 * @param array Array to remove item from.
 * @param index Zero-based index number of item to remove.
 * @returns Array with item removed.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * remove = Array.removeIndex(array,1)</code><br/><br/>
 * Expected value of remove is [1,3].
 */
export function removeIndex(array: any[], index: number): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    const array2 = array.slice();
    array2.splice(index,1);
    return array2;
}

/**
 * Removes items that match specified value from an array and returns a new array.
 * Items must match both the value and type of specified value<br/>
 *
 * Returns original array if no items in array match specified value.
 *
 * @param array Array to remove item from.
 * @param value Value to search for.
 * @param remove_all Removes all instances of specified value if true, removes only the first instance if
 *      false.
 * @returns Array with item removed
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,2,3]<br/>
 * remove = Array.removeValue(array,2,true)</code><br/><br/>
 * Expected value of remove is [1,3].
 */
export function removeValue(array: any[], value: any, remove_all: boolean = true): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    const array2 = array.slice();
    for (let i = array2.length - 1; i >= 0; i--) {
        if (array2[i] === value) {
            array2.splice(i,1);
            if (remove_all === false) {break;}
        }
    }
    return array2;
}

/**
 * Replaces items that match specified value from an array with a new value and returns a new array.
 * Items must match both the value and type of specified value<br/>
 *
 * Returns original array if no items in array match specified value.
 *
 * @param array Array to remove item from.
 * @param value Value to search for.
 * @param value2 Value to replace existing value with.
 * @param replace_all Replaces all instances of specified value if true, replaces only the first instance if
 *      false.
 * @returns Array with item(s) replaced.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,2,3]<br/>
 * replace = Array.replaceValue(array,2,9,true)</code><br/><br/>
 * Expected value of replace is [1,9,9,3].
 */
export function replaceValue(array: any[], value1: any, value2: any, replace_all: boolean = true): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (value1 === undefined) {throw new Error("Invalid arg: value1 must be defined.");}
    if (value2 === undefined) {throw new Error("Invalid arg: value2 must be defined.");}
    const array2 = array.slice();
    for (let i = 0 ; i < array2.length ; i++) {
        if (array2[i] === value1) {
            array2[i] = value2;
            if (replace_all === false) {break;}
        }
    }
    return array2;
}

/**
 * Reverses the order of items in an array and returns a new array.
 *
 * @param array Array to reverse.
 * @returns New reversed array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3]<br/>
 * result = Array.reverse(array)</code><br/><br/>
 * Expected value of result is [3,2,1].
 */
export function reverse(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.reverse();
    return array2;
}

/**
 * Sorts an array of strings alphabetically and returns a new array.
 * If items are not strings, they are treated as strings.<br/>
 *
 * Items are sorted according to string Unicode code points (character by character, numbers before upper case
 * alphabets, upper case alphabets before lower case alphabets)
 *
 * @param array Array to sort.
 * @returns New sorted array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = ["1","2","10","Orange","apple"]<br/>
 * sort = Array.sortAlpha(array)</code><br/><br/>
 * Expected value of array is ["1","10","2","Orange","apple"].
 */
export function sortAlpha(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.sort();
    return array2;
}

/**
 * Sorts an array of numbers in ascending order and returns a new array.
 * The array must contain numbers.
 *
 * @param array Array to add to.
 * @returns New sorted array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [56,6,48]<br/>
 * sort = Array.sortNum(array)</code><br/><br/>
 * Expected value of array is [6,48,56].
 */
export function sortNum(array: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    const array2 = array.slice();
    array2.sort((a, b) => a - b);
    return array2;
}

/**
 * Creates a copy of a portion of an array, from start index to end index (end not included).
 *
 * @param array Array to slice.
 * @param start Zero-based index at which to begin slicing.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If start is undefined, slice begins from index 0.
 * @param end Zero-based index before which to end slicing. Slice extracts up to but not including end.
 *      A negative index can be used, indicating an offset from the end of the sequence.
 *      If end is undefined, slice extracts through the end of the sequence.
 * @returns A new array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [1,2,3,4,5]<br/>
 * result = Array.slice(array,1,3)</code><br/><br/>
 * Expected value of result is [2,3].
 */
export function slice(array: any[], start: number, end: number): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (start === undefined) {throw new Error("Invalid arg: start must be defined.");}
    if (end === undefined) {throw new Error("Invalid arg: end must be defined.");}
    const array2 = array.slice();
    return array2.slice(start,end);
}

/**
 * Adds and/or removes items to/from an array and returns a new array.
 *
 * If no items_to_add are specified, then items are only removed.
 * If num_to_remove is 0, then items are only added.<br/>
 *
 * @param array Array to splice
 * @param index Zero-based index at which to add/remove items. (Items are added/removed after specified index)
 * @param num_to_remove Number of items to remove.
 * @param items_to_add Array of items to add.
 * @returns A new array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = [10, 20, 30, 40, 50]<br/>
 * result = Array.splice(array, 1, 3, [2.2, 3.3])</code><br/><br/>
 * Expected value of result is [10, 2.2, 3.2, 50].
 */
export function splice(array: any[], index: number, num_to_remove: number, items_to_add: any[]): any[] {
    if (array === undefined) {throw new Error("Invalid arg: array must be defined.");}
    if (index === undefined) {throw new Error("Invalid arg: index must be defined.");}
    const array2 = array.slice();
    array2.splice(index, num_to_remove, ...items_to_add);
    return array2;
}

/**
 * Creates a new array of integer numbers between two bounds.
 * Lower bound is inclusive and upper bound is exclusive.
 *
 * @param min Lower bound integer.
 * @param max Upper bound integer.
 * @returns New array.
 *
 * <h3>Example: </h3>
 * <code>
 * array = Array.range(0,5)</code><br/><br/>
 * Expected value of array is [0,1,2,3,4].
 */
export function range(min: number, max: number): number[] {
    if (min === undefined) {throw new Error("Invalid arg: min must be defined.");}
    if (max === undefined) {throw new Error("Invalid arg: max must be defined.");}
    const len:number = max - min;
    if (len <= 0) {return [];}
    return Array.apply(0, new Array(len)).map((v, i) => i + min);
}


/**
 * Util functions.
 */

function flattenDeep(array: any[]): any[] {
   return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}