const input   = document.querySelector("input");
const form    = document.querySelector("form");
const btn     = document.querySelector(".add");
const result  = document.querySelector(".result");
const delBtn  = document.querySelector(".delete");

const clearAll= document.getElementById("clearAll");
clearAll.addEventListener("click",()=>{
  console.log("cleartriggered");
  localStorage.clear();
  flush();
}, false);

const taskcreationloop = ()=>{
  Object.keys(localStorage).forEach(taskcreator)
    
/*     function(key){
    console.log(localStorage.getItem(key));
 }); */
};

const taskcreator = (tasktext) => {

  let li = document.createElement("li");
  result.appendChild(li);
  let checktrue = false;

  const checker = (e) => {
    if (e.target.innerHTML===""){
      e.target.innerHTML="✔️";
      console.log(e.target.previousSibling.innerHTML);
      localStorage.setItem(e.target.previousSibling.innerHTML,true);
    } else {
      e.target.innerHTML="";
      localStorage.setItem(e.target.previousSibling.innerHTML,false);
    };
  };

  let first = document.createElement("div");
  li.appendChild(first);
  first.classList.add("editbtn");
  first.innerHTML = "X";
  first.addEventListener("click", (e)=>{
    e.target.parentElement.remove();
    keya = e.target.nextSibling.innerHTML;
    localStorage.removeItem(keya);
  },false);  

  let middle = document.createElement("p");
  li.appendChild(middle);
  middle.innerHTML = tasktext;

  let last = document.createElement("div");
  li.appendChild(last);
  last.classList.add("checkbox");
  last.innerHTML= localStorage.getItem(tasktext) =="true"?"✔️":"";
  last.addEventListener("click",checker,false);
};

const flush = ()=>{
  input.value = "";
  while (result.firstChild){
    result.firstChild.remove();
  }
}

const localStorer = (tasktext) => {
  console.log("localstorage "+tasktext)
  localStorage.setItem(tasktext, "0");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputField = input.value.trim();
  if (inputField === "") {
    alert("please add your task");
  } else {
    localStorer (input.value);
    flush();
    taskcreationloop ();
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





// Localstorage /LZ


// Test from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")===false) { 
  alert("Local Storage unavailable. You are not able to use this app. Sorry. It's not us, it's you - fosho!")
}

taskcreationloop ();