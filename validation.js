let email = RegExp('^[a-zA_Z]{3,}[.+_-]+[a-zA-Z]+[@][a-zA-Z]{2,}[.][.a-zA-Z0-9]+$');
let input = "abc.xyz@bridgelabz.co.in";

try{
    if (email.test(input))
    console.log("Email is Vaild");
    else throw "Email is Invalid";
}
catch(e){
    console.error(e);
}