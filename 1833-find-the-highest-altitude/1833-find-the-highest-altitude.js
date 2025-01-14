/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr =[0]
    let n = gain.length
    let sum =0
    // gain.unshift(0)
    for(let i=0;i<n;i++){
        sum = sum+gain[i]
        arr.push(sum)
        
    }
    console.log(arr)
    let max = Math.max(...arr)
    console.log(max)
    return max
};