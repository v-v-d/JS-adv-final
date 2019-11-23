<template>
  <div>
    <Header/>
    <NavBar/>
    <HomePageSlider />
    <HomePagePromoBox />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import HomePageSlider from '../elements/HomePageSlider.vue';
  import HomePagePromoBox from '../elements/HomePagePromoBox.vue';

  export default {
    name: 'HomePage',
    components: {
      Header,
      NavBar,
      HomePageSlider,
      HomePagePromoBox,
    }
  };
</script>

<style lang="scss">

</style>