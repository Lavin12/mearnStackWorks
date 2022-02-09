var arr=[10,11,12,15,16,17,18,19,20]
var element=11;
var count=1;
for(let num of arr){
    if (num==element){
        flag=1;
        break;
    }
    count++
}
console.log(flag==0?`element not found`:`elements found`);