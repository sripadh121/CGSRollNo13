var display = document.getElementById("display");
var btns=document.getElementsByClassName("btn");

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",operation)
}
function operation(e)
{

   var t=e.target;
   if(t.innerText=="=")
   {
      display.value=eval(display.value);
   }
   else if(t.innerText=="clear")
   {
    display.value="";
   }
   else{
    display.value+=t.innerText;

   }
}