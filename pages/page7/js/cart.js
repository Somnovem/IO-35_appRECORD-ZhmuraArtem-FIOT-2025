// Product inventory
const productInventory = [
  { id: 1, name: "Ноутбук", price: 32000 },
  { id: 2, name: "Смартфон", price: 18000 },
  { id: 3, name: "Навушники", price: 1500 },
  { id: 4, name: "Клавіатура", price: 900 },
  { id: 5, name: "Мишка", price: 600 },
  { id: 6, name: "Монітор", price: 7500 },
  { id: 7, name: "Флеш-накопичувач", price: 400 },
  { id: 8, name: "Зовнішній диск", price: 2200 },
  { id: 9, name: "Колонки", price: 1300 },
  { id: 10, name: "Веб-камера", price: 800 },
  { id: 11, name: "Мікрофон", price: 1100 }
];

const ITEMS_PER_PAGE = 6;
let activePage = 1;

// Shopping cart storage
const shoppingCart = {};

// DOM element selectors
const productGridContainer = document.getElementById("products-list");
const pageNavigationContainer = document.getElementById("pagination");
const cartListContainer = document.getElementById("cart-items");
const totalItemsCounter = document.getElementById("cart-count");
const totalPriceDisplay = document.getElementById("cart-total");
const emptyCartButton = document.getElementById("cart-clear");

// Render product cards
function displayProducts() {
  productGridContainer.innerHTML = "";

  const pageStartIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const pageEndIndex = pageStartIndex + ITEMS_PER_PAGE;
  const currentPageProducts = productInventory.slice(pageStartIndex, pageEndIndex);

  const documentFragment = document.createDocumentFragment();

  currentPageProducts.forEach(item => {
    const productElement = document.createElement("article");
    productElement.className = "product-card";

    productElement.innerHTML = `
      <h3 class="product-card__title">${item.name}</h3>
      <p class="product-card__price">${item.price} ₴</p>
      <div class="product-card__actions">
        <span class="product-card__badge">ID: ${item.id}</span>
        <button class="btn btn--primary" data-add-id="${item.id}">
          Додати в кошик
        </button>
      </div>
    `;

    documentFragment.appendChild(productElement);
  });

  productGridContainer.appendChild(documentFragment);
}

// Render pagination controls
function displayPagination() {
  pageNavigationContainer.innerHTML = "";

  const totalPageCount = Math.ceil(productInventory.length / ITEMS_PER_PAGE);

  if (totalPageCount <= 1) {
    return;
  }

  const previousButton = document.createElement("button");
  previousButton.textContent = "«";
  previousButton.className = "pagination__btn";
  previousButton.disabled = activePage === 1;
  previousButton.addEventListener("click", () => {
    activePage--;
    refreshDisplay();
  });
  pageNavigationContainer.appendChild(previousButton);

  for (let pageNumber = 1; pageNumber <= totalPageCount; pageNumber++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = String(pageNumber);
    pageButton.className = "pagination__btn";
    if (pageNumber === activePage) {
      pageButton.classList.add("pagination__btn--active");
    }
    pageButton.addEventListener("click", () => {
      activePage = pageNumber;
      refreshDisplay();
    });
    pageNavigationContainer.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "»";
  nextButton.className = "pagination__btn";
  nextButton.disabled = activePage === totalPageCount;
  nextButton.addEventListener("click", () => {
    activePage++;
    refreshDisplay();
  });
  pageNavigationContainer.appendChild(nextButton);
}

// Add product to shopping cart
function insertProductToCart(productIdentifier) {
  const foundProduct = productInventory.find(item => item.id === productIdentifier);
  if (!foundProduct) return;

  if (!shoppingCart[productIdentifier]) {
    shoppingCart[productIdentifier] = { product: foundProduct, quantity: 0 };
  }
  shoppingCart[productIdentifier].quantity += 1;

  displayCart();
}

// Modify cart item quantity
function adjustCartQuantity(productIdentifier, changeAmount) {
  const cartItem = shoppingCart[productIdentifier];
  if (!cartItem) return;

  cartItem.quantity += changeAmount;
  if (cartItem.quantity <= 0) {
    delete shoppingCart[productIdentifier];
  }

  displayCart();
}

// Clear all items from cart
function emptyShoppingCart() {
  Object.keys(shoppingCart).forEach(key => {
    delete shoppingCart[key];
  });
  displayCart();
}

// Render cart contents
function displayCart() {
  cartListContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  let itemCount = 0;
  let priceTotal = 0;

  Object.values(shoppingCart).forEach(({ product, quantity }) => {
    itemCount += quantity;
    priceTotal += product.price * quantity;

    const listItem = document.createElement("li");
    listItem.className = "cart-item";

    listItem.innerHTML = `
      <div class="cart-item__info">
        <p class="cart-item__title">${product.name}</p>
        <p class="cart-item__meta">${product.price} ₴ × ${quantity}</p>
      </div>
      <div class="cart-item__controls">
        <button class="btn btn--ghost" data-dec-id="${product.id}">−</button>
        <span>${quantity}</span>
        <button class="btn btn--ghost" data-inc-id="${product.id}">+</button>
      </div>
    `;

    fragment.appendChild(listItem);
  });

  cartListContainer.appendChild(fragment);

  totalItemsCounter.textContent = itemCount;
  totalPriceDisplay.textContent = priceTotal;
}

// Refresh all views
function refreshDisplay() {
  displayProducts();
  displayPagination();
}

// Event listeners
productGridContainer.addEventListener("click", event => {
  const addButton = event.target.closest("button[data-add-id]");
  if (!addButton) return;

  const productId = Number(addButton.dataset.addId);
  insertProductToCart(productId);
});

cartListContainer.addEventListener("click", event => {
  const incrementButton = event.target.closest("button[data-inc-id]");
  const decrementButton = event.target.closest("button[data-dec-id]");

  if (incrementButton) {
    const productId = Number(incrementButton.dataset.incId);
    adjustCartQuantity(productId, 1);
  }

  if (decrementButton) {
    const productId = Number(decrementButton.dataset.decId);
    adjustCartQuantity(productId, -1);
  }
});

emptyCartButton.addEventListener("click", emptyShoppingCart);

// Initial render
refreshDisplay();
displayCart();
