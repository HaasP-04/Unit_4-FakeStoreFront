let electronics = document.getElementById("electronics");
let jewelery = document.getElementById("jewelery");
let mens = document.getElementById("mens");
let womens = document.getElementById("womens");
let display = document.getElementById("display");

function displayCards(products) {
  products.forEach((product) => {
    console.log(product.title)

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
    cardtitle.innerText = product.title;
    cardbody.appendChild(cardtitle);
    
    let cardtext = document.createElement("p");
    cardtext.className = "card-text";
    cardtext.innerText = product.description;
    cardbody.appendChild(cardtext);

    let listgrouplistgroupflush = document.createElement("ul");
    listgrouplistgroupflush.className = "listgrouplistgroupflush";
    card.appendChild(listgrouplistgroupflush);

    let listgroupitem1 = document.createElement("li");
    listgroupitem1.className = "lsit-group-item1";
    listgroupitem1.innerText = "Description";
    listgrouplistgroupflush.appendChild(listgroupitem1);
    
    let listgroupitem2 = document.createElement("li");
    listgroupitem2.className = "lsit-group-item2";
    listgroupitem2.innerText = product.price;
    listgrouplistgroupflush.appendChild(listgroupitem2);

    let cardbody2 = document.createElement("div");
    cardbody2.className = "card-body2";
    card.appendChild(cardbody2);

    let productCart = document.createElement("a");
    productCart.className = "btn btn-primary";
    productCart.innerText = "Add to Cart"
    cardbody2.appendChild(productCart);
  



    
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
jewelery.addEventListener("click", (e) => {
  getfakeStore("/category/jewelery");
});
mens.addEventListener("click", (e) => {
  getfakeStore("/category/men's clothing");
});
womens.addEventListener("click", (e) => {
  getfakeStore("/category/women's clothing");
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

// });
