import { PRODUCTS } from './products.js';

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `Total: \$${1}`;
  }

  render() {
    const cartEl = document.createElement('table');
    cartEl.className = 'table';
    cartEl.innerHTML = this.buildCartItemsDisplay();
    this.totalOutput = cartEl.querySelector('td:first-of-type');
    return cartEl;
  }

  buildCartItemsDisplay() {
    return `<tbody>
      <tr>
        <td>Total: \$${0}</td>
        <td><button>Order Now!</button></td>
      </tr>
    </tbody>`;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCard() {
    // console.log('Adding product to cart...');
    // console.log(this.product);
    App.addProductToCart(this.product);
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
    </div>`;
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
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    renderHook.append(cartEl);
    productList.render(renderHook);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();