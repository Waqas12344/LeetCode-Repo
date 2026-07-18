/**
 * @param {number[]} nums
 * @return {number}
 */

// this problem is solved by Euclidean Algorithm

function gcd(a,b){
    while(b !==0){
        let temp = b;
        b=a%b;
        a=temp
    }
    return a;
}

var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums)
    return gcd(min,max)
};