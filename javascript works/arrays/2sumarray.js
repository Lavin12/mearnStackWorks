var arr=[4,5,6]
var sum=0 
for(let num of arr){
    sum=sum+num
}
for(let num of arr){
    console.log(sum-num);
}
//in this push operator bis used to get exact output as array like below


var arr=[4,5,6]
var op=[],sum=0
for(let num of arr){
    sum=sum+num
}
for(let num of arr){
    op.push((sum-num))
}
console.log(op);