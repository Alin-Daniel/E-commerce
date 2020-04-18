class CartModel {
  static addProduct(product, quantity = 1) {
    // get cart from local storage
    let cart = { products: [], totalPrice: 0 };
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
  }

  static deleteProduct(productId, productPrice) {
    let cart = { products: [], totalPrice: 0 };

    const updatedCart = {...cart};
    const product = updatedCart.products.find(prod => prod.id === productId);
    const quantity = product.quantity;
    updatedCart.products.filter(prod => prod.id !== productId);
    updatedCart.totalPrice = updatedCart.totalPrice - productPrice * quantity;
    // save cart to local storage
  }
}

export default CartModel;
