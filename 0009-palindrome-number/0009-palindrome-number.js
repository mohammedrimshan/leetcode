/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let str=x.toString();
    let reverseStr='';
    for(let i=str.length-1;i>=0;i--){
        reverseStr=reverseStr+str[i];
    }
    return str===reverseStr;
};