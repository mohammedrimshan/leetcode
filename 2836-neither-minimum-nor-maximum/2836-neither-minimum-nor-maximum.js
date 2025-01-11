/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {

    if(nums.length<=2){
        return -1
    }
    let max = Math.max(...nums)
    let min = Math.min(...nums)

   for(const num of nums){
    if(num!==max && num!==min){
        return num
    }
    console.log(num)
   }
    return -1;
};