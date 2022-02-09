var string="hello"
var vovels=["a","e","i","o","u","A","E","I","O","U"]
// for(let char of string){
//     if(vovels.includes(char)){
//         console.log(char);
//     }
// }
//using filter


Array.from(string).filter(char=>vovels.includes(char)).forEach(char=>console.log(char))

