/**
 * @param {number[]} nums
 * @return {number}
 */

//  We use the two-pointer technique:

// Pointer i → position of the last unique element.

// Pointer j → scans through the array.

// If nums[j] is different from nums[i], it’s a new unique element → move i forward and copy nums[j] there.

// At the end, i+1 is the count of unique elements.

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // place unique element
        }
    }

    return i + 1; // count of unique elements
};
