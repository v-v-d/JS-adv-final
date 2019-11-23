<template>
  <div>
    <Header/>
    <NavBar/>
    <HomePageSlider />
    <HomePagePromoBox />
    <HomePageCatalogueContent />
    <HomePageFeature />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import HomePageSlider from '../elements/HomePageSlider.vue';
  import HomePagePromoBox from '../elements/HomePagePromoBox.vue';
  import HomePageCatalogueContent from '../elements/HomePageCatalogueContent.vue';
  import HomePageFeature from '../elements/HomePageFeature.vue';

  export default {
    name: 'HomePage',
    components: {
      Header,
      NavBar,
      HomePageSlider,
      HomePagePromoBox,
      HomePageCatalogueContent,
      HomePageFeature,
    },
  };
</script>

<style lang="sass">

</style>