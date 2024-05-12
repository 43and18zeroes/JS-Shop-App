import { PRODUCTS } from "./products.js";

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCard() {
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('div');
    prodEl.className = 'col-sm-6 col-md-4';
    prodEl.innerHTML = this.buildProductDisplay();
    const addCartButton = prodEl.querySelector('a');
    addCartButton.addEventListener('click', this.addToCard.bind(this));
    return prodEl;
  }

  buildProductDisplay() {
    return `<div class="thumbnail">
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="caption">
        <h3>${this.product.title}</h3>
        <p>${this.product.price}</p>
        <p>${this.product.description}</p>
        <p><a href="#" class="btn btn-primary" role="button">Add to Cart</a></p>
      </div>
    </div>`
  }
}

class ProductList {
  constructor() {
    this.products = PRODUCTS;
  }

  render(renderHook) {
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      renderHook.append(prodEl);
    }
  }
}

class Shop {
  render() {
    const renderHook = document.querySelector('body');
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render(renderHook);

    renderHook.append(cartEl);
    renderHook.append(productList);
  }
}

const shop = new Shop();
shop.render();

// class App {
//   static render() {
//     const productList = new ProductList();
//     productList.render();
//   }
// }

// App.render();