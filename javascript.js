let inputfield=document.getElementById("result")
console.log(inputfield);
let clickButton=document.getElementById("button")
console.log(clickButton);
let StoreTodo=document.getElementById("todo");
console.log(StoreTodo);

clickButton.addEventListener("click",function(){
    var para=document.createElement('p');
    para.innerText=inputfield.value;
    inputfield.value=""
    StoreTodo.appendChild(para);
    para.addEventListener("click",function(){
        para.style.textDecoration="underline";
    })
    para.addEventListener("dblclick",function(){
        StoreTodo.removeChild(para)
    })
})
// clickButton.addEventListener("click",function(){
//     var paragraph=document.createElement('p');
//     paragraph.innerText=inputfield.value;
//     StoreTodo.appendChild(paragraph);
//     inputfield.value="";
//     paragraph.addEventListener("click",function(){
//         paragraph.style.textDecoration="line-through";
//     })
//     paragraph.addEventListener("dblclick",function(){
//         StoreTodo.removeChild(paragraph);
//     })
//     console.log(paragraph);
// })
