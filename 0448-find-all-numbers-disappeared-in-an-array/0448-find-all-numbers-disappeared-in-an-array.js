/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res=[]
    let arr =new Set(nums)
    for(let i=1;i<=nums.length;i++){
        if(!arr.has(i)){
            res.push(i)
        }
    }
    return res
};