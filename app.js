const input = document.querySelector("input");
const form = document.querySelector("form");
const btn = document.querySelector(".add");
const result = document.querySelector(".result");
const delBtn = document.querySelector(".delete");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputField = input.value.trim();
  if (inputField === "") {
    alert("please add your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    result.appendChild(li);
    input.value = "";
    let delBtn = document.createElement("span");
    delBtn.innerHTML = "Delete";
    li.appendChild(delBtn);
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