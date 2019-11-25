<template>
  <section class="slider">
    <div class="slider-back content">
      <div class="img-box">
        <img class="slider-img" src="../../assets/slider.jpg">
      </div>
      <div class="slider-text">
        <h2>THE BRAND</h2>
        <h3>OF LUXERIOUS <span class="color-accent">FASHION</span></h3>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePageSlider',
  };
</script>

<style lang="sass">
  .slider
    background: #e8e8e8
    height: 614px

  .slider-back
    height: 100%
    display: flex
    align-items: center

  .img-box
    position: relative
    overflow: hidden
    height: 100%
    width: 100%

  .slider-img
    position: absolute
    top: 46%
    left: 53%
    transform: translate(-50%,-50%)
    object-fit: cover

  .slider-text
    @extend .tracking-in-contract-bck

  .slider-text
    h2
      color: $darkColorAccent
      font-size: 60px
      font-weight: 900
      transform: scaleY(1.0009)

  .slider-text
    h3
      color: $darkColorAccent
      font-size: 40px
      transform: scaleY(1.0009)

  .slider-text
    position: absolute

  .slider-text:before
    content: ''
    background-color: $colorAccent
    width: 12px
    height: 75%
    left: -20px
    bottom: 10px
    position: absolute

  .color-accent
    color: $colorAccent
</style>