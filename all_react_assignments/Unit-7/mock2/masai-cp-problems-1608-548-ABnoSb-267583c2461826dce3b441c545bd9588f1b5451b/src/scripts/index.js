document.querySelector("tbody").innerHTML = "";

let page = 1; 

function getData(page) {
    document.querySelector("tbody").innerHTML = "";
  fetch(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`)
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
}

getData();

function displayData(data) {
  let totalItems = data.total;
  let totalPages = data.total_pages;
  console.log(totalItems, totalPages);
  console.log(data);

  data?.data.forEach((el, i) => {
    console.log(el);
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.competition;
    let td2 = document.createElement("td");
    td2.innerText = el.year;
    let td3 = document.createElement("td");
    td3.innerText = el.round;
    let td4 = document.createElement("td");
    td4.innerText = el.team1;
    let td5 = document.createElement("td");
    td5.innerText = el.team2;
    let td6 = document.createElement("td");
    td6.innerText = el.team1goals;
    let td7 = document.createElement("td");
    td7.innerText = el.team2goals;

    row.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(row);
  });

  document.querySelector("#button").addEventListener("click", () => {
   location.href = "filter.html";
  });

  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  prev.addEventListener("click", () => {
    if (page > 1) {
      page--;
      getData(page);
    }
  });

  next.addEventListener("click", () => {
    if (page < totalPages) {
      page++;
      getData(page);
    }
  });
}
