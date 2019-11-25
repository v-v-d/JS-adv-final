<template>
  <div>
    <Header/>
    <NavBar/>
    <CatalogTitleCategory/>
    <CheckoutOrdering/>
    <CatalogFeatureProduct/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import CatalogTitleCategory from '../elements/CatalogTitleCategory.vue';
  import CheckoutOrdering from '../elements/CheckoutOrdering.vue';
  import CatalogFeatureProduct from '../elements/CatalogFeatureProduct.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'CheckoutPage',
    components: {
      Header,
      NavBar,
      CatalogTitleCategory,
      CheckoutOrdering,
      CatalogFeatureProduct,
      Footer,
    }
  };
</script>

<style lang="sass">

</style>