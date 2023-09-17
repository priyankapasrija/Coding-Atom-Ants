const input   = document.querySelector("input");
const form    = document.querySelector("form");
const btn     = document.querySelector(".add");
const result  = document.querySelector(".result");
const delBtn  = document.querySelector(".delete");

const taskcreator =(tasktext)=>{
  let li = document.createElement("li");
  console.log(li);
  console.log("asdfasdfasdf");
  li.innerHTML = input.value;
  result.appendChild(li);
  input.value = "";

  let delBtn = document.createElement("span");
  delBtn.innerHTML = "Delete";
  li.appendChild(delBtn);

  let first = document.createElement("div");
  li.appendChild(first);
  let middle = document.createElement("p");
  li.appendChild(middle);
  let last = document.createElement("div");
  li.appendChild(last);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputField = input.value.trim();
  if (inputField === "") {
    alert("please add your task");
  } else {
    taskcreator ();
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