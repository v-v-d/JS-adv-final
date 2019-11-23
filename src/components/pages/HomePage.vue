<template>
  <div>
    <Header/>
    <NavBar/>
  </div>
</template>

<script>
  import Header from '../elements/Header.vue';
  import NavBar from '../elements/NavBar.vue';

  export default {
    name: 'HomePage',
    components: {
      Header,
      NavBar,
    }
  };
</script>

<style lang="scss">

</style>