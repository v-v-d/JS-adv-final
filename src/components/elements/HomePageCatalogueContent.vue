<template>
  <section class="catalogue content">
    <div class="catalogue-header">
      <h3>Featured Items</h3>
      <h4>Shop for items based on what we featured in this week</h4>
    </div>

    <div class="grid-catalogue">
      <ProductCard
          v-for="product in slicedProducts"
          :key="product.id"
          :id="product.id"
          :img="product.img"
          :name="product.name"
          :price="product.price"
          @buy="buyButtonHandler(product)"
      />
    </div>

    <div class="browse-all-product">
      <Button :button-src="buttonSrc" :button-name="buttonName"/>
    </div>
  </section>
</template>

<script>
  import Button from '../elements/Button.vue';
  import ProductCard from '../elements/ProductCard.vue';

  export default {
    name: 'HomePageCatalogueContent',
    props: ['products'],
    data() {
      return {
        slicedProducts: this.getSlicedProducts(),
        buttonName: 'Browse All Product',
        buttonSrc: '/catalog',
      };
    },
    methods: {
      getRandInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getSlicedProducts() {
        const productsPerPage = 8;
        let randInt = this.getRandInt(0, this.products.length - productsPerPage);
        return this.products.slice(randInt, randInt + productsPerPage);
      },
      buyButtonHandler(product) {
        this.$emit('buy', product);
      },
    },
    components: {
      Button,
      ProductCard,
    },
  };
</script>

<style lang="sass">
  .catalogue-header
    margin-bottom: 100px

  .catalogue-header h3
    color: $darkColorAccent
    font-size: 30px
    font-weight: 700
    line-height: 44px
    text-align: center

  .catalogue-header h4
    color: #9f9f9f
    font-size: 14px
    font-weight: 400
    text-align: center

  .grid-catalogue
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .product-item
    width: 261px
    position: relative
    margin-bottom: 40px

  .product-item:nth-child(4n-1):last-child
    margin-right: 25.5%

  .product-item:nth-child(4n-2):last-child
    margin-right: 51.4%

  .product-item:hover
    img
      transform: scale(1.1) rotate(2deg)

  .product-item:hover
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)

  .product-item:hover
    .button-add-to-cart
      display: flex

  .product-item:hover .img-product
    filter: brightness(50%)

  .img-product
    overflow: hidden
    width: 261px
    height: 279px
    position: relative
    transition: .3s

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
    padding: 0 13px
    position: absolute
    top: 89px
    display: none
    @extend .flip-in-ver-left
    transition: .1s

  .button-add-to-cart:hover
    background-color: $colorAccent

  .button-add-to-cart-img
    width: 20px
    margin-right: 3px

  .browse-all-product
    display: flex
    justify-content: center
    margin: 40px 0

  .browse-all-product
    a
      display: block
      background-color: $colorAccent
      padding: 0 25px
      line-height: 48px
</style>