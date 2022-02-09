var i=1;
lowerLimit=8;
upperLimit=36;
var num=2;
 
while(i<=upperLimit){

    let cube=i**num
    if(cube>=lowerLimit && cube<=upperLimit){
        console.log(`number is ${i} and cube is ${cube}`);
    }
     i++;   
}
    
    