/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    const ones = [...s].filter(ch => ch === '1').length;

    const t = "1" + s + "1";

    // Run-length encoding
    const runs = [];
    let i = 0;

    while (i < t.length) {
        let j = i;
        while (j < t.length && t[j] === t[i]) j++;
        runs.push([t[i], j - i]);
        i = j;
    }

    let maxGain = 0;

    // Look for 0-1-0 pattern
    for (let k = 1; k < runs.length - 1; k++) {
        if (
            runs[k][0] === '1' &&
            runs[k - 1][0] === '0' &&
            runs[k + 1][0] === '0'
        ) {
            maxGain = Math.max(
                maxGain,
                runs[k - 1][1] + runs[k + 1][1]
            );
        }
    }

    return ones + maxGain;
};