<template>
  <section class="catalogue content">
    <div class="catalogue-header">
      <h3>Featured Items</h3>
      <h4>Shop for items based on what we featured in this week</h4>
    </div>
    <div class="grid-catalogue">

      <article class="product-item">
        <a href="#">
          <div class="img-product">

            <img src="../../assets/Layer_2.jpg" alt="product">
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

            <img src="../../assets/Layer_3.jpg" alt="product">
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

            <img src="../../assets/Layer_4.jpg" alt="product">
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

            <img src="../../assets/Layer_5.jpg" alt="product">
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

            <img src="../../assets/Layer_6.jpg" alt="product">
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

            <img src="../../assets/Layer_7.jpg" alt="product">
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

            <img src="../../assets/Layer_8.jpg" alt="product">
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

            <img src="../../assets/Layer_9.jpg" alt="product">
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
    <div class="browse-all-product">
      <Button :button-name="buttonName"/>
    </div>
  </section>
</template>

<script>
  import Button from '../elements/Button.vue';

  export default {
    name: 'HomePageCatalogueContent',
    data() {
      return {
        buttonName: 'Browse All Product', // TODO: убрать хардкод
      };
    },
    components: {
      Button,
    },
  };
</script>

<style lang="sass">
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

  .catalogue-header
    margin-bottom: 100px

  .catalogue-header h3
    color: $darkColorAccent
    font-size: 30px
    font-weight: 700
    line-height: 44px
    text-align: center

  .catalogue-header h4
    color: #9f9f9f
    font-size: 14px
    font-weight: 400
    text-align: center

  .grid-catalogue
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .product-item
    width: 261px
    position: relative
    margin-bottom: 40px

  .product-item:hover
    img
      transform: scale(1.1) rotate(2deg)

  .product-item:hover
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)

  .product-item:hover
    .button-add-to-cart
      display: flex

  .product-item:hover .img-product
    filter: brightness(50%)

  .img-product
    overflow: hidden
    width: 261px
    height: 279px
    position: relative
    transition: .3s

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
    /*background: rgba(255, 255, 255, 0) url("../img/add-to-cart.svg") no-repeat 10px 10px*/
    padding: 0 13px
    position: absolute
    top: 89px
    display: none
    @extend .flip-in-ver-left
    transition: .1s

  /*.button-add-to-cart:hover*/
  /*  background: $colorAccent url("../img/add-to-cart.svg") no-repeat 10px 10px*/

  .button-add-to-cart:hover
    background-color: $colorAccent

  .button-add-to-cart-img
    width: 20px
    margin-right: 3px

  .browse-all-product
    display: flex
    justify-content: center
    margin: 40px 0

  .browse-all-product
    a
      display: block
      background-color: $colorAccent
      padding: 0 25px
      line-height: 48px
</style>