//inorder to avoid function overloading the spread is used ///function overloading-when the function is called more then one tuimr th function ovreloading is occuring


function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}

console.log(add(10,20,30,40));
//////////////////////////////////////////////////////////////////////////////////////////////
function findmax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}

console.log(findmax(13,30,100,300));