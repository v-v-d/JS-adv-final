<template>
  <div>
    <Header/>
    <NavBar/>
    <HomePageSlider />
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import HomePageSlider from '../elements/HomePageSlider.vue';

  export default {
    name: 'HomePage',
    components: {
      Header,
      NavBar,
      HomePageSlider,
    }
  };
</script>

<style lang="scss">

</style>