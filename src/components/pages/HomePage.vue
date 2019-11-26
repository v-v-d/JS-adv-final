<template>
  <div>
    <Header/>
    <NavBar/>
    <HomePageSlider />
    <HomePagePromoBox />
    <HomePageCatalogueContent :products="products" />
    <HomePageFeature />
    <Footer />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import HomePageSlider from '../elements/HomePageSlider.vue';
  import HomePagePromoBox from '../elements/HomePagePromoBox.vue';
  import HomePageCatalogueContent from '../elements/HomePageCatalogueContent.vue';
  import HomePageFeature from '../elements/HomePageFeature.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'HomePage',
    props: ['products'],
    components: {
      Header,
      NavBar,
      HomePageSlider,
      HomePagePromoBox,
      HomePageCatalogueContent,
      HomePageFeature,
      Footer,
    },
  };
</script>

<style lang="sass">

</style>