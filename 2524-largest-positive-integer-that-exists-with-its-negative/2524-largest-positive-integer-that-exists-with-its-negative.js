/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let zero=-1;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]>0&&nums[i]===-nums[j]){
                zero=Math.max(zero,nums[i])
            }
        }
    }
    return zero
};