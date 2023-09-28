let electronics = document.getElementById("electronics");
let jewerely = document.getElementById("jewerely");
let mens = document.getElementById("mens");
let womens = document.getElementById("womens");
let display = document.getElementById("display");

function displayCards(products) {
  products.forEach((product) => {

    let card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem";
    display.appendChild(card);

    let image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.className = "card-img-top";
    card.appendChild(image);
    
    let cardbody = document.createElement("div");
    cardbody.className = "card-body";
    card.appendChild(cardbody);
    
    let cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardtitle.innerText = "Card Title";
    cardbody.appendChild(cardtitle);
    
    let cardtext = document.createElement("p");
    cardtext.className = "card-text";
    cardtext.innerText =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";
    cardbody.appendChild(cardtext);

    let listgrouplistgroupflush = document.createComment("ul");
    ul.className = "list-group lsit-group-flush";
    card.appendChild(listgrouplistgroupflush);

    let listgroupitem1 = document.createElement("li");
    li.className = "lsit-group-item";
    li.innerText = "Description";
    listgrouplistgroupflush.appendChild(listgroupitem1);
    
    let listgroupitem2 = document.createElement("li");
    li.className = "lsit-group-item";
    li.innerText = "Price";
    listgrouplistgroupflush.appendChild(listgroupitem2);

    let cardbody2 = document.createElement("div");
    cardbody2.className = "card-body2";
    card.appendChild(cardbody2);

    

  



    
  });
}

// variable that will hold API URL
async function getfakeStore(endpoint) {
  const response = await fetch("https://fakestoreapi.com/products" + endpoint);
  let data = await response.json();

  // Fix errors in function
  // return data;

  // console.error('Error:', error);
  // throw error;

  displayCards(data);
}

window.onload = (event) => {
  getfakeStore("/");
};

electronics.addEventListener("click", (e) => {
  getfakeStore("/category/electronics");
});
jewerely.addEventListener("click", (e) => {
  getfakeStore("/category/jewerely");
});
mens.addEventListener("click", (e) => {
  getfakeStore("/category/mens");
});
womens.addEventListener("click", (e) => {
  getfakeStore("/category/womens");
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

// });
