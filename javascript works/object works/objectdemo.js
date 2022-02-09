//in object each is assigned as key in it to get a clarificatin  in the datas


var student={
    rol:1,
    st_name:"lavin",
    course:"mearn strack",
    total:100
}
//printing studwent name

console.log(student["st_name"]);
console.log(student.st_name);    //in this both way we can print values in the object
//////////////////////////////////////////////////////////////////////////////////
console.log(student.course);

console.log("gender" in student);  //to check if corresponding value is present in it
//////////////////////////////////////////////////////////////////////////////////
student["gender"]="male"            //to add a key to an  object 
console.log(student); 

student.isvaccinated="true"      //in this both way we can add a key to  an object
console.log(student);

student.vaccine="covidshield"
console.log(student);
///////////////////////////////////////////////////////////////////////////////////


student.vaccine="co-vaccin"     //this is how updations are given 
console.log(student);

student.total=250
console.log(student);

///////////////////////////////////////////////////////////////////////////////////


student.total+=500
console.log(student);                  //this is how any value is added to a key


/////////////////////////////////////////////////////////////////////////////////////


for(var key in student){
    console.log(key);                      //keys and its values are accessed using this 
    console.log(student[key]);
}













