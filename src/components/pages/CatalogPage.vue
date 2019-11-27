<template>
  <div>
    <Header/>
    <NavBar/>
    <CatalogTitleCategory/>
    <CatalogGridProduct :products="products" @buy="buyButtonHandler"/>
    <CatalogFeatureProduct/>
    <Footer />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import CatalogTitleCategory from '../elements/CatalogTitleCategory.vue';
  import CatalogGridProduct from '../elements/CatalogGridProduct.vue';
  import CatalogFeatureProduct from '../elements/CatalogFeatureProduct.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'CatalogPage',
    props: ['products'],
    methods: {
      buyButtonHandler(product) {
        this.$emit('buy', product);
      },
    },
    components: {
      Header,
      NavBar,
      CatalogTitleCategory,
      CatalogGridProduct,
      CatalogFeatureProduct,
      Footer,
    },
  };
</script>

<style lang="scss">

</style>