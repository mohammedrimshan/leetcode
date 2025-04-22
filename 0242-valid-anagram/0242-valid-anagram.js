/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
       if (s.length !== t.length) return false;
        let obj = {}
        for(let val of s){
            obj[val] = (obj[val]||0) + 1;
        }

        for(let val of t){
            if(!obj[val]) return false
            obj[val]--;
        }
        
    return true
};