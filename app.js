const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
let seconds = 0;

const resMin = document.querySelector(".res-min");
const resSec = document.querySelector(".res-sec");

addBtn.addEventListener("click", createListItem);
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

function createListItem() {
  const element = document.createElement("article");
  // add class
  element.classList.add("item");
  // add id
  //   const attr = document.createAttribute("data-id");
  //   attr.value = id;
  //   element.setAttributeNode(attr);
  element.innerHTML = `<label class="input">
  <input type="number" class="min" max="60" min="0" onchange="addTime()"/>
  min
</label>
<label class="input">
  <input type="number" class="second" max="60" min="0" onchange="addTime()"/>
  sec
</label>`;
  // append child
  list.appendChild(element);
}

function addTime() {
  console.log(list);
  if (event.target.classList == "min") {
    seconds += +event.target.value * 60;
  } else if (event.target.classList == "second") {
    seconds += +event.target.value;
  }
  console.log(Math.floor(seconds / 60));
  console.log(seconds % 60);

  let minutes = format(Math.floor(seconds / 60));
  let sec = format(seconds % 60);
  resMin.textContent = minutes;
  resSec.textContent = sec;
}

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}
