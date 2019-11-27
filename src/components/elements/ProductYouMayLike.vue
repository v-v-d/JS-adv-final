<template>
  <section>
    <h2 class="head-you-may-like">you may like also</h2>
    <div class="grid-catalogue content">
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
  </section>
</template>

<script>
  import ProductCard from '../elements/ProductCard.vue';

  export default {
    name: 'ProductYouMayLike',
    props: ['products'],
    data() {
      return {
        slicedProducts: this.getSlicedProducts(),
      };
    },
    methods: {
      getRandInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getSlicedProducts() {
        const productsPerPage = 4;
        let randInt = this.getRandInt(0, this.products.length - productsPerPage);
        return this.products.slice(randInt, randInt + productsPerPage);
      },
      buyButtonHandler(product) {
        this.$emit('buy', product);
      },
    },
    components: {
      ProductCard,
    }
  };
</script>

<style lang="sass">
  .head-you-may-like
    color: #4d4d4d
    font-size: 24px
    line-height: 140px
    text-align: center
    text-transform: uppercase

  .grid-catalogue
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .product-item:nth-child(4n-1):last-child
    margin-right: 25.7%

  .product-item:nth-child(4n-2):last-child
    margin-right: 51.4%
</style>