handleAllProducts();
handleCategorySelected();


function handleAllProducts() {
  const selectAllProducts = document.getElementById('select-all-products');
  selectAllProducts.addEventListener('click', showAllProducts);
}

function handleCategorySelected() {
  const categorySelect = document.getElementById("category");
  categorySelect.addEventListener("change", (event) => {
    const selectedCharacteristic = event.target.value;

    const allProducts = document.querySelectorAll(".items-box");

    allProducts.forEach(product => {
      const productCharacteristic = product.dataset.coffeeCharacteristic;

      if (selectedCharacteristic === "" || productCharacteristic === selectedCharacteristic) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });

    showAllProducts();
  });
}

function showAllProducts() {
  
  const showAll = document.getElementById('show-all');
  showAll.classList.remove('items-container');

  const selectAllProducts = document.getElementById("select-all-products");
  if (! selectAllProducts) { 

    return; 
  }
  selectAllProducts.remove();
}
