const { frequencyTableBuilder } = require("../freq_table")
// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    // Array has at least 1 number with an odd number of occurances
    // Create object (frequency table) of the passed in array
    let freqTable = frequencyTableBuilder(nums)
    // Iterate  through the table to get each key
    for (let key in freqTable) {
        // If the value (object[key]) divided by 2 has a remainder
        if (freqTable[key] % 2) {
            // Then it's odd, return that key
            return key
        }
    }
}

console.log(oddOccurrencesInArray(nums1))
console.log(oddOccurrencesInArray(nums2))
console.log(oddOccurrencesInArray(nums3))
console.log(oddOccurrencesInArray(nums4))