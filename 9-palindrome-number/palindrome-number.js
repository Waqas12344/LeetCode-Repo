/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false; // negatives not palindrome

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;              // take last digit
        reversed = reversed * 10 + digit; // build reversed number
        x = Math.floor(x / 10);          // remove last digit
    }

    return original === reversed;
}

isPalindrome(121)