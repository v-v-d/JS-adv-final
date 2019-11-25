<template>
  <div>
    <Header/>
    <NavBar/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';
  import Footer from '../elements/Footer.vue';

  export default {
    name: 'ProductPage',
    components: {
      Header,
      NavBar,
      Footer,
    }
  };
</script>

<style lang="scss">

</style>