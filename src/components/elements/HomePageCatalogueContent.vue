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

<style lang="sass" scoped>
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

  .product-item:nth-child(4n-1):last-child
    margin-right: 25.5%

  .product-item:nth-child(4n-2):last-child
    margin-right: 51.4%

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

  .product-item:nth-child(4n-1):last-child
    margin-right: 25.7%

  .product-item:nth-child(4n-2):last-child
    margin-right: 51.4%

</style>