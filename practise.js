//console.log(document.getElementById("heading"))
// var heading = document.getElementById("heading").innerText
// console.log(heading)
// var classitems = document.getElementsByClassName("items")[0].innerText
// console.log(classitems)
// var body1 = document.getElementsByTagName("b")[0].innerText
// console.log(body1)
/*console.log(body1[0].innerText)
console.log(body1[0].innerText)
console.log(body1[0].innerText)
console.log(body1[0].innerText)*/
var output = document.getElementById("output")
var text = document.getElementById("input")
var btn = document.getElementById("update")

btn.addEventListener("click",changetext)
function changetext(){
    const abc = text.value ;
    output.innerText=abc;
}