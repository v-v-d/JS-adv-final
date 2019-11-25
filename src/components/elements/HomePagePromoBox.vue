<template>
  <div class="promo-box">
    <div class="content promo-box-flex">
      <div class="box">
        <a href="#" class="promo-box-item">
          <article class=" promo-box-square">
            <img src="../../assets/Layer_30.jpg" alt="promo-box-item">
            <div class="text-label">
              <h3>hOT dEAL</h3>
              <h2>FOR MEN</h2>
            </div>
          </article>
        </a>
        <a href="#" class="promo-box-item">
          <article class="promo-box-rectangular">
            <img src="../../assets/Layer_33.jpg" alt="promo-box-item">
            <div class="text-label">
              <h3>LUXIROUS & trendy</h3>
              <h2>ACCESORIES</h2>
            </div>
          </article>
        </a>
      </div>
      <div class="box">
        <a href="#" class="promo-box-item">
          <article class="promo-box-rectangular">
            <img src="../../assets/Layer_32.jpg" alt="promo-box-item">
            <div class="text-label">
              <h3>30% offer</h3>
              <h2>women</h2>
            </div>
          </article>
        </a>
        <a href="#" class="promo-box-item">
          <article class="promo-box-square">
            <img src="../../assets/Layer_31.jpg" alt="promo-box-item">
            <div class="text-label">
              <h3>new arrivals</h3>
              <h2>FOR kids</h2>
            </div>
          </article>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePagePromoBox',
  };
</script>

<style lang="sass">
  .promo-box
    margin: 100px 0
    box-sizing: border-box

  .promo-box-flex
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  .promo-box-item
    display: block

  .promo-box-item:hover
    img
      transform: scale(1.1)

  .box .promo-box-item:nth-child(n)
    margin-bottom: 20px

  .box .promo-box-item:last-child
    margin-bottom: 0

  .promo-box-square
    width: 560px
    height: 542px
    overflow: hidden
    position: relative

  .promo-box-square img
    height: 542px

  .text-label
    background: $lightColorAccent
    position: absolute
    top: 25px
    left: 0
    padding: 20px 15px
    text-transform: uppercase

  .text-label
    h3
      color: $darkColorAccent
      font-size: 18px

  .text-label
    h2
      color: $colorAccent
      font-size: 30px

  .promo-box-rectangular
    width: 560px
    height: 261px
    overflow: hidden
    position: relative
</style>