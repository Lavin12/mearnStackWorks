// 2
// 2+22=24
// 3
// 3+33+333=369
// var num=4;
// var i=1;
//  var str=""
//  var sum=0;
// while(i<=num){
//     str=str+num;
//     sum=sum+Number(str)
//     console.log(str);
//     i++;
// }
// console.log(sum);
var num = 4;
var i = 1;
var sum = 0, total=0;
while (i <= num) {
    sum+=sum*10+num;
    total+=sum;
    
     i++;
}
console.log(total);

