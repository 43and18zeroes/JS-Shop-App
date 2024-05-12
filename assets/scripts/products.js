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

export { Product, PRODUCTS };