const input   = document.querySelector("input");
const form    = document.querySelector("form");
const btn     = document.querySelector(".add");
const result  = document.querySelector(".result");
const delBtn  = document.querySelector(".delete");



const taskcreator = (tasktext) => {

  let li = document.createElement("li");
  result.appendChild(li);

  const checker = (e) => {
    if (e.target.innerHTML===""){
      e.target.innerHTML="✔️";
    } else e.target.innerHTML="";
    };

  let first = document.createElement("div");
  li.appendChild(first);
  first.classList.add("editbtn");
  first.innerHTML = "X";
  first.addEventListener("click", (e)=>{e.target.parentElement.remove();},false);  

  let middle = document.createElement("p");
  li.appendChild(middle);
  middle.innerHTML = tasktext;

  let last = document.createElement("div");
  li.appendChild(last);
  last.classList.add("checkbox");
  last.innerHTML="";
  last.addEventListener("click",checker,false);

};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputField = input.value.trim();
  if (inputField === "") {
    alert("please add your task");
  } else {
    taskcreator (input.value);
    input.value = "";
  }
});

result.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

taskcreator("test");
taskcreator("test2");
taskcreator("test3");
taskcreator("test4");