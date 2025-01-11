/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let n=operations.length
    let arr = []
    for(let i=0;i<n;i++){
        if(operations[i]==="C"){
            arr.pop()
        }else if(operations[i]==="D"){
            arr.push(arr[arr.length - 1] * 2);
        }else if(operations[i]==="+"){
            arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]));
        }else{
            arr.push(Number(operations[i]))
        }
    }
    console.log(arr)
    return arr.reduce((sum,val)=> sum+val,0)
};