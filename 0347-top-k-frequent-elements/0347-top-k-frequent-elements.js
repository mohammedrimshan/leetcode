/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq={}
    for(let val of nums){
        freq[val] = (freq[val]||0)+1;
    }
    let entries = Object.entries(freq)
    console.log(entries)
    entries.sort((a,b)=>b[1]-a[1]);
    console.log(entries)
    let answer = entries.slice(0,k).map((ent)=>Number(ent[0]))
    return answer
};