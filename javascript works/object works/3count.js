var arr=[10,20,10,20,30,40,30,40]
var count={}
for(let num of arr)
{
    if(num in count)
    {
        count[num]+=1
    }
    else
    {
        count[num]=1
    }
}
console.log(count);

// var arr=[10,20,10,20,30,40,30,40]
// var out={}
// arr.map(num=>num in out?out[num]+=1:out[num]=1)
// console.log(out);