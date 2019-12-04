<template>
  <section class="product-details content">
    <div class="head-product-details">
      <h3 class="flex-4 text-start">Product Details</h3>
      <h3 class="flex-1">unite Price</h3>
      <h3 class="flex-1">Quantity</h3>
      <h3 class="flex-1">shipping</h3>
      <h3 class="flex-1">Subtotal</h3>
      <h3 class="flex-1">ACTION</h3>
    </div>
    <div class="box-product-details">
      <article class="product-details-item">

        <a href="#" class=" flex-4 product-cart-mini">
          <div class="img-product-mini">
            <img src="../../assets/2_3.jpg" alt="img">
          </div>
          <div class="characteristics">
            <h3>Mango People T-shirt</h3>
            <p>Color: <span>Red</span></p>
            <p>Size: <span>Xll</span></p>
          </div>
        </a>

        <div class="flex-1">
          $150
        </div>
        <div class="flex-1">
          <form class="quantity">
            <input type="number">
          </form>
        </div>
        <div class="flex-1">
          FREE
        </div>
        <div class="flex-1">
          $300
        </div>
        <div class="flex-1">
          <form>
            <button class="delete-product" type="button">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </article>
      <article class="product-details-item">

        <a href="#" class=" flex-4 product-cart-mini">
          <div class="img-product-mini">
            <img src="../../assets/2_1.jpg" alt="img">
          </div>
          <div class="characteristics">
            <h3>Mango People T-shirt</h3>
            <p>Color: <span>Red</span></p>
            <p>Size: <span>Xll</span></p>
          </div>
        </a>

        <div class="flex-1">
          $150
        </div>
        <div class="flex-1">
          <form class="quantity">
            <input type="number">
          </form>
        </div>
        <div class="flex-1">
          FREE
        </div>
        <div class="flex-1">
          $300
        </div>
        <div class="flex-1">
          <form>
            <button class="delete-product" type="button">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </article>
      <article class="product-details-item">

        <a href="#" class=" flex-4 product-cart-mini">
          <div class="img-product-mini">
            <img src="../../assets/2_5.jpg" alt="img">
          </div>
          <div class="characteristics">
            <h3>Mango People T-shirt</h3>
            <p>Color: <span>Red</span></p>
            <p>Size: <span>Xll</span></p>
          </div>
        </a>

        <div class="flex-1">
          $150
        </div>
        <div class="flex-1">
          <form class="quantity">
            <input type="number">
          </form>
        </div>
        <div class="flex-1">
          FREE
        </div>
        <div class="flex-1">
          $300
        </div>
        <div class="flex-1">
          <form>
            <button class="delete-product" type="button">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </article>
    </div>

    <div class="box-btn">
      <button>cLEAR SHOPPING CART</button>
      <button>cONTINUE sHOPPING</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CartProductDetails',
  };
</script>

<style lang="sass">
  .head-product-details
    display: flex
    color: $darkColorAccent
    font-size: 13px
    font-weight: 700
    line-height: 40px
    text-transform: uppercase

  .head-product-details
    h3
      text-align: center

  .head-product-details
    .text-start
      text-align: left

  .head-product-details
    border-bottom: 1px solid #eaeaea

  .flex-4
    flex: 4

  .flex-1
    flex: 1

  .box-product-details
    margin-bottom: 40px

  .product-details-item
    padding: 20px 0
    display: flex
    align-items: center
    color: #656565
    font-size: 13px
    font-weight: 400
    line-height: 20px
    border-bottom: 1px solid #eaeaea
    transition: border-bottom-color .3s

  .product-details-item:hover
    border-bottom: 1px solid $colorAccent

  .product-details-item
    div
      display: flex
      justify-content: center

  .product-details-item
    .product-cart-mini
      display: flex
      justify-content: flex-start

  .product-details-item
    .characteristics
      display: block
      font-weight: 700

  .img-product-mini
    width: 100px
    height: 115px
    overflow: hidden
    margin-right: 20px

  .img-product-mini
    img
      height: 100%

  .characteristics h3
    margin: 5px 0 30px 0
    color: $darkColorAccent
    font-size: 13px
    text-transform: uppercase

  .characteristics p
    color: $darkColorAccent

  .characteristics
    span
      color: #6f6e6e
      font-weight: 300

  .quantity
    input
      width: 54px
      line-height: 30px
      align-items: center
      padding-left: 10px
      box-sizing: border-box

  .delete-product
    border: none
    background: $lightColorAccent
    color: #c0c0c0
    font-size: 16px

  .delete-product:hover
    color: $colorAccent

  .box-btn
    display: flex
    justify-content: space-between

  .box-btn button
    text-transform: uppercase
    color: #4a4a4a
    font-size: 14px
    font-weight: 700
    line-height: 50px
    padding: 0 35px
    border: 1px solid #eaeaea
    box-sizing: border-box
    background-color: $lightColorAccent
    margin-bottom: 40px

  .box-btn button:hover
    color: $lightColorAccent
    background: $colorAccent
</style>