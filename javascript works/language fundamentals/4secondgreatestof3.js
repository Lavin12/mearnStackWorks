var no1="20"
var no2="30"
var no3="10"
//  if (no1>no2&&n01>no3) {
//      if (no2>no3) {
//          console.log("no2 is second largest");

//      }
//      else{console.log("no 3 is second largest");}

//  }
//  elseif(no2>no1&&no2>no3){
//      if (condition) {

//      }
//  }
console.log((no1 > no2 && no1 > no3) ? (no2 > no3 ? `${no2}` : `${no3}`) : (no2 > no1 && no2 > no3) ? (no1 > no3 ? `${no1}` : `${no3}`) :  (no1 > no2) ? `${no1}` : `${no2}`);