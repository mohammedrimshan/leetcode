/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {}
    for(let val of nums){
        freq[val] = (freq[val]||0)+1;
        console.log(freq[val])
        if(freq[val]>nums.length/2){
            return val
        }
    }
};