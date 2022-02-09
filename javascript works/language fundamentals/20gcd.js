var first,second,gcd;
first=8;
second=64;

for(let i=1;i<=second;i++){
    if(first%i==0 && second%i==0){
        gcd=i;
    }
}
console.log(gcd);