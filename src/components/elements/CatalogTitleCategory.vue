<template>
  <section class="title-category">
    <div class="content title-category-flex">
      <h2>New Arrivals</h2>
      <div class="crumb">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <p class="color-accent">NEW ARRIVALS</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CatalogTitleCategory',
  };
</script>

<style lang="sass">
  .title-category-flex
    display: flex
    justify-content: space-between
    align-items: center

  .title-category
    background: #f8f3f4
    margin-bottom: 50px
    padding: 50px
    box-sizing: border-box

  .title-category
    h2
      color: $colorAccent
      font-size: 24px
      font-weight: 900
      text-transform: uppercase

  .title-category
    .crumb
      display: flex

  .crumb
    a:after
      content: ' /'

  .crumb
    a:hover
      color: $colorAccent

  .crumb a
    color: #636363

  .crumb
    display: block
    padding: 2px
    color: #636363
    font-size: 14px
    text-transform: uppercase
</style>