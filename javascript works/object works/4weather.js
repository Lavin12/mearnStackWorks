var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:35},
    {districtname:"thrissur",weather:55},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]



//output should be
//thrissur:32,ekm:32...


var weatherout={}
for(let record of data){
    let districtName=record["districtname"]
    let curtemp=record["weather"]
    if(districtName in weatherout){
        let oldtemp=weatherout[districtName]
        if(curtemp>oldtemp){
            weatherout[districtName]=curtemp
        }

    }
else{
    weatherout[districtName]=curtemp
}

}
console.log(weatherout);



console.log(Object.entries(weatherout).sort((r1,r2)=>r2[1]-r1[1]));//this is how an object is converted to an arrayu format and sorted in ascending order

