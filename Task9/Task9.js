// DOM Selection

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const loadingText = document.getElementById("loading");
const statsDiv = document.getElementById("stats");

const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartItemsDiv = document.getElementById("cartItems");

// Variables

let products = [];
let cart = [];

// ==================== FETCH API ====================

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;

    displayProducts(products);

    calculateStatistics(products);

    loadingText.innerText =
      "Products Loaded Successfully";
  })
  .catch((error) => {
    console.log(error);

    loadingText.innerText =
      "Failed To Load Products";
  })
  .finally(() => {
    console.log("API Request Completed");
  });

// ==================== DISPLAY PRODUCTS ====================

function displayProducts(productArray) {

  productsContainer.innerHTML = "";

  productArray.forEach((product) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.title}</h3>

      <p><b>Price:</b> $${product.price}</p>

      <p><b>Category:</b>
      ${product.category}</p>

      <p><b>Rating:</b>
      ${product.rating.rate}</p>

      <button onclick="addToCart(${product.id})">
      Add To Cart
      </button>
    `;

    productsContainer.append(card);
  });
}

// ==================== SEARCH ====================

searchInput.addEventListener("input", () => {

  const keyword =
    searchInput.value.toLowerCase();

  const filteredProducts =
    products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(keyword)
    );

  displayProducts(filteredProducts);
});

// ==================== CATEGORY FILTER ====================

categorySelect.addEventListener("change", () => {

  const selectedCategory =
    categorySelect.value;

  if (selectedCategory === "all") {

    displayProducts(products);
    return;
  }

  const filteredProducts =
    products.filter(
      (product) =>
        product.category ===
        selectedCategory
    );

  displayProducts(filteredProducts);
});

// ==================== ADD TO CART ====================

function addToCart(id) {

  const product =
    products.find(
      (item) => item.id === id
    );

  cart.push(product);

  updateCart();
}

// ==================== REMOVE FROM CART ====================

function removeFromCart(id) {

  cart = cart.filter(
    (item) => item.id !== id
  );

  updateCart();
}

// ==================== UPDATE CART ====================

function updateCart() {

  cartCount.innerText = cart.length;

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total + item.price,
      0
    );

  cartTotal.innerText =
    totalPrice.toFixed(2);

  displayCartItems();
}

// ==================== DISPLAY CART ====================

function displayCartItems() {

  cartItemsDiv.innerHTML = "";

  cart.map((item) => {

    const card =
      document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}">
      <h4>${item.title}</h4>

      <p>$${item.price}</p>

      <button onclick=
      "removeFromCart(${item.id})">
      Remove
      </button>
    `;

    cartItemsDiv.append(card);
  });
}

// ==================== STATISTICS ====================

function calculateStatistics(productArray) {

  const totalProducts =
    productArray.length;

  const averagePrice =
    productArray.reduce(
      (sum, product) =>
        sum + product.price,
      0
    ) / totalProducts;

  const highestPriceProduct =
    [...productArray].sort(
      (a, b) =>
        b.price - a.price
    )[0];

  const lowestPriceProduct =
    [...productArray].sort(
      (a, b) =>
        a.price - b.price
    )[0];

  statsDiv.innerHTML = `
    <h2>Product Statistics</h2>

    <p>
      Total Products:
      ${totalProducts}
    </p>

    <p>
      Average Price:
      $${averagePrice.toFixed(2)}
    </p>

    <p>
      Highest Price Product:
      ${highestPriceProduct.title}
    </p>

    <p>
      Lowest Price Product:
      ${lowestPriceProduct.title}
    </p>
  `;
}