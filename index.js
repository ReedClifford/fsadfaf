function swapStyleSheet(sheet){
    document.getElementById("pagestyle").setAttribute("href",sheet);
    
}


document.querySelector(".btn-darkmode").addEventListener("click",function(){
    document.querySelector(".header1 h3").innerHTML="Night Mode";

});

document.querySelector(".btn-summer").addEventListener("click",function(){
    document.querySelector(".header1 h3").innerHTML="We are now  Accepting Enroless for Summer Classes";
})