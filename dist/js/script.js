window.addEventListener("scroll",scrollFunction);
window.addEventListener("scroll",myfunction);
var gototop = document.getElementsByClassName("gototop");
window.onload = $(".gototop").css("display","none");
function scrollFunction(){
    if (window.pageYOffset > 300){
    $(".gototop").fadeIn(500,function(){});
    }else{
    $(".gototop").css("display","none");
    }
}
function myfunction(){
    if (window.pageYOffset > 300){
        $("nav").css("backgroundColor","  #ff21649b");
    }else{
        $("nav").css("backgroundColor"," #ff216400")
    }
}
$("#btn").on("click",function(){
    $("body").css("overflow", "hidden");
    })

$("#cancel").on("click",function(){
    $("body").css("overflow", "auto");
    })