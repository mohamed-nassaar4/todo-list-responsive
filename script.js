var button1=document.querySelector("#butt");
var button2=document.querySelector("#delbutt")
var input=document.querySelector("input");
var ul=document.querySelector("ul");

function inputValueLength(){
    return input.value.length;
}

function createList(){
    var li= document.createElement("li");
    // var listbutt=document.createElement("button");
    // listbutt.classList.add("btn");
    // li.classList.add("btn1");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
   
    
}

function afterClickMouse(){
        if(inputValueLength()>0){
            createList();
        }
    }
function afterClickEnter(event){     //event
        if(inputValueLength()>0 && event.keyCode===13){    //keycode or which
            createList();
        }
}
function afterClickDelete(){
    return ul.removeChild(ul.firstElementChild);
           
}
// //maincode
button1.addEventListener("click",afterClickMouse);
input.addEventListener("keypress",afterClickEnter);
button2.addEventListener("click",afterClickDelete);