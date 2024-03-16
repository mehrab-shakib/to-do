const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("Don't You have any kajkam?");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData() ;
}

listContainer.addEventListener("click", function (event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData(); 
    } else if (event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData(); 
    }
});

inputBox.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addTask(); 
    }
})

function saveData (){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showSavedData (){
    listContainer.innerHTML=localStorage.getItem("data"); 
}

showSavedData(); 
