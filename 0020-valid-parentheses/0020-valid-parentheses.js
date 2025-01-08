/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(char==='(' || char==='{'||char==='['){
            stack.push(char)
        }else if(char===')' || char==='}'||char===']'){
            if(stack.length===0){
                return false
            }
            const top = stack.pop()
            if((char===")" && top !=="(") ||
               (char==="]" && top !=="[") ||
               (char==="}" && top !=="{")
            ){
                return false
            }
        }
    }
    console.log(stack)
    return stack.length===0
};