class CartModel {
  static addProduct(product, quantity = 1) {
    // get cart from local storage
    let cart = this.getCart();

    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    // let cart = { products: [], totalPrice: 0 };
    const productIndex = cart.products.findIndex(
      (prod) => prod.id === product.id
    );
    const existingProduct = cart.products[productIndex];

    if (existingProduct) {
      const updatedProduct = { ...existingProduct };
      updatedProduct.quantity = updatedProduct.quantity + quantity;
      const updatedProducts = [...cart.products];
      updatedProducts[productIndex] = updatedProduct;
      cart.products = updatedProducts;
    } else {
      cart.products = [...cart.products, { product, quantity }];
    }
    cart.totalPrice = cart.totalPrice + product.price * quantity;
    //save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart () {
    return JSON.parse(localStorage.getItem("cart"));
  }

  static deleteProduct(productId, productPrice) {
    let cart = this.getCart();

    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    const updatedCart = { ...cart };
    const product = updatedCart.products.find((prod) => prod.id === productId);
    const quantity = product.quantity;
    updatedCart.products.filter((prod) => prod.id !== productId);
    updatedCart.totalPrice = updatedCart.totalPrice - productPrice * quantity;
    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static editQuantity(productId, quantity){
    let cart = this.getCart();
    if(cart){
      const productIndex = cart.products.findIndex(prod => prod.id === productId);
      const product = cart.products[productIndex];
      if(product){
        const updatedProduct = {...product};
        updatedProduct.quantity = quantity;
        cart.totalPrice = updatedProduct.quantity * updatedProduct.price;
        cart.products[productIndex] = updatedProduct;

        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }

  static emptyCart() {
    localStorage.removeItem('cart');
  }
}

export default CartModel;
