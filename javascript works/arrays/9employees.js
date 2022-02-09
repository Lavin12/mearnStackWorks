var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]



//sorting employees details in ascending order based on experience
employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
 console.log(employees);


//sorting employee details on descending order based on salary

// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);


// for(let employee of employees){
//     console.log(employee[1]);
// }
// //print number of employees in this company
// console.log(employees.length);

// //printing number of developers in the company

// for(let emp of employees){
//     if(emp[2]=="developer"){
//         console.log(emp);
//     }
// }

// //printing employees details which have salary greater than 35000
// console.log("salary>35000");
// for(let employee of employees){
//     if(employee[4]>35000){
//         console.log(employee);
//     }
// }



// //printing details of arjun in the company

// console.log("arjun details");
// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// }