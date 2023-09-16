let electronics = document.getElementById("electronics")


// variable that will hold API URL
async function getfakeStore(endpoint) {
  const response = await fetch ('https://fakestoreapi.com/products'+ endpoint)
  let data = await response.json();

  console.log(data);

  // Fix errors in function 
  // return data;


  // console.error('Error:', error);
  // throw error;

}

window.onload = (event) => {
  getfakeStore("/");
};

electronics.addEventListener("click", (e) => {
  getfakeStore("/category/electronics")
});
jewelery.addEventListener("click", (e) => {
  getfakeStore("/category/jewelery")
});
mensclothing.addEventListener("click", (e) => {
  getfakeStore("/category/men's clothing")
});
womensclothing.addEventListener("click", (e) => {
  getfakeStore("/category/women's clothing")
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

// });