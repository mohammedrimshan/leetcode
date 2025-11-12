/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(a) {
    let product=1;
for(let i =0; i<a.length;i++)
    product*=a[i]


if(product>0){
    return 1
}else if(product <0){
  return -1
}else{
  return 0;
}
 
};