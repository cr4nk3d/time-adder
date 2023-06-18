const list = document.querySelector(".list");
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
let s = 0;

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
    const allItems = list.querySelectorAll(".item");
  s = 0;
  allItems.forEach((item) => {
    let inp = item.querySelectorAll("input");
    inp.forEach((i) => {
      if (i.classList == "min") {
        s += +i.value * 60;
      } else if (i.classList == "second") {
        s += +i.value;
      }
    });
  });

  let minutes = format(Math.floor(s / 60));
  let sec = format(s % 60);
  resMin.textContent = minutes;
  resSec.textContent = sec;
}

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}
