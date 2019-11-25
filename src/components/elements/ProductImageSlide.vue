<template>
  <div class="image-slide">
    <div class="image-slide-item">
      <img src="../../assets/slider-women.jpg" alt="slider-women">
    </div>
    <div class="arrow">
      <a href="#">
        <div class="arrow-l">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
      </a>
      <a href="#">
        <div class="arrow-r">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductImageSlide',
  };
</script>


<style lang="sass">
  .image-slide
    position: relative
    border: 1px solid #eaeaea
    box-sizing: border-box

  .image-slide-item
    height: auto

  .image-slide-item
    img
      width: 100%
      z-index: -1

  .arrow
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
    width: 100%
    position: absolute
    top: 0

  .arrow-l
    background-color: rgba(42, 42, 42, 0.15)
    width: 47px
    height: 47px
    line-height: 47px
    text-align: center
    color: $lightColorAccent
    font-size: 24px
    transition: .2s

  .arrow-r
    @extend .arrow-l

  .arrow-l:hover
    background-color: $colorAccent

  .arrow-r:hover
    @extend .arrow-l:hover
</style>