/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const frequency = nums.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    console.log(frequency)
    let maxFrequency = Math.max(...Object.values(frequency))
    console.log(maxFrequency)
    let total = 0
    for(let key in frequency){
        if(frequency[key]===maxFrequency){
            total +=frequency[key]
        }
    }
    return total
};
