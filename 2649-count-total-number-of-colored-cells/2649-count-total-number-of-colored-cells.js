/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    if(n===1) return n
    return 2*n*n-2*n+1
};