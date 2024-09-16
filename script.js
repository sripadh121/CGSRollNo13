// var namw = document.getElementById("name")
// var submit = document.getElementById("submit")
// var email = document.getElementById("email")
// var age = document.getElementById("age")
// var password = document.getElementById("password")

// submit.addEventListener("click",display)
// function display(){

//     console.log(namw.value)
//     console.log(submit.value)
//     console.log(email.value)
//     console.log(age.value)
// }
var myform = document.forms[0];


var sbtn = myform[4];



var details = {};
sbtn.addEventListener("click", handlesubmit)

function handlesubmit(e)
{
    e.preventDefault();
    for (const element of myform) 
    {
        if (element.type=="submit"){
            continue;
        }
        details[element.name]=element.value;
    }
    console.log(details)
}

