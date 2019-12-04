<template>
  <div class="feature-product">
    <div class="content feature-product-flex">
      <article class="feature-product-item">
        <div class="flex-center-img">
          <img class="flex-center-img" src="../../assets/Forma_1.svg" alt="feature-product-item">
        </div>
        <h2>Free Delivery</h2>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
          models.</p>
      </article>
      <article class="feature-product-item">
        <div class="flex-center-img">
          <img class="flex-center-img" src="../../assets/Forma_2.svg" alt="feature-product-item">
        </div>
        <h2>Sales & discounts</h2>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
          models.</p>
      </article>
      <article class="feature-product-item">
        <div class="flex-center-img">
          <img class="flex-center-img" src="../../assets/Forma_3.svg" alt="feature-product-item">
        </div>
        <h2>Quality assurance</h2>
        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
          models.</p>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogFeatureProduct',
  };
</script>

<style lang="sass">
  .feature-product
    background-color: $darkColorAccent
    padding: 100px 0
    box-sizing: border-box

  .feature-product-flex
    display: flex
    justify-content: space-between

  .feature-product-item
    margin: 0 20px

  .flex-center-img
    display: flex
    justify-content: center
    margin-bottom: 10px

  .feature-product-item
    h2
      color: #fbfbfb
      font-size: 20px
      font-weight: 700
      text-align: center
      margin-bottom: 20px

  .feature-product-item
    p
      color: #fbfbfb
      font-size: 14px
      line-height: 24px
      text-align: center
</style>