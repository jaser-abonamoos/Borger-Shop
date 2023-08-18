function btnAside(){
    document.getElementById("Asidebar").style.visibility="visible";
}
window.addEventListener("mouseup",function(event){
    var box=document.getElementById("Asidebar");
    if(event.target !=box){
        box.style.visibility="hidden";
    }
})