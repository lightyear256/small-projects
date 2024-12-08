

let count=1;
function add(){
    if(document.querySelector(".container").children.length===0){
        count=1;
    }
    let val=document.querySelector(".inp").value;
    const div=document.querySelector(".container");
    div.insertAdjacentHTML("beforeend",
        
        `<div class="hero" id="todo-${count}">
        <div id="todov-${count}">${val}</div>
        <div class=btn>
            <button onclick="delet(${count})">Delete</button>
            <button onclick="edit(${count})">Edit</button>
        </div>
        </div>`
    );
    count++;
    clearInput();
}
function delet(val){
    const el=document.getElementById("todo-"+val);
    document.querySelector(".container").removeChild(el);
}
function edit(val){
    const el=document.getElementById("todov-"+val);
    const inp=document.querySelector(".inp").value;
    el.innerHTML=inp;
    clearInput();
}
function clearInput() {
    document.querySelector(".inp").value = ""; // Clear the input
}