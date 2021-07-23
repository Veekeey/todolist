

//dashboard

let creationForm = document.querySelector(".creation");
let inputTitle = document.getElementById("title");
let titleHeading = document.querySelector(".title-heading");
let inputList = document.getElementById("input-todo");
let newListLI = document.createElement("li");
let newTodo = document.querySelector(".list-for-creation");


// to show the creation form
const showCreationForm = ()=> {
  creationForm.style.display = "block";
}
  let create = document.querySelector(".create").addEventListener("click", showCreationForm);


//to add title
const addTitle = (e)=> {
  e.preventDefault();
  titleHeading.innerHTML = inputTitle.value;
}
  let createTitle = document.querySelector(".create-title").addEventListener("click", addTitle);

//to add to list
const addList = (e)=> {
  e.preventDefault();
  newListLI.innerText = inputList.value
  newTodo.appendChild(newListLI);

  console.log(newListLI.innerText);
}
  let add = document.querySelector(".add").addEventListener("click", addList);


//to save a new todo
let newCreated = document.querySelector(".ordered-list-created");
const saveToList = (e)=>{
  e.preventDefault();
  newListLI.innerText = titleHeading.innerHTML
  newCreated.appendChild(newListLI);
  titleHeading.innerHTML = " ";
  console.log(newListLI.innerText);
}
  let save = document.querySelector(".save").addEventListener("click", saveToList);
    
   