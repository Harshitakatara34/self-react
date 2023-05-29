// Write code related to Home page here
let temp = JSON.parse(localStorage.getItem("task-list"))||[];

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault;
  let name = document.querySelector("#name");
  let desc = document.querySelector("#desc");
  let start = document.querySelector("#start");
  let end = document.querySelector("#end");
  let select = document.querySelector("#priority");
 
  let obj = {
    name: name.value,
    desc: desc.value,
    start: start.value,
    end: end.value,
    select: select.value,
  };
  temp.push(obj);
  localStorage.setItem("task-list", JSON.stringify(temp));
});
