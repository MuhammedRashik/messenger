function emailError(){
    var name=document.getElementById("name").value;
    var Emailerror=document.getElementById("Email-error");

    if(name.length==0){
        Emailerror.innerHTML="Enter a valid name";
        Emailerror.style.color="red";

    
    }else if(name.length<=4){
        Emailerror.innerHTML="Atleast 4 charecter";
        Emailerror.style.color="orange"; 
    }else {
        Emailerror.innerHTML="Valid";
        Emailerror.style.color="green";

    }
}
function passwordError(){
    let Password=document.getElementById("Password").value;
    let passworderror=document.getElementById("password-error");
    if(Password.length==0){
        passworderror.innerHTML="Enter valid Password";
        passworderror.style.color="red";
    }
    else if(Password.length<=8){
        passworderror.innerHTML="Atleat 8 character";
        passworderror.style.color="orange";
    }else{
        passworderror.innerHTML="Valid";
        passworderror.style.color="green";
    }

}
function btnclick(){
    alert("Congradulation You are a member of Messenger ");
}
function forgot(){
    alert("Mission failed");
}



 