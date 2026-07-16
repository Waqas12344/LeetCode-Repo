/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Step 1: Map Roman numerals to integers
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // Step 2: Traverse the string
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        // Step 3: Check subtraction rule
        if (next && current < next) {
            total -= current;  // subtract if smaller than next
        } else {
            total += current;  // otherwise add
        }
    }

    return total;
};
