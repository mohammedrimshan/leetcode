/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let splitS = s.split('').sort().reverse()
    for(let i=splitS.length;i>=0;i--){
        if(splitS[i]==='1'){
            [splitS[i],splitS[splitS.length-1]]= [splitS[splitS.length-1],splitS[i]]
        }
    }
    console.log(splitS)
    return splitS.join('')
};