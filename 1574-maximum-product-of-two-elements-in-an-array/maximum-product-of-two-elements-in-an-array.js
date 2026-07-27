/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums){
    // Step 1: Find the two largest numbers
    let max1 = 0, max2 = 0;

    for (let num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    // Step 2: Compute the product
    return (max1 - 1) * (max2 - 1);
}