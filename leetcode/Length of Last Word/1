/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length=0;
    let i=s.length-1;
    while(i>=0&&s[i]===' '){
        i--;
    }
    while(i>=0&&s[i]!==' '){
        length++;
        i--;
    }
    return length;
};


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))