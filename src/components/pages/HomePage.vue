<template>
  <div>
    <Header/>
    <NavBar/>
    <HomePageSlider />
    <HomePagePromoBox />
    <HomePageCatalogueContent />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import HomePageSlider from '../elements/HomePageSlider.vue';
  import HomePagePromoBox from '../elements/HomePagePromoBox.vue';
  import HomePageCatalogueContent from '../elements/HomePageCatalogueContent.vue';

  export default {
    name: 'HomePage',
    components: {
      Header,
      NavBar,
      HomePageSlider,
      HomePagePromoBox,
      HomePageCatalogueContent,
    },
  };
</script>

<style lang="sass">

</style>