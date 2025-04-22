/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    for(let s of strs){
        const sSort = s.split('').sort().join('')
        if(!obj[sSort]){
            obj[sSort] = []
        }
        obj[sSort].push(s)
    }
    return Object.values(obj)
};