let email = RegExp('^[a-zA_Z]{3,}[.a-zA-Z]+[@][a-zA-Z]{2,}[.a-zA-Z]+$');
let input = "abc.xyz@bridgelabz.co.in";

try{
    if (email.test(input))
    console.log("Email is Vaild");
    else throw "Email is Invalid";
}
catch(error){
    console.error(error);
}