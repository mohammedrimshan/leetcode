/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  
      let num1 = [];
    let num2 = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (!num1.includes(nums[i])  ) {
            num1.push(nums[i]);
        } else if (!num2.includes(nums[i]) ) {
            num2.push(nums[i]);
        }
    }
    return num1.length+num2.length=== nums.length
};