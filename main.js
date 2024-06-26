import { TCache } from "./cache.js";

let size;

let cache;

const insertBtn = document.getElementById("insert-id");
const deleteBtn = document.getElementById("delete-btn");
const output = document.querySelector(".output");
let key = "";
let value = "";
const sizeInp = document.getElementById("size");
const createBtn = document.getElementById("create-btn");

document.getElementById("key").addEventListener("focusout", (e) => {
  key = e.target.value;
});

document.getElementById("value").addEventListener("focusout", (e) => {
  value = e.target.value;
});

createBtn.addEventListener("click", () => {
  size = sizeInp.value || 4;
  cache = new TCache(size);
});

insertBtn.addEventListener("click", () => {
  console.log(key, value);
  if (!cache) return alert("insert cache size or click create cache");
  cache.set(key, value);
  render();
});

function render() {
  let current = cache.cache.head;
  output.innerHTML = "";

  while (current) {
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div class='cache-container' >
     ${
       current.prev === null
         ? ""
         : "<div class='prev'>prev <span>&uarr; </span></div>"
     }  
     <div class='cache'>
    <strong>Key:</strong> ${current.key}, <strong>Value:</strong> ${
      current.value
    }</div>
 
    ${
      current.next === null
        ? ""
        : "<div class='next'>next <span>&darr;</span></div>"
    }
    </div>`;
    output.appendChild(div);
    current = current.next;
  }
}
