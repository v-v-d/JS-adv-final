<template>
  <div class="main-content">
    <div class="top-site">
      <router-view :products="products" :cart-items="cartItems"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        products: [],
        cartItems: [],
        query: '',
        hasError: false,
        errorMessage: '',
      };
    },
    methods: {
      fetchProducts() {
        // return fetch('http://httpstat.us/500') // тест на ошибку
        return fetch('/products')
          .then(response => response.json())
          .then(products => {
            this.products = products;
            this.hasError = false;
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.hasError = true;
          });
      },
      fetchCart() {
        // return fetch('http://httpstat.us/500') // тест на ошибку
        return fetch('/cart')
          .then(response => response.json())
          .then(cartItems => {
            this.cartItems = cartItems;
            this.hasError = false;
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.hasError = true;
          });
      },
      addProductToCart(product) {
        // fetch('http://httpstat.us/500') // тест на ошибку
        fetch('/cart', {
          method: 'POST',
          body: JSON.stringify({...product, qty: 1}),
          headers: {
            'Content-type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then(() => this.hasError = false)
          .catch(error => {
            this.errorMessage = error.message;
            this.hasError = true;
          });
        this.cartItems.push({...product, qty: 1});
      },
      updateCartItem(cartItemId, newQty) {
        // fetch('http://httpstat.us/500') // тест на ошибку
        fetch(`/cart/${cartItemId}`, {
          method: 'PATCH',
          body: JSON.stringify({qty: newQty}),
          headers: {
            'Content-type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(() => this.hasError = false)
          .catch(error => {
            this.errorMessage = error.message;
            this.hasError = true;
          });
        this.getCurrentCartItem(cartItemId).qty = newQty;
      },
      deleteCartItem(itemId) {
        // fetch('http://httpstat.us/500') // тест на ошибку
        fetch(`/cart/${itemId}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(() => {
            this.hasError = false;
            const idx = this.cartItems.findIndex(entity => entity.id === itemId);
            this.cartItems.splice(idx, 1);
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.hasError = true;
          });
      },
      buyButtonHandler(product) {
        let currentCartItem = this.getCurrentCartItem(product.id);
        if (currentCartItem === undefined) {
          this.addProductToCart(product)
        } else {
          this.updateCartItem(product.id, currentCartItem.qty += 1)
        }
      },
      updateCartItemButtonHandler(cartItemId, event) {
        let newQty = +event.target.value;
        if (newQty < 1) {
          if (this.getCurrentCartItem(cartItemId).qty > 1) {
            this.updateCartItem(cartItemId, 1);
          }
          event.target.value = 1;
        } else {
          this.updateCartItem(cartItemId, newQty);
        }
      },
      deleteCartItemButtonHandler(itemId) {
        this.deleteCartItem(itemId);
      },
      searchButtonClickHandler(query) {
        this.query = query;
      },
      getCurrentCartItem(cartItemId) {
        let currentCartItemIdx = this.cartItems.findIndex(entity => entity.id === cartItemId);
        return this.cartItems[currentCartItemIdx];
      },
    },
    computed: {
      filterProducts() {
        return this.products.filter(product => {
          const regexp = new RegExp(this.query, 'i');
          return regexp.test(product.name);
        });
      },
    },
    mounted() {
      this.fetchProducts();
      this.fetchCart();
    },
  };
</script>

<style lang="sass">
  .outline-color-norm
    outline-color: transparent

  *
    margin: 0

  a
    text-decoration: none

  ul
    padding-left: 0

  body,
  html
    font-family: «Lato», sans-serif
    height: 100%

  .main-content
    display: flex
    flex-direction: column
    min-height: 100%

  .top-site
    flex: 1

  .content
    width: 1140px
    margin: 0 auto

  button
    transition: .3s

  img
    transition: .5s

  hr
    border: 1px solid #eaeaea
    box-sizing: border-box
    height: 1px
    margin-bottom: 40px

  .color-accent
    color: $colorAccent
</style>