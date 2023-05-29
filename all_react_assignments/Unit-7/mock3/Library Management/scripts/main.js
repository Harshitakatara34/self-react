// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

async function getBooks(bookURL) {
  try {
    let res = await fetch(bookURL);
    let data = await res.json();
    booksData = data;
    renderData(data);
  } catch (error) {
    console.log(error);
  }
}

getBooks(bookURL);

function renderData(data) {
  mainSection.innerHTML = "";
  let cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  let new_array = data.map((el) => {
    return `<div class="card" data-id=${el.id}>
          <div class="card-img">
          <img src=${el.image} alt=${el.category}/>
          </div>
          <div class="card-body">
            <h4 class="card-title">
              ${el.title}
            </h4>
            <p class="card-author">${el.author}</p>
            <p class="card-category">${el.category}</p>
            <p class="card-price">${el.price}</p>
            <a href="#" data-id=${el.id} class="card-link">Edit</a>
            <button data-id=${el.id} class="card-button">Delete</button>
          </div>
    </div>
    `;
  });
  cardList.innerHTML = new_array.join(" ");
  mainSection.append(cardList);
  let allD_dlt_btn = document.querySelectorAll(".card-button");
  for (let dlt_btn of allD_dlt_btn) {
    dlt_btn.addEventListener("click", function (event) {
      let id = event.target.dataset.id;
      deleteBook(id);
    });
  }

  let all_edit_btn = document.querySelectorAll(".card-link");
  for (let edit_btn of all_edit_btn) {
    edit_btn.addEventListener("click", function (event) {
      event.preventDefault();
      let book_id = edit_btn.dataset.id;
      updateBookIdInput.value = book_id;
      updatePriceBookId.value = book_id;

      updatePriceBookPriceButton.addEventListener("click", () => {
        let price=updatePriceBookPrice.value
        updatePrice(book_id,price);
      });
      updateBookBtn.addEventListener("click", () => {
        let id = updateBookIdInput.value;
        let title = updateBookTitleInput.value;
        let image = updateBookImageInput.value;
        let author = updateBookAuthorInput.value;
        let category = updateBookCategoryInput.value;
        let price = updateBookPriceInput.value;
        let obj = {
          id,
          title,
          author,
          category,
          image,
          price,
        };
        editBook(book_id,obj);
      });
    });
  }
}


async function updatePrice(id,price){
  try {
    let edit_Price_data=await fetch(`${bookURL}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({price}),
    });
    if(edit_Price_data.ok){
      getBooks(bookURL);
    }
  } catch (error) {
    console.log(error)
  }
 
}

async function editBook(book_id, obj) {
  try {
    let edit_data = await fetch(`${bookURL}/${book_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (edit_data) {
      getBooks(bookURL);
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteBook(id) {
  try {
    let dltData = await fetch(`${bookURL}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (dltData.ok) {
      getBooks(bookURL);
    }
  } catch (error) {
    console.log(error);
  }
}

bookCreateBtn.addEventListener("click", function () {
  let bookData = {
    title: bookTitleInput.value,
    author: bookAuthorInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    price: bookPriceInput.value,
  };
  RegisterBook(bookData);
});

async function RegisterBook(data) {
  try {
    let register_req = await fetch(bookURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (register_req.ok) {
      getBooks(bookURL);
    }
  } catch (error) {
    console.log(error);
  }
}

sortAtoZBtn.addEventListener("click",()=>{
   let sortData=booksData.sort((a,b)=>a.price-b.price)

   renderData(sortData)
})

sortZtoABtn.addEventListener("click",()=>{
  let sortData=booksData.sort((a,b)=>b.price-a.price)
  renderData(sortData)
})

filterClassic.addEventListener("click",()=>{
  let val=filterClassic.innerText.toLowerCase()
  let filterData=booksData.filter((el)=>{
     return el.category.toLowerCase()===val
  })
  renderData(filterData)
})

filterFantasy.addEventListener("click",()=>{
 let val=filterFantasy.innerText.toLowerCase()
  let filterData=booksData.filter((el)=>{
    return el.category.toLowerCase()===val
  })
  renderData(filterData)
})

filterMystery.addEventListener("click",()=>{
  let val=filterMystery.innerText.toLocaleLowerCase()
  let filterData=booksData.filter((el)=>{
    return el.category.toLowerCase()===val
  })
  renderData(filterData)
})


// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");
let searching
let searchby=searchBySelect.addEventListener("change",(e)=>{
  searching=e.target.value
})

searchByButton.addEventListener("click",function(){
   let search=searchByInput.value
   let url=`${bookURL}?${searching}=${search}`
   getBooks(url)
})