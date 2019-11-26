<template>
  <div class="main-content">
    <div class="top-site">
      <router-view :products="products"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Marina t-shirt',
            price: 150,
            img: '/img/Layer_2.f493857e.jpg',
          },
          {
            id: 2,
            name: 'Marina t-shirt',
            price: 150,
            img: '/img/Layer_2.f493857e.jpg',
          },
          {
            id: 3,
            name: 'Marina t-shirt',
            price: 150,
            img: '/img/Layer_2.f493857e.jpg',
          },
          {
            id: 4,
            name: 'Marina t-shirt',
            price: 150,
            img: '/img/Layer_2.f493857e.jpg',
          },
          {
            id: 5,
            name: 'Marina t-shirt',
            price: 150,
            img: '/img/Layer_2.f493857e.jpg',
          },
        ],
      };
    },
  };
</script>

<style lang="sass">
  .outline-color-norm
    outline-color: transparent

  *
    margin: 0

  a
    text-decoration: none

  ul
    padding-left: 0

  body,
  html
    font-family: «Lato», sans-serif
    height: 100%

  .main-content
    display: flex
    flex-direction: column
    min-height: 100%

  .top-site
    flex: 1

  .content
    width: 1140px
    margin: 0 auto

  button
    transition: .3s

  img
    transition: .5s

  hr
    border: 1px solid #eaeaea
    box-sizing: border-box
    height: 1px
    margin-bottom: 40px

  .color-accent
    color: $colorAccent
</style>