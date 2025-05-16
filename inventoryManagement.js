// Write your code here
//Create Product Inventory Array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];
  console.log(products);
  //Output: "Laptop", "Phone", "Headphones", "Monitor"];

//Access Product Information
function logFirstProduct() {
  return products[0];
}
console.log(logFirstProduct());
//Output: "Laptop" 

//Add Product
function addProduct(productName) {
  products.push(productName);
}
addProduct("Case");
console.log(products);
//Output: "Laptop", "Phone", "Headphones", "Monitor", "Case"

//Update Product Information
function updateProductName(index, newName) {
  products[index] = newName;
}
updateProductName(1, "Pager");
console.log(products); 
//Output: "Laptop", "Pager", "Headphones", "Monitor", "Case";

//Remove Product
function removeLastProduct(productName) {
  products.pop();
}
removeLastProduct();
console.log(products);
//Output: "Laptop, "Pager", "Headphones", "Monitor";

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
