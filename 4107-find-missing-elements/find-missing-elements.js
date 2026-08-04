/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
      // Step 1: Find min and max
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    // Step 2: Put nums into a Set for fast lookup
    let numSet = new Set(nums);

    // Step 3: Collect missing numbers
    let missing = [];
    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) {
            missing.push(i);
        }
    }

    return missing;
};