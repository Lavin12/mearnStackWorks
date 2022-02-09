account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}



function validateAccountNumber(acno){
    return acno in account_details? true:false
}
console.log(validateAccountNumber(1000));
/////////////////////////////////////////////////


function authenticate(acno,password){
    if(validateAccountNumber(acno)){
        let pwd=account_details[acno].password
        if(pwd==password){
            return"login sucess"
            
        }
        else{
            return"invalid password"
        }
    }
    else{
        return"invalid acc num "
    }
}
console.log(authenticate(1000,"userone"));