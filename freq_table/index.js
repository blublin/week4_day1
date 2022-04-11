/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
Python: key in dict
*/

const debug = false

const arr1 = ["a", "a", "a"];
const expected1 = {
a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
a: 2,
b: 1,
c: 3,
B: 1,
d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let freqTable = {}

    // for (let ind = 0; ind < arr.length; ind++)  {
    //     if (debug) {
    //         console.log(arr[ind])
    //     }
    //     if (freqTable.hasOwnProperty(arr[ind])) {
    //         freqTable[arr[ind]]++
    //     }
    //     else {
    //         freqTable[arr[ind]] = 1
    //     }
    // }

    for (let elem of arr) {
        if (debug) {
            console.log(elem)
        }
        if (freqTable.hasOwnProperty(elem)) {
            freqTable[elem]++
        }
        else {
            freqTable[elem] = 1
        }
    }
    if (debug) {
        for (let key in freqTable) {
            console.log("Freq Table Key:", key)
        }
    }
    return freqTable
}

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))