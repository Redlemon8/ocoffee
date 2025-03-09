handleAllProducts();
handleCategorySelected();

function handleAllProducts() {
  const selectAllProducts = document.getElementById('select-all-products');
  selectAllProducts.addEventListener('click', toggleProducts);
}

function handleCategorySelected() {
  const categorySelect = document.getElementById("category");
  categorySelect.addEventListener("change", (event) => {
    const selectedCharacteristic = event.target.value;
    const allProducts = document.querySelectorAll(".items-box");
    let visibleProductsCount = 0;

    allProducts.forEach(product => {
      const productCharacteristic = product.dataset.coffeeCharacteristic;

      if (selectedCharacteristic === "*" || productCharacteristic === selectedCharacteristic) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });

    updateButtonText(visibleProductsCount === allProducts.length);

    const showAll = document.getElementById('show-all');
    showAll.classList.remove('items-container');
  });
}

function toggleProducts() {
  const showAll = document.getElementById('show-all');
  showAll.classList.toggle('items-container');

  const isVisible = showAll.classList.contains('items-container');
  updateButtonText(isVisible);
}

function updateButtonText(isVisible) {
  const selectAllProducts = document.getElementById("select-all-products");
  // if (!selectAllProducts) return;

  selectAllProducts.textContent = isVisible ? 'Voir tout' : 'Voir moins';
}