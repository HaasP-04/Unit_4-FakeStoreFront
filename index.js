// Define global variable 
let navbarCategories = {
  theStore: "The Store",
  cart: "Cart",
  eyewear: "Eyewear",
  sunglasses: "Sunglasses",
  accessories: "Accessories",
  cleaning: "Cleaning"
};

// Define Display Div
let div = {

}

// variable that will hold API URL

async function fakeStore(endpoint) {
  const reponse = await fetch ('https://fakestoreapi.com/products')
  const data = await response.json();

  console.log(data);

  // Fix errors in function 
  return data;
}catch (error) {

  console.error('Error:', error);
  throw error;

}