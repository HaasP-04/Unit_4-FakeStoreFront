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
  

    let image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.className = "card-img-top";
  
    
    let cardbody = document.createElement("div");
    cardbody.className = "card-body";
    
    
    let cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardtitle.innerText = product.title;
   

    //? First Accordion 

    let accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.id = "accordionExample";
   

    let accordionitem = document.createElement("div");
    accordionitem.className = "accordion-item";
   

    let accordionheader = document.createElement("h2");
    accordionheader.className = "accordion-header";
   

    let accordionbutton = document.createElement("button");
    accordionbutton.className = "accordion-button";
    accordionbutton.innerText = "Description"
    accordionbutton.type = "button";
    accordionbutton.setAttribute("data-bs-toggle", "collapse");
    accordionbutton.setAttribute("data-bs-target", "#collapseOne");
    accordionbutton.setAttribute("aria-expanded", true);
    accordionbutton.setAttribute("aria-controls", "collapseOne")
    


    let accordioncollapsecollapseshow = document.createElement("div");
    accordioncollapsecollapseshow.id = "collapseOne";
    accordioncollapsecollapseshow.className ="accordion-collapse collapse show";
    accordioncollapsecollapseshow.setAttribute ("data-bs-parent", "#accordionExample")
    

    let accordionbody = document.createElement("div");
    accordionbody.className = "accordion-body";
   

    //? Second Accordion

    let accordion2 = document.createElement("div");
    accordion2.className = "accordion2";
    accordion2.id = "accordionExample2";
   

    let accordionitem2 = document.createElement("div");
    accordionitem2.className = "accordion-item2";
    

    let accordionheader2 = document.createElement("h2");
    accordionheader2.className = "accordion-header2";
    

    let accordionbuttoncollapsed = document.createElement("button");
    accordionbuttoncollapsed.className = "accordion-button collapsed";
    accordionbuttoncollapsed.innerText = "Price";
    accordionbuttoncollapsed.type = "button";
    accordionbuttoncollapsed.setAttribute ("data-bs-toggle", "collapse");
    accordionbuttoncollapsed.setAttribute ("data-bs-target", "#collapseTwo");
    accordionbuttoncollapsed.setAttribute ("aria-expanded", false);
    accordionbuttoncollapsed.setAttribute ("aria-controls","collapseTwo");
   


    let accordioncollapsecollapse = document.createElement("div");
    accordioncollapsecollapse.id = "collapseTwo";
    accordioncollapsecollapse.className ="accordion-collapse collapse";
    accordioncollapsecollapse.setAttribute ("data-bs-parent","#accordionExample2");
   

    let accordionbody2 = document.createElement("div");
    accordionbody2.className = "accordion-body2";
   
    //? accordion details 
    let cardtext = document.createElement("p");
    cardtext.className = "card-text";
    cardtext.innerText = product.description;
    cardtext.innerText = product.price;
   

    let listgrouplistgroupflush = document.createElement("ul");
    listgrouplistgroupflush.className = "listgrouplistgroupflush";
    
   
    let listgroupitem1 = document.createElement("li");
    listgroupitem1.className = "list-group-item1";
    listgroupitem1.innerText = product.description;
    
    
    
    let listgroupitem2 = document.createElement("li");
    listgroupitem2.className = "list-group-item2";
    listgroupitem2.innerText = product.price;

        //? Cart 

    let dgridgap2 = document.createElement("div");
    dgridgap2.className = "d-grid gap-2";
   
    let productCart = document.createElement("button");
    productCart.className = "btn btn-dark";
    productCart.innerText = "Add to Cart"


    
    display.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardbody);
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(accordion);

    accordion.appendChild(accordionitem);
    accordionitem.appendChild(accordionheader);
    accordionheader.appendChild(accordionbutton);
    accordionitem.appendChild(accordioncollapsecollapseshow);
    accordioncollapsecollapseshow.appendChild(accordionbody);
    
    cardbody.appendChild(accordion2);

    accordion2.appendChild(accordionitem2);
    accordionitem2.appendChild(accordionheader2);
    accordionheader2.appendChild(accordionbuttoncollapsed);
    accordionitem2.appendChild(accordioncollapsecollapse);
    accordioncollapsecollapse.appendChild(accordionbody2);
    
    card.appendChild(listgrouplistgroupflush);
    listgrouplistgroupflush.appendChild(listgroupitem1);
    //card.appendChild(cardtext);
    listgrouplistgroupflush.appendChild(listgroupitem2);
    accordionbody.appendChild(listgroupitem1);
    accordionbody2.appendChild(listgroupitem2);

    card.appendChild(dgridgap2);
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

async function submitToCart() {
  
}

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
