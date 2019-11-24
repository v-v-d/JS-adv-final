<template>
  <div>
    <Header/>
    <NavBar/>
    <CatalogTitleCategory/>
    <CatalogGridProduct/>
    <Footer />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import CatalogTitleCategory from '../elements/CatalogTitleCategory.vue';
  import CatalogGridProduct from '../elements/CatalogGridProduct.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'CatalogPage',
    components: {
      Header,
      NavBar,
      CatalogTitleCategory,
      CatalogGridProduct,
      Footer,
    },
  };
</script>

<style lang="scss">

</style>