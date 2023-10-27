let electronics = document.getElementById("electronics");
let jewelery = document.getElementById("jewelery");
let mens = document.getElementById("mens");
let womens = document.getElementById("womens");
let display = document.getElementById("display");

function displayCards(products) {
  products.forEach((product) => {
    console.log(product.title)

    //? Appending Displaying Cards 

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

    let accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.id = "accordionExample";
    cardbody.appendChild(accordion);

    let accordionitem = document.createElement("div");
    accordionitem.className = "accordion-item";
    accordion.appendChild(accordionitem);

    let accordionheader = document.createElement("h2");
    accordionheader.className = "accordion-header";
    accordionitem.appendChild(accordionheader);

    let accordionbutton = document.createElement("button");
    accordionbutton.className = "accordio-button";
    accordionbutton.type = "button";
    accordionbutton.databstoggle = "collapse";
    accordionbutton.databstarget = "collapseOne";
    accordionbutton.ariaExpanded = "true";
    accordionbutton.ariaControls ="collapseOne"
    accordionheader.appendChild(accordionbutton);

    let accordioncollapsecollapseshow = document.createElement("div");
    accordioncollapsecollapseshow.id = "collapseOne";
    accordioncollapsecollapseshow.className ="accordion-collapse collapse show";
    accordioncollapsecollapseshow.databsparent = "#accordionExample"
    accordionitem.appendChild(accordioncollapsecollapseshow);

    let accordionbody = document.createElement("div");
    accordionbody.className = "accordion-body";
    accordioncollapsecollapseshow.appendChild(accordionbody);
    accordionbody.appendChild(listgroupitem1);

    
    // let cardtext = document.createElement("p");
    // cardtext.className = "card-text";
    // cardtext.innerText = product.description;
    // cardbody.appendChild(cardtext);

    let listgrouplistgroupflush = document.createElement("ul");
    listgrouplistgroupflush.className = "listgrouplistgroupflush";
    card.appendChild(listgrouplistgroupflush);

    let listgroupitem1 = document.createElement("li");
    listgroupitem1.className = "lsit-group-item1";
    listgroupitem1.innerText = product.description;
    listgrouplistgroupflush.appendChild(listgroupitem1);
    
    let listgroupitem2 = document.createElement("li");
    listgroupitem2.className = "lsit-group-item2";
    listgroupitem2.innerText = product.price;
    listgrouplistgroupflush.appendChild(listgroupitem2);

    let dgridgap2 = document.createElement("div");
    dgridgap2.className = "d-grid gap-2";
    card.appendChild(dgridgap2);

    let productCart = document.createElement("a");
    productCart.className = "btn btn-dark";
    productCart.innerText = "Add to Cart"
    dgridgap2.appendChild(productCart);
  



    
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

//? endpoints for categories 

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
