<template>
  <section class="feature content feature-flex">
    <div class="fon">
      <img src="../../assets/Layer_38.jpg" alt="feature">
      <div class="feature-header">
        <h2>30% <span class="color-accent">OFFER</span></h2>
        <h3>FOR WOMEN</h3>
      </div>
    </div>
    <div class="feature-description">

      <article class="feature-description-item">
        <img src="../../assets/Forma_1.svg" alt="feature-description-item">
        <div class="feature-description-text">
          <h3>Free Delivery</h3>
          <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
            models.</p>
        </div>
      </article>
      <article class="feature-description-item">
        <img src="../../assets/Forma_2.svg" alt="feature-description-item">
        <div class="feature-description-text">
          <h3>Sales & discounts</h3>
          <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
            models.</p>
        </div>
      </article>
      <article class="feature-description-item">
        <img src="../../assets/Forma_3.svg" alt="feature-description-item">
        <div class="feature-description-text">
          <h3>Quality assurance</h3>
          <p>Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive
            models.</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePageFeature',
  }
</script>

<style lang="sass">
  .feature
    margin-top: 100px
    margin-bottom: 50px
    box-sizing: border-box
    height: 529px

  .feature-flex
    display: flex

  .feature
    .fon
      width: 767px
      height: 100%
      overflow: hidden
      position: relative

  .feature
    .fon
      img
        height: 100%

  .feature-header
    position: absolute
    top: 145px
    left: 40px

  .feature-header
    h2
      color: $lightColorAccent
      font-size: 53px

  .feature-header
    h3
      color: $lightColorAccent
      font-size: 32px

  .color-accent
    color: $colorAccent

  .feature-description
    background: #222224
    color: #fbfbfb
    width: 373px
    overflow: hidden

  .feature-description-item
    display: flex
    align-items: flex-start
    margin: 50px 40px 0 35px

  .feature-description-text
    margin-left: 35px

  .feature-description-text
    h3
      color: #fbfbfb
      font-size: 20px
      margin-bottom: 10px

  .feature-description-text
    p
      color: #fbfbfb
      font-size: 14px
      line-height: 24px
      word-break: break-all
</style>