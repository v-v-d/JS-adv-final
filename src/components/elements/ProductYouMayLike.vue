<template>
  <section>
    <h2 class="head-you-may-like">you may like also</h2>
    <div class="grid-catalogue content">
      <article class="product-item">
        <a href="#">
          <div class="img-product">

            <img src="../../assets/Layer_44.jpg" alt="product">
          </div>

          <div class="product-description">
            <h3 class="product-name">Mango People T-shirt</h3>
            <p class="product-price">$52.00</p>
          </div>
        </a>
        <div class="flex-center">
          <a href="#" class="button-add-to-cart">
            <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </a>
        </div>
      </article>
      <article class="product-item">
        <a href="#">
          <div class="img-product">
            <img src="../../assets/Layer_45.jpg" alt="product">
          </div>

          <div class="product-description">
            <h3 class="product-name">Mango People T-shirt</h3>
            <p class="product-price">$52.00</p>
          </div>
        </a>
        <div class="flex-center">
          <a href="#" class="button-add-to-cart">
            <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </a>
        </div>
      </article>
      <article class="product-item">
        <a href="#">
          <div class="img-product">
            <img src="../../assets/Layer_46.jpg" alt="product">
          </div>

          <div class="product-description">
            <h3 class="product-name">Mango People T-shirt</h3>
            <p class="product-price">$52.00</p>
          </div>
        </a>
        <div class="flex-center">
          <a href="#" class="button-add-to-cart">
            <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </a>
        </div>
      </article>
      <article class="product-item">
        <a href="#">
          <div class="img-product">
            <img src="../../assets/Layer_47.jpg" alt="product">
          </div>

          <div class="product-description">
            <h3 class="product-name">Mango People T-shirt</h3>
            <p class="product-price">$52.00</p>
          </div>
        </a>
        <div class="flex-center">
          <a href="#" class="button-add-to-cart">
            <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </a>
        </div>
      </article>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'ProductYouMayLike',
  };
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $darkColorAccent: #222222
  $lightColorAccent: #ffffff

  .head-you-may-like
    color: #4d4d4d
    font-size: 24px
    line-height: 140px
    text-align: center
    text-transform: uppercase

  // TODO: эта часть повторяется в католге. Объединить в отдельный компонент
  .grid-catalogue
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .product-item
    width: 261px
    position: relative
    margin-bottom: 40px

  .img-product
    overflow: hidden
    width: 261px
    height: 279px
    position: relative
    transition: .3s

  .product-item:hover
    img
      transform: scale(1.1) rotate(2deg)

  .product-description
    padding: 7px 20px

  .product-name
    color: $darkColorAccent
    font-size: 13px
    text-transform: uppercase
    padding: 7px 0

  .product-price
    color: $colorAccent
    font-size: 16px
    font-weight: 700
    padding: 7px 0

  .flex-center
    width: 261px
    display: flex
    justify-content: center

  .button-add-to-cart
    border: 1px solid $lightColorAccent
    box-sizing: border-box
    line-height: 39px
    color: $lightColorAccent
    padding: 0 13px 0 13px
    position: absolute
    top: 89px
    display: none
    @extend .flip-in-ver-left
    transition: .2s

  .button-add-to-cart-img
    width: 20px
    margin-right: 3px
    transform: none !important

  .product-item:hover
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)

  .product-item:hover
    .button-add-to-cart
      display: flex

  .product-item:hover .img-product
    filter: brightness(50%)

  .button-add-to-cart:hover
    background: $colorAccent

  .flip-in-ver-left
    -webkit-animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
    animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

  @-webkit-keyframes flip-in-ver-left
    0%
      -webkit-transform: rotateY(80deg)
      transform: rotateY(80deg)
      opacity: 0
    100%
      -webkit-transform: rotateY(0)
      transform: rotateY(0)
      opacity: 1
    @keyframes flip-in-ver-left
      0%
        -webkit-transform: rotateY(80deg)
        transform: rotateY(80deg)
        opacity: 0
    100%
      -webkit-transform: rotateY(0)
      transform: rotateY(0)
      opacity: 1
</style>