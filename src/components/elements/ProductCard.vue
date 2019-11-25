<template>
  <article class="product-item">
    <router-link to="/catalog:{{ id }}">
      <div class="img-product">
        <img :src="img" alt="product">
      </div>

      <div class="product-description">
        <h3 class="product-name">{{ name }}</h3>
        <p class="product-price">${{ price }}</p>
      </div>
    </router-link>

    <div class="flex-center">
      <a @click="buyButtonHandler(id)" href="#" class="button-add-to-cart">
        <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
        <span>Add to Cart</span>
      </a>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: ['id', 'img', 'name', 'price'],
    methods: {
      buyButtonHandler(id) {
        this.$emit('buy', id);
      },
    },
  };
</script>

<style lang="sass">
  .product-item
    width: 261px
    position: relative
    margin-bottom: 40px

  .img-product
    overflow: hidden
    width: 261px
    height: 279px
    position: relative
    transition: .3s

  .product-item:hover
    img
      transform: scale(1.1) rotate(2deg)

  .product-description
    padding: 7px 20px

  .product-name
    color: $darkColorAccent
    font-size: 13px
    text-transform: uppercase
    padding: 7px 0

  .product-price
    color: $colorAccent
    font-size: 16px
    font-weight: 700
    padding: 7px 0

  .flex-center
    width: 261px
    display: flex
    justify-content: center

  .button-add-to-cart
    border: 1px solid $lightColorAccent
    box-sizing: border-box
    line-height: 39px
    color: $lightColorAccent
    padding: 0 13px 0 13px
    position: absolute
    top: 89px
    display: none
    @extend .flip-in-ver-left
    transition: .2s

  .button-add-to-cart-img
    width: 20px
    margin-right: 3px
    transform: none !important
</style>