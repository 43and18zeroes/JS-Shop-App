class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const PRODUCTS = [
  new Product(
    'Dumbbells',
    './assets/img/fitness-5013986_640.jpg',
    'State of the Art Dumbbells',
    49.99
  ),
  new Product(
    'Barbell',
    './assets/img/gym-592899_640.jpg',
    'High Quality Barbell',
    99.99
  ),
];

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

  render() {
    const renderHook = document.querySelector('body');
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      renderHook.append(prodEl);
    }
  }
}

class App {
  static render() {
    const productList = new ProductList();
    productList.render();
  }
}

App.render();