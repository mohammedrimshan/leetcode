/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const splitS = s.split(' ')
    const stack = []
    console.log(splitS)
    for(let i of splitS){
        stack.push(i)
    }
    console.log(stack)
    let finalS = ""
    while(stack.length){
        const current = stack.pop()
        console.log(current)
        if(current){
        finalS = finalS + " " + current
        }
    }
    console.log(finalS)
    return finalS.trim()
};