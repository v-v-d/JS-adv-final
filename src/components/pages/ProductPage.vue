<template>
  <div>
    <Header/>
    <NavBar/>
    <CatalogTitleCategory/>
    <ProductImageSlide/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import CatalogTitleCategory from '../elements/CatalogTitleCategory.vue';
  import ProductImageSlide from '../elements/ProductImageSlide.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'ProductPage',
    components: {
      Header,
      NavBar,
      CatalogTitleCategory,
      ProductImageSlide,
      Footer,
    }
  };
</script>

<style lang="sass">

</style>