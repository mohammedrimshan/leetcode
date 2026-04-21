/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50,
        'C': 100, 
        'D': 500, 
        'M': 1000
    };
    let total =0 ;
   for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        console.log(current)
        let next = romanMap[s[i + 1]];
        console.log(next)

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total
};