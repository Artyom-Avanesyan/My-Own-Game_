document.addEventListener("DOMContentLoaded",function myFunction() {
    let gotInform = [localStorage.getItem("theme"), localStorage.getItem("question")];
    document.getElementById('themeNahme').innerHTML='Theme ' + gotInform[0];
    document.getElementById('demo').innerHTML='Question ' + gotInform[1];
    console.log(gotInform[0],gotInform[1]);
});
function colrChange(b){
if(b == 0){ document.getElementById("bottom").style.webkitTextFillColor = "rgb(255,255,255)";}
else if(b == 1){ document.getElementById("bottom").style.webkitTextFillColor = "rgb(0,0,0)";}
}