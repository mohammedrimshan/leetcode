/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let a=[]
    let b=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            a.push(nums[i])
        }else{
            b.push(nums[i])
        }
    }
    return [...a,...b]
};