function incscore1(e){
    var button = e.target
    var sid = button.getAttribute("data-score")
    var score =document.getElementById(sid)
    var currentscore = parseInt(score.innerText)
    console.log(currentscore)
    score.innerText=currentscore+1
}

btn1.addEventListener("click",incscore1)
console.log(btn1)
btn2.addEventListener("click",incscore1)
btn3.addEventListener("click",incscore1)
btn4.addEventListener("click",incscore1)
function Result(){
    var score1 = parseInt(document.getElementById("score1").innerText)
    var score2 = parseInt(document.getElementById("score2").innerText)
    var score3 = parseInt(document.getElementById("score3").innerText)
    var score4 = parseInt(document.getElementById("score4").innerText)
    if(score1>score2&&score1>score3&&score1>score4)
        {
            alert("bjp  won")
        }
        else if(score2>score3&&score2>score4)
        {
            alert("Brs won")
        }
        else if(score3>score4)
        {
            alert("congress  won")
        }
        else{
            alert("janasena  won")
        }
}
//var b1=parseInt(document.getElementById("btn1");
//var b2=d)ocument.getElementById("btn1");
//var b3=document.getElementById("btn1");
//var b4=document.getElementById("btn1");