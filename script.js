const input = document.getElementById("inputs");
const lists = document.getElementById("list");
const error = document.getElementById("error");

function add(){
    if(input.value === ''){
       error.innerHTML= "You must type something*";
       
    }
    else{
        error.innerHTML= " ";
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    save();
}
lists.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data", lists.innerHTML);
}
  function show(){
      lists.innerHTML = localStorage.getItem("data");
  }
show();