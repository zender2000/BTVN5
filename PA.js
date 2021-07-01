function changeContent(){
    if(a.innerHTML == "Hello men"){a.innerHTML="Hello men"}
    else{a.innerHTML = "Hello men"}
}

var a = document.getElementById("test")

document.getElementById("btn").addEventListener("click",() => { a.style = "font-weight: bold"})