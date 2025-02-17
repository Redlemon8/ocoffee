// initSeeMoreProductsButton();
// initCategoryFilter();

// function initSeeMoreProductsButton() {
//   const selectAllProducts = document.getElementById("select-all-products");
//   selectAllProducts.addEventListener("click", showAllSelectedProducts);  
// }

// function initCategoryFilter() {
//   const category = document.getElementById("category");
//   category.addEventListener("change", (event) => {
//     const categoryId = event.target.value;

//     const allProducts = document.querySelectorAll("");
//     allProducts.forEach(section => section.classList.remove("hidden"));

//     if (categoryId === "*") { 
//       return; 
//     }
  
//     allProducts.forEach(section => {
//       if (section.dataset.categoryId !== categoryId) {
//         section.classList.add("hidden");
//       }
//     });

//     showAllSelectedProducts();
//   });
// }


// function showAllSelectedProducts() {
//   const discoverContainer = document.getElementById("discover-container");
//   discoverContainer.classList.remove("items-container");

//   const selectAllProducts = document.getElementById("select-all-products");
//   if (! selectAllProducts) { 
//     return; 
//   }
//   selectAllProducts.remove();
// }